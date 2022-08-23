function verificar() {
    let textCampo = window.document.getElementById('campo').value;
    let res = window.document.getElementById('result');
    let textoIni = textCampo;
    let textoFin = textCampo.split('').reverse().join('');
    let textCompr = textoIni.length;
    res.innerHTML = '';
    if (textCampo == '' || textCampo.length <= 2) {
        window.alert('Insira uma palavra válida!!!');
        window.document.getElementById('campo').value = '';
    }
    else if (textoIni === textoFin) {
        res.innerHTML += `<br>`;
        res.innerHTML += `Sua palavra:`
        res.innerHTML += `<p><strong>É PALINDROMO</strong></p>`;
        res.innerHTML += `<p><strong>${textoIni.toUpperCase()}</strong></p>`
        res.innerHTML += `<p><strong>${textoFin.toUpperCase()}</strong></p>`
        res.innerHTML += `<p>Sua palavra tem <strong>${textCompr}</strong> letras</p>`;
        res.innerHTML += `<p>A primeira letra da sua palavra é <strong>${textoIni[0].toUpperCase()}</strong></p>`;
        res.innerHTML += `<p>A última letra da sua palavra é <strong>${textoIni[textCompr - 1].toUpperCase()}</strong></p>`;
    }
    else if (textoIni !== textoFin) {
        res.innerHTML += `<br>`;
        res.innerHTML += `Sua palavra:`
        res.innerHTML += `<p><strong>NÃO PALINDROMO</strong></p>`;
        res.innerHTML += `<p><strong>${textoIni.toUpperCase()}</strong></p>`
        res.innerHTML += `<p><strong>${textoFin.toUpperCase()}</strong></p>`
        res.innerHTML += `<p>Sua palavra tem <strong>${textCompr}</strong> letras</p>`;
        res.innerHTML += `<p>A primeira letra da sua palavra é <strong>${textoIni[0].toUpperCase()}</strong></p>`;
        res.innerHTML += `<p>A última letra da sua palavra é <strong>${textoIni[textCompr - 1].toUpperCase()}</strong></p>`;
    }
}

function limpar() {
    window.document.getElementById('campo').value = '';
    let res = window.document.getElementById('result');
    res.innerHTML = '';
    window.document.getElementById('campo').focus();
}