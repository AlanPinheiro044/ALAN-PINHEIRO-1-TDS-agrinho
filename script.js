/**
 * SITE CONEXÃO AGRO FORTE - AGRINHO 2026
 * Arquivo: script.js
 */

/**
 * Controla a exibição das abas e atualiza o estado visual dos botões de seleção
 * @param {string} tabName - ID da seção a ser exibida
 * @param {Event} [event] - Evento de clique capturado
 */
function switchTab(tabName, event) {
    // Localiza e oculta todos os blocos de conteúdo de abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove o marcador ativo de todos os botões de seleção de abas
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Exibe o bloco de conteúdo correspondente ao ID informado
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Gerencia o marcador visual ativo do botão pressionado
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // Busca o botão correspondente se a ativação vier de links externos
        const targetButton = document.querySelector(`.tab-button[onclick*="'${tabName}'"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }

    // Desloca a página suavemente até o início das abas de controle
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Retorna o scroll da página ao topo e reseta para a aba padrão inicial
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switchTab('home');
}

// Ouvinte disparado ao concluir a leitura básica do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ambiente de monitoramento técnico carregado com sucesso.');
});