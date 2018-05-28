window.cipher = {
  encode: (offsetEncode, stringEncode) => {
    const charaEncode = stringEncode.length;
    console.log(stringEncode);
    console.log(offsetEncode);

    let finalMessageEncode = '';
    let letterEncode = 0;
    let funEncode = 0;
    let letterResEncode = 0;

    for (let i = 0; i < charaEncode; i++) {
      letterEncode = stringEncode.charCodeAt(i);
      console.log('a', letterEncode);
      funEncode = 0;
      funEncode = ((letterEncode - 65 + offsetEncode) % 26 + 65);
      console.log('b', offsetEncode);
      console.log('c', funEncode);
      letterResEncode = String.fromCharCode(funEncode);
      finalMessageEncode = finalMessageEncode + letterResEncode;
    }
    console.log(finalMessageEncode);
    return finalMessageEncode;
  },

  decode: (offsetDecode, stringDecode) => {
    const charaDecode = stringDecode.length;
    console.log(stringDecode);
    console.log(offsetDecode);

    let finalMessageDecode = '';
    let letterDecode = 0;
    let funDecode = 0;
    let letterResDecode = 0;

    for (let j = 0; j < charaDecode; j++) {
      letterDecode = stringDecode.charCodeAt(j);
      console.log('a', letterDecode);
      funDecode = 0
      funDecode = ((letterDecode - 65 - offsetDecode) % 26 + 65);
      console.log('b', offsetDecode);
      console.log('c', funDecode);
      letterResDecode = String.fromCharCode(funDecode);
      finalMessageDecode = finalMessageDecode + letterResDecode;
    }
    console.log(finalMessageDecode);
    return finalMessageDecode;
  }
}