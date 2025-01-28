(function () {
    // Pavimentos 
    function criarTerreo() {
        const janela = document.createElement('div')
        janela.classList.add('janela')

        const terreo = document.createElement('div')
        terreo.classList.add('terreo')
        terreo.setAttribute('andar', 't')
        terreo.appendChild(janela)

        return terreo
    }

    function criarAndar(numero) {
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')
        andar.setAttribute('andar', numero)
        andar.appendChild(porta)
        
        return andar 
    }

    function criarPavimentos() {
        const elementosComAndares = document.querySelectorAll('[andares]')
        elementosComAndares.forEach(elComAndares => {
        const qtde = +elComAndares.getAttribute('andares')

        for(let i = qtde; i > 0; i--) {
            elComAndares.appendChild(criarAndar(i))
        }

        elComAndares.appendChild(criarTerreo())
        })
    }

    criarPavimentos()

    

    // Elevador 
}) ()