window.onload = () => {

    const encodeBtn = document.getElementById('btnEncode');

    encodeBtn.addEventListener('click', () => {
        const stringEncode = document.getElementById('textAreaEncode').value;
        const offsetMy = parseInt(document.getElementById('myOffset').value);
        const sum = window.cipher.encode(offsetMy, stringEncode);
    })

}