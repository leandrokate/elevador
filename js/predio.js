(function () {
    // Pavimentos 
    function criarTerreo() {
        const janela = document.createElement('div')
        janela.classList.add('janela')

        const terreo = document.createElement('div')
        terreo.classList.add('terreo')

        terreo.appendChild(janela)

        return terreo
    }

    function criarAndar() {
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')
        andar.appendChild(porta)
        
        return andar 
    }

    function criarPavimentos() {
        const elementosComAndares = document.querySelectorAll('[andares]')
        elementosComAndares.forEach(elComAndares => {
        const qtde = +elComAndares.getAttribute('andares')

        for(let i = 0; i < qtde; i++) {
            elComAndares.appendChild(criarAndar())
        }

        elComAndares.appendChild(criarTerreo())
        })
    }

    criarPavimentos()

    

    // Elevador 
}) ()