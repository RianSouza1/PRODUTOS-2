<?php
/**
 * api.php - Backend de Persistência Compartilhada entre Todos os Dispositivos
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataFile = __DIR__ . '/data.json';

// --- SALVAR DADOS (POST) ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    if (!empty($input)) {
        $decoded = json_decode($input, true);
        if ($decoded !== null && isset($decoded['employees']) && is_array($decoded['employees'])) {
            file_put_contents($dataFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
            echo json_encode(['status' => 'success', 'message' => 'Dados salvos no servidor com sucesso.']);
            exit();
        }
    }
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'JSON inválido enviado ao servidor.']);
    exit();
}

// --- LER DADOS (GET) ---
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    echo $content;
} else {
    echo json_encode(['status' => 'empty', 'message' => 'Nenhum dado salvo no servidor ainda.']);
}
