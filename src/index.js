window.onload = () => {

  // Declaración de variable de los botones en html
  const encodeBtn = document.getElementById('btnEncode');
  const decodeBtn = document.getElementById('btnDecode');

  /* Ejecución de botón encode tomado datos desde html Input, textArea
  llamado de función encode y escritura de texto codificado en html*/
  encodeBtn.addEventListener('click', () => {
    const stringEncode = document.getElementById('textAreaEncode').value;
    const offsetMy = parseInt(document.getElementById('myOffset').value);
    const whitFunction = window.cipher.createCipherWithOffset(offsetMy);
    console.log(whitFunction);
    const messageEncode = whitFunction.encode(stringEncode);
    document.getElementById('resultEncode').innerHTML = messageEncode;
  });

  /* Ejecución de botón decode tomado datos desde html Input, textArea
  llamado de función decode y escritura de texto codificado en html*/
  decodeBtn.addEventListener('click', () => {
    const stringDecode = document.getElementById('textAreaDecode').value;
    const offsetYour = parseInt(document.getElementById('yourOffset').value);
    const whitFunction = window.cipher.createCipherWithOffset(offsetYour);
    const messageDecode = whitFunction.decode(stringDecode);
    document.getElementById('resultDecode').innerHTML = messageDecode;
  });
};