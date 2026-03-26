document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (evento) => {
        const clicouNoX = evento.clientX;
        const clicouNoY = evento.clientY;

        criarCoracao(clicouNoX, clicouNoY);
    });
    
    function criarCoracao(x, y) {
        const coracaoElemento = document.createElement('span');
        coracaoElemento.classList.add('floating-heart');
        coracaoElemento.style.left = `${x}px`;
        coracaoElemento.style.top = `${y}px`;
        document.body.appendChild(coracaoElemento);
        setTimeout(() => {
            coracaoElemento.remove();
        }, 2000); // 2000 milissegundos = 2 segundos
    }
});
