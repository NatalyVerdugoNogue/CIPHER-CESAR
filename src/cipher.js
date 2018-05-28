window.cipher = {
  encode: (offset, message) => {
    const charaEncode = message.length;
    console.log(message);
    console.log(offset);

    let finalMessage = '';
    let letterEncode = 0;
    let funEncode = 0;
    let letterResEncode = 0;

    for (let i = 0; i < charaEncode; i++) {
      letterEncode = message.charCodeAt(i);
      console.log('a', letterEncode);
      funEncode = 0;
      funEncode = ((letterEncode - 65 + offset) % 26 + 65);
      console.log('b', offset);
      console.log('c', funEncode);
      letterResEncode = String.fromCharCode(funEncode);
      finalMessage = finalMessage + letterResEncode;
    }
    console.log(finalMessage);
    return finalMessage;

  },
  decode: () => {
    /* Acá va tu código */
  }
}