/* Enquanto o print real não existe, mostra no lugar da imagem uma caixa
   dizendo exatamente qual arquivo colocar. Assim que o arquivo é salvo na
   pasta telas/ com esse nome, a imagem aparece sozinha — sem editar HTML. */
(function () {
  function marcarFalta(img) {
    if (img.dataset.substituida) return;
    img.dataset.substituida = '1';

    var caixa = document.createElement('div');
    caixa.className = 'tela-vazia';

    var rotulo = document.createElement('span');
    rotulo.className = 'rotulo';
    rotulo.textContent = '📷 Falta o print desta tela';

    var desc = document.createElement('p');
    desc.style.margin = '0 0 .6rem';
    desc.textContent = img.getAttribute('alt') || '';

    var arquivo = document.createElement('code');
    arquivo.textContent = img.getAttribute('src');

    caixa.appendChild(rotulo);
    if (desc.textContent) caixa.appendChild(desc);
    caixa.appendChild(arquivo);

    img.replaceWith(caixa);
  }

  function verificar(img) {
    if (img.complete) {
      if (img.naturalWidth === 0) marcarFalta(img);
    } else {
      img.addEventListener('error', function () { marcarFalta(img); });
      img.addEventListener('load', function () {
        if (img.naturalWidth === 0) marcarFalta(img);
      });
    }
  }

  document.querySelectorAll('.tela img').forEach(verificar);
})();
