// Aguarda o navegador carregar o HTML completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Adiciona um 'ouvinte' para cliques em qualquer lugar do documento (página)
    document.addEventListener('click', (evento) => {
        // Pega as coordenadas X e Y de onde o usuário clicou
        const clicouNoX = evento.clientX;
        const clicouNoY = evento.clientY;

        // Chama a função para criar o efeito visual do coração
        criarCoracao(clicouNoX, clicouNoY);
    });

    // Função que cria o elemento HTML do coração e o anima
    function criarCoracao(x, y) {
        // 1. Cria um novo elemento 'span'
        const coracaoElemento = document.createElement('span');
        
        // 2. Adiciona a classe CSS para estilização (que vamos criar a seguir)
        coracaoElemento.classList.add('floating-heart');
        
        // 3. Define a posição inicial do coração (onde o usuário clicou)
        // Usamos template literals para inserir os valores X e Y
        coracaoElemento.style.left = `${x}px`;
        coracaoElemento.style.top = `${y}px`;

        // 4. Adiciona o coração ao 'body' da página
        document.body.appendChild(coracaoElemento);

        // 5. Define um tempo (2 segundos) para remover o elemento da página.
        // Isso é crucial para não deixar o site pesado com milhares de corações invisíveis.
        setTimeout(() => {
            coracaoElemento.remove();
        }, 2000); // 2000 milissegundos = 2 segundos
    }
});
