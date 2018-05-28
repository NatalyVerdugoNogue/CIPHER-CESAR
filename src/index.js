window.onload = () => {

    const encodeBtn = document.getElementById('btnEncode');
    const decodeBtn = document.getElementById('btnDecode');

    encodeBtn.addEventListener('click', () => {
        const stringEncode = document.getElementById('textAreaEncode').value;
        const offsetMy = parseInt(document.getElementById('myOffset').value);
        const TextEncode = window.cipher.encode(offsetMy, stringEncode);
    })

    decodeBtn.addEventListener('click', () => {
        const stringDecode = document.getElementById('textAreaDecode').value;
        const offsetYour = parseInt(document.getElementById('yourOffset').value);
        const TextDecode = window.cipher.decode(offsetYour, stringDecode);
    })
}