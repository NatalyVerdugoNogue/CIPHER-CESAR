window.cipher = {

  encode: (offsetEncode, stringEncode) => {

    const charaEncode = stringEncode.length;
    let finalMessageEncode = '';
    let letterEncode = 0;
    let funEncode = 0;
    let letterResEncode = 0;

    for (let i = 0; i < charaEncode; i++) {
      letterEncode = stringEncode.charCodeAt(i);
      funEncode = 0;
      funEncode = ((letterEncode - 65 + offsetEncode) % 26 + 65);
      letterResEncode = String.fromCharCode(funEncode);
      finalMessageEncode = finalMessageEncode + letterResEncode;
    }
    return finalMessageEncode;
  },

  decode: (offsetDecode, stringDecode) => {

    const charaDecode = stringDecode.length;
    let finalMessageDecode = '';
    let letterDecode = 0;
    let funDecode = 0;
    let letterResDecode = 0;

    for (let j = 0; j < charaDecode; j++) {
      letterDecode = stringDecode.charCodeAt(j);
      funDecode = 0
      funDecode = ((letterDecode - 65 - offsetDecode) % 26 + 65);
      letterResDecode = String.fromCharCode(funDecode);
      finalMessageDecode = finalMessageDecode + letterResDecode;
    }
    return finalMessageDecode;
  }
}