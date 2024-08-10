function createIframe(url) {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%'; 
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    const style = document.createElement('style');
    style.textContent = `
        #sample {
            position: relative; /* Permite que o iframe se ajuste ao tamanho da div */
            width: 100%;
            height: 100vh; /* Ajuste a altura conforme necessário */
            overflow: hidden; /* Esconde o conteúdo que excede a div */
        }

        #sample iframe {
            position: absolute; /* Faz com que o iframe ocupe toda a div */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none; /* Remove a borda do iframe */
        }
    `;
    document.head.appendChild(style);
    const container = document.getElementById('sample');
    container.appendChild(iframe);
}
createIframe('http://192.168.0.82:8081');