# 📋 Passo a Passo para Clonagem de Páginas de Vendas

Use este guia como checklist oficial para realizar a clonagem, tradução ou adaptação de qualquer página de vendas do projeto.

---

## 🛠️ Checklist de Clonagem de Páginas

### 1. 🛑 Limpeza e Remoção de Rastreamentos (Clean Code)
Antes de qualquer coisa, remova TODOS os scripts de rastreamento antigos que vieram da página original (GTM, Facebook Pixel, etc.):
* Remover dns-prefetch do Google Tag Manager (`//www.googletagmanager.com`).
* Remover scripts do GTM (ex: `gtmkit-js-before`, `gtmkit-datalayer-js-before`, `woocommerce.js` do gtm-kit).
* Remover blocos inteiros comentados como `<!-- Google Tag Manager -->` e seus `noscript` correspondentes.
* Remover scripts do Facebook Pixel ou outros scripts externos não relacionados diretamente ao layout da página.

### 2. ⚡ Injeção do Rastreamento UTMify
Pegue o rastreamento padrão da UTMify de uma página ativa e adicione-o imediatamente antes do fechamento da tag `</head>`:
```html
<!-- UTMify Tracker -->
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
<!-- UTMify Pixel -->
<script>
  window.pixelId = "6a07be84d557cbe5d7cd7cef"; // Alterar o ID de acordo com o domínio/oferta ativo
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
```

### 3. 🖼️ Baixar e Localizar Imagens
* **Download de imagens externas**: Se a página original possuir imagens com links de domínios externos (ex: `https://atlas-library.com/wp-content/...`), as imagens devem ser baixadas.
* **Armazenamento local**: Salvar essas imagens na pasta local (ex: pasta `/images/` ou diretamente na pasta do produto).
* **Atualização do código**: Alterar todas as tags `<img>` para que o atributo `src` aponte para o caminho local (ex: `src="images/foto.webp"` ou `src="foto.webp"`).

### 4. 🎨 Troca de Elementos em Imagem para HTML
Para melhorar a performance de carregamento (LCP), SEO e flexibilidade de tradução, **nunca use imagens** para textos principais ou provas sociais:
* **70% OFF / Urgência**: Trocar banners de imagem de escassez por blocos HTML estilizados responsivos com fontes de impacto (`Arial Black`, `Impact`), usando `clamp()` para tamanhos de fonte fluidos.
* **Estrelas de Avaliação**: Substituir as imagens de estrelas (`2b50.svg` ou similares) por caracteres HTML (`★`) ou ícones SVG leves estilizados com gradiente/sombra amarela/laranja.
* **Depoimentos (Reviews)**: Converter depoimentos salvos em imagem para blocos de depoimento em texto HTML puro (`div`s estilizadas como cartões brancos com sombras leves, contendo o selo `Verified Buyer` e as estrelas correspondentes).

### 5. ⏰ Injeção e Ajuste do Cronômetro Dinâmico (Countdown Timer)
* **Ajuste inicial do HTML**: Garantir que as tags HTML exibam **00:10:00** estaticamente na primeira renderização (ex: alterando os valores estáticos de horas para `00`, minutos para `10` e segundos para `00`). Isso impede que valores antigos (como `01:47:08`) fiquem piscando na tela antes do JavaScript rodar.
* **Script de persistência**: Usar o script abaixo para que o timer de 10 minutos persista e reinicie via `localStorage` do navegador:
```html
<script type="text/javascript">
    function initIPCountdown(id) {
        let container = document.getElementById(id);
        if (!container) return;
        let defaultTime = 10 * 60; // 10 minutos (600 segundos)
        let totalSeconds = defaultTime;
        let savedTime = localStorage.getItem(id + '_timer');
        if (savedTime !== null && !isNaN(parseInt(savedTime, 10))) {
            totalSeconds = parseInt(savedTime, 10);
            if (totalSeconds <= 0 || totalSeconds > defaultTime) totalSeconds = defaultTime;
        }
        let hTens = container.querySelector('.hours-tens');
        let hOnes = container.querySelector('.hours-ones');
        let mTens = container.querySelector('.minutes-tens');
        let mOnes = container.querySelector('.minutes-ones');
        let sTens = container.querySelector('.seconds-tens');
        let sOnes = container.querySelector('.seconds-ones');
        function updateUI() {
            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;
            let hStr = h.toString().padStart(2, '0');
            let mStr = m.toString().padStart(2, '0');
            let sStr = s.toString().padStart(2, '0');
            if (hTens) hTens.innerText = hStr[0];
            if (hOnes) hOnes.innerText = hStr[1];
            if (mTens) mTens.innerText = mStr[0];
            if (mOnes) mOnes.innerText = mStr[1];
            if (sTens) sTens.innerText = sStr[0];
            if (sOnes) sOnes.innerText = sStr[1];
        }
        updateUI();
        setInterval(() => {
            totalSeconds--;
            if (totalSeconds <= 0) totalSeconds = defaultTime;
            localStorage.setItem(id + '_timer', totalSeconds);
            updateUI();
        }, 1000);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initIPCountdown('ip-countdown-id'));
    } else {
        initIPCountdown('ip-countdown-id');
    }
</script>
```

### 6. 🏢 Padronização do Rodapé (Footer)
Remover o rodapé gerado pelo WordPress original e injetar um rodapé limpo com cores escuras de contraste, links institucionais corretos e email de contato atualizado:
```html
<footer style="background: #222222; color: #ffffff; text-align: center; padding: 2.5rem 1rem; font-size: 0.9rem;">
  <div style="width: 100%; max-width: 850px; margin: 0 auto; padding: 0 20px;">
    <h4 style="font-weight: bold; margin-bottom: 0.5rem; color: #ffffff; font-size: 1.2rem;">[Nome do Produto/Projeto]</h4>
    <p style="color: #ffffff; margin-bottom: 1rem;">© All rights reserved.</p>
    <p style="margin-top: 1rem;">
      <a href="mailto:trinityag01@gmail.com" style="color: #ffffff; text-decoration: none;">Contact Us</a>
    </p>
  </div>
</footer>
```

### 7. 🌐 Adaptação Linguística e Links de Checkout
* Traduzir toda a copy de acordo com o idioma da nova página (ex: `-es`, `-fr`, `-it`, `-pt`, `-de`).
* Substituir os links dos botões `BUY NOW` pelo link correto do checkout Hotmart correspondente àquela variação ou idioma.
