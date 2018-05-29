window.onload = () => {

  // Declaración de variable de los botones en html
  const encodeBtn = document.getElementById('btnEncode');
  const decodeBtn = document.getElementById('btnDecode');

  /* Ejecución de botón encode tomado datos desde html Input, textArea
  llamado de función encode y escritura de texto codificado en html*/
  encodeBtn.addEventListener('click', () => {
    const stringEncode = document.getElementById('textAreaEncode').value;
    const offsetMy = parseInt(document.getElementById('myOffset').value);
    const textEncode = window.cipher.encode(stringEncode, offsetMy);
    document.getElementById('resultEncode').innerHTML = textEncode;
  });

  /* Ejecución de botón decode tomado datos desde html Input, textArea
  llamado de función decode y escritura de texto codificado en html*/
  decodeBtn.addEventListener('click', () => {
    const stringDecode = document.getElementById('textAreaDecode').value;
    const offsetYour = parseInt(document.getElementById('yourOffset').value);
    const textDecode = window.cipher.decode(stringDecode, offsetYour);
    document.getElementById('resultDecode').innerHTML = textDecode;
  });
};