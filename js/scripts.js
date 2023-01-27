const paragrafo = document.querySelector('.paragrafo');

document.addEventListener('click', (el) => {
    const element = el.target;

    if (element.classList.contains('btn')){
        const extensaoInput = document.querySelector('#extensao').value;
        const diametroInput = document.querySelector('#diametro').value;

        if (typeof extensaoInput !== 'number' || typeof diametroInput !== 'number') 'Insira somente números';

        const volume = ((((diametroInput / 2) / 1000) ** 2) * 3.14) * extensaoInput;

        const quantidade = ((volume * 1000) * 200) / 100000;

        paragrafo.innerText = quantidade.toFixed(2) + ' L';
        paragrafo.style.display = 'block';

        el.preventDefault();
    }
});