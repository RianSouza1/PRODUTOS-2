<?php
/**
 * api.php - Backend de Persistência Centralizada e Sincronização em Tempo Real
 * 
 * Suporta ações atômicas (stopwatch, entradas, funcionários) para evitar concorrência
 * e sobrescrita de dados entre diferentes abas e dispositivos.
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Cache-Control');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataFile = __DIR__ . '/data.json';

function getServerTime() {
    return round(microtime(true) * 1000);
}

function loadDatabase($dataFile) {
    if (!file_exists($dataFile)) {
        return null;
    }
    $raw = @file_get_contents($dataFile);
    if (!$raw) {
        return null;
    }
    $decoded = json_decode($raw, true);
    if (!is_array($decoded) || !isset($decoded['employees']) || !is_array($decoded['employees'])) {
        return null;
    }
    return $decoded;
}

function saveDatabase($dataFile, $data) {
    $data['serverTime'] = getServerTime();
    $data['updatedAt'] = date('c');
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    $result = @file_put_contents($dataFile, $json, LOCK_EX);
    return $result !== false;
}

// Resposta GET: Retorna o estado atual com serverTime
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = loadDatabase($dataFile);
    if ($data !== null) {
        $data['serverTime'] = getServerTime();
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            'status' => 'empty',
            'serverTime' => getServerTime(),
            'message' => 'Nenhum dado salvo no servidor ainda.'
        ], JSON_UNESCAPED_UNICODE);
    }
    exit();
}

// Resposta POST: Executa ações atômicas ou sincronização completa
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    if (empty($input)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Corpo da requisição vazio.']);
        exit();
    }

    $payload = json_decode($input, true);
    if ($payload === null) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'JSON inválido enviado ao servidor.']);
        exit();
    }

    $db = loadDatabase($dataFile);
    if ($db === null) {
        $db = [
            'theme' => 'dark',
            'employees' => [],
            'undoStack' => []
        ];
    }

    $action = $payload['action'] ?? null;

    // --- AÇÃO 1: ATUALIZAR CRONÔMETRO (ATÔMICA) ---
    if ($action === 'update_stopwatch') {
        $empId = $payload['employeeId'] ?? null;
        $stopwatch = $payload['stopwatch'] ?? null;

        if (!$empId || !is_array($stopwatch)) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados de cronômetro incompletos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId) {
                $emp['stopwatch'] = [
                    'isRunning' => (bool)($stopwatch['isRunning'] ?? false),
                    'startTime' => $stopwatch['startTime'] !== null ? (float)$stopwatch['startTime'] : null,
                    'accumulatedMs' => (float)($stopwatch['accumulatedMs'] ?? 0),
                    'updatedAt' => $stopwatch['updatedAt'] ?? getServerTime()
                ];
                $found = true;
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Funcionário não encontrado.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar no arquivo data.json.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Cronômetro sincronizado com sucesso.'
        ]);
        exit();
    }

    // --- AÇÃO 2: ADICIONAR FUNCIONÁRIO (ATÔMICA) ---
    if ($action === 'add_employee') {
        $newEmp = $payload['employee'] ?? null;
        if (!$newEmp || !isset($newEmp['id']) || !isset($newEmp['name'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados de funcionário inválidos.']);
            exit();
        }

        // Verifica se já existe funcionário com o mesmo ID
        $exists = false;
        foreach ($db['employees'] as $emp) {
            if ($emp['id'] === $newEmp['id']) {
                $exists = true;
                break;
            }
        }

        if (!$exists) {
            // Garante campos padrões
            if (!isset($newEmp['stopwatch']) || !is_array($newEmp['stopwatch'])) {
                $newEmp['stopwatch'] = ['isRunning' => false, 'startTime' => null, 'accumulatedMs' => 0];
            }
            if (!isset($newEmp['entries']) || !is_array($newEmp['entries'])) {
                $newEmp['entries'] = [];
            }
            if (!isset($newEmp['completedCyclesHistory']) || !is_array($newEmp['completedCyclesHistory'])) {
                $newEmp['completedCyclesHistory'] = [];
            }
            $newEmp['completedCyclesCount'] = (int)($newEmp['completedCyclesCount'] ?? 0);

            $db['employees'][] = $newEmp;
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar novo funcionário no servidor.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'employee' => $newEmp,
            'message' => 'Funcionário adicionado com sucesso no servidor.'
        ]);
        exit();
    }

    // --- AÇÃO 3: EDITAR FUNCIONÁRIO (ATÔMICA) ---
    if ($action === 'update_employee') {
        $empId = $payload['employeeId'] ?? null;
        $fields = $payload['fields'] ?? [];

        if (!$empId || !is_array($fields)) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados de edição incompletos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId) {
                if (isset($fields['name']) && trim($fields['name']) !== '') {
                    $emp['name'] = trim($fields['name']);
                    $emp['avatar'] = $fields['avatar'] ?? strtoupper(substr($emp['name'], 0, 2));
                }
                if (isset($fields['role'])) $emp['role'] = trim($fields['role']);
                if (isset($fields['targetHours'])) $emp['targetHours'] = (int)$fields['targetHours'];
                if (isset($fields['color'])) $emp['color'] = $fields['color'];
                $found = true;
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Funcionário não encontrado para edição.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar alterações do funcionário.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Funcionário atualizado com sucesso.'
        ]);
        exit();
    }

    // --- AÇÃO 4: EXCLUIR FUNCIONÁRIO (ATÔMICA) ---
    if ($action === 'delete_employee') {
        $empId = $payload['employeeId'] ?? null;
        if (!$empId) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID do funcionário ausente.']);
            exit();
        }

        if (count($db['employees']) <= 1) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Não é permitido excluir o único funcionário restante.']);
            exit();
        }

        $initialCount = count($db['employees']);
        $db['employees'] = array_values(array_filter($db['employees'], function($e) use ($empId) {
            return $e['id'] !== $empId;
        }));

        if (count($db['employees']) === $initialCount) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Funcionário não encontrado para exclusão.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar exclusão no servidor.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Funcionário excluído com sucesso.'
        ]);
        exit();
    }

    // --- AÇÃO 5: ADICIONAR ENTRADA DE HORAS (ATÔMICA) ---
    if ($action === 'add_entry') {
        $empId = $payload['employeeId'] ?? null;
        $entry = $payload['entry'] ?? null;

        if (!$empId || !$entry || !isset($entry['id'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados de entrada inválidos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId) {
                if (!isset($emp['entries']) || !is_array($emp['entries'])) {
                    $emp['entries'] = [];
                }
                // Adiciona no início da lista
                array_unshift($emp['entries'], $entry);
                $found = true;
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Funcionário não encontrado para adicionar horas.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar registro de horas no servidor.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Registro de horas adicionado com sucesso.'
        ]);
        exit();
    }

    // --- AÇÃO 6: EDITAR ENTRADA DE HORAS (ATÔMICA) ---
    if ($action === 'update_entry') {
        $empId = $payload['employeeId'] ?? null;
        $entryId = $payload['entryId'] ?? null;
        $entryData = $payload['entry'] ?? [];

        if (!$empId || !$entryId) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Parâmetros de edição inválidos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId && isset($emp['entries']) && is_array($emp['entries'])) {
                foreach ($emp['entries'] as &$ent) {
                    if ($ent['id'] === $entryId) {
                        if (isset($entryData['hours'])) $ent['hours'] = (int)$entryData['hours'];
                        if (isset($entryData['minutes'])) $ent['minutes'] = (int)$entryData['minutes'];
                        if (isset($entryData['totalMinutes'])) {
                            $ent['totalMinutes'] = (int)$entryData['totalMinutes'];
                        } else if (isset($entryData['hours']) || isset($entryData['minutes'])) {
                            $ent['totalMinutes'] = ($ent['hours'] * 60) + $ent['minutes'];
                        }
                        if (isset($entryData['date'])) $ent['date'] = $entryData['date'];
                        if (isset($entryData['description'])) $ent['description'] = trim($entryData['description']);
                        $found = true;
                        break;
                    }
                }
                unset($ent);
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Registro de horas não encontrado.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar alteração da entrada.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Registro de horas atualizado.'
        ]);
        exit();
    }

    // --- AÇÃO 7: EXCLUIR ENTRADA DE HORAS (ATÔMICA) ---
    if ($action === 'delete_entry') {
        $empId = $payload['employeeId'] ?? null;
        $entryId = $payload['entryId'] ?? null;

        if (!$empId || !$entryId) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Parâmetros de exclusão inválidos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId && isset($emp['entries']) && is_array($emp['entries'])) {
                $initialCount = count($emp['entries']);
                $emp['entries'] = array_values(array_filter($emp['entries'], function($ent) use ($entryId) {
                    return $ent['id'] !== $entryId;
                }));
                if (count($emp['entries']) < $initialCount) {
                    $found = true;
                }
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Registro não encontrado para exclusão.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar exclusão de horas.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Registro de horas excluído com sucesso.'
        ]);
        exit();
    }

    // --- AÇÃO 8: CONCLUIR CICLO DE 40H (ATÔMICA) ---
    if ($action === 'complete_cycle') {
        $empId = $payload['employeeId'] ?? null;
        $cycle = $payload['cycle'] ?? null;

        if (!$empId || !$cycle) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados de ciclo inválidos.']);
            exit();
        }

        $found = false;
        foreach ($db['employees'] as &$emp) {
            if ($emp['id'] === $empId) {
                if (!isset($emp['completedCyclesHistory']) || !is_array($emp['completedCyclesHistory'])) {
                    $emp['completedCyclesHistory'] = [];
                }
                $emp['completedCyclesHistory'][] = $cycle;
                $emp['completedCyclesCount'] = ($emp['completedCyclesCount'] ?? 0) + 1;
                $emp['entries'] = [];
                $found = true;
                break;
            }
        }
        unset($emp);

        if (!$found) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Funcionário não encontrado para conclusão de ciclo.']);
            exit();
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar conclusão de ciclo.']);
            exit();
        }

        echo json_encode([
            'status' => 'success',
            'serverTime' => getServerTime(),
            'message' => 'Ciclo concluído e arquivado com sucesso no servidor.'
        ]);
        exit();
    }

    // --- AÇÃO 9: IMPORTAR BACKUP COMPLETO (SOBRESCREVE TUDO COM VALIDAÇÃO) ---
    if ($action === 'full_replace' || (isset($payload['employees']) && is_array($payload['employees']) && !isset($payload['action']))) {
        $incomingEmployees = $payload['employees'] ?? [];
        if (empty($incomingEmployees)) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Lista de funcionários não pode ser vazia.']);
            exit();
        }

        // Se for substituição total forçada (ex: importação de backup JSON)
        if ($action === 'full_replace') {
            $db['employees'] = $incomingEmployees;
            if (isset($payload['undoStack'])) $db['undoStack'] = $payload['undoStack'];
        } else {
            // Mescla inteligente para evitar que um cliente antigo apague funcionários ou entradas de outros
            $serverMap = [];
            foreach ($db['employees'] as $sEmp) {
                $serverMap[$sEmp['id']] = $sEmp;
            }

            foreach ($incomingEmployees as $inEmp) {
                $id = $inEmp['id'];
                if (!isset($serverMap[$id])) {
                    // Novo funcionário adicionado pelo cliente
                    $serverMap[$id] = $inEmp;
                } else {
                    $sEmp = &$serverMap[$id];
                    // Atualiza campos de perfil
                    $sEmp['name'] = $inEmp['name'] ?? $sEmp['name'];
                    $sEmp['role'] = $inEmp['role'] ?? $sEmp['role'];
                    $sEmp['targetHours'] = $inEmp['targetHours'] ?? $sEmp['targetHours'];
                    $sEmp['color'] = $inEmp['color'] ?? $sEmp['color'];
                    $sEmp['avatar'] = $inEmp['avatar'] ?? $sEmp['avatar'];

                    // Mescla de entradas (deduplicação por ID)
                    $entriesMap = [];
                    foreach (($sEmp['entries'] ?? []) as $e) {
                        $entriesMap[$e['id']] = $e;
                    }
                    foreach (($inEmp['entries'] ?? []) as $e) {
                        $entriesMap[$e['id']] = $e;
                    }
                    // Ordena decrescente por data
                    $mergedEntries = array_values($entriesMap);
                    usort($mergedEntries, function($a, $b) {
                        return strcmp($b['date'] ?? '', $a['date'] ?? '');
                    });
                    $sEmp['entries'] = $mergedEntries;

                    // Cronômetro: respeita o que tiver sido modificado mais recentemente
                    $inStop = $inEmp['stopwatch'] ?? null;
                    $sStop = $sEmp['stopwatch'] ?? null;
                    if ($inStop) {
                        $inUp = $inStop['updatedAt'] ?? 0;
                        $sUp = $sStop['updatedAt'] ?? 0;
                        if ($inUp >= $sUp || ($inStop['isRunning'] && !$sStop['isRunning'])) {
                            $sEmp['stopwatch'] = $inStop;
                        }
                    }
                    unset($sEmp);
                }
            }

            $db['employees'] = array_values($serverMap);
        }

        if (!saveDatabase($dataFile, $db)) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar banco de dados no servidor.']);
            exit();
        }

        $db['serverTime'] = getServerTime();
        $db['status'] = 'success';
        $db['message'] = 'Dados sincronizados com sucesso no servidor.';
        echo json_encode($db, JSON_UNESCAPED_UNICODE);
        exit();
    }

    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Ação não reconhecida pelo servidor.']);
    exit();
}
