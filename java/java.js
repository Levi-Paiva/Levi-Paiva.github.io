
document.addEventListener('DOMContentLoaded', () => {
    const personagens = document.querySelectorAll('.personagem');
    const personagemSelecionado = document.querySelector('.personagem-selecionado');
    const imagemPersonagemGrande = personagemSelecionado.querySelector('.personagem-grande');
    const nomePersonagem = personagemSelecionado.querySelector('.nome-personagem');
    const descricaoPersonagem = personagemSelecionado.querySelector('.descricao-personagem');
  
    // Verifica se é um dispositivo móvel
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    personagens.forEach((personagem) => {
      // Adiciona evento de clique em dispositivos móveis ou evento de mouseenter em outros dispositivos
      const eventName = isMobile ? 'click' : 'mouseenter';
  
      personagem.addEventListener(eventName, () => {
        // Remove a classe 'selecionado' de todos os personagens
        personagens.forEach((p) => {
          p.classList.remove('selecionado');
        });
  
        // Adiciona a classe 'selecionado' ao personagem atual
        personagem.classList.add('selecionado');
  
        const idPersonagem = personagem.getAttribute('id');
  
        imagemPersonagemGrande.src = `image/card-${idPersonagem}.png`;
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
      });
    });
  });


  
document.addEventListener('DOMContentLoaded', () => {
    const elementosLi = document.querySelectorAll('.personagem');
  
    elementosLi.forEach((elemento) => {
      elemento.addEventListener('click', () => {
        const idPersonagem = elemento.getAttribute('id');
        const audio = document.getElementById(`audio-${idPersonagem}`);
  
        audio.play();
      });
    });
  });
  function scrollToElement(element) {
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop
    });
  }

