window.cipher = {

  encode: (offsetEncode, stringEncode) => {

    console.log(stringEncode);
    stringMayEncode = stringEncode.toUpperCase();
    console.log(stringMayEncode);
    const charaEncode = stringMayEncode.length;
    let finalMessageEncode = '';
    let letterEncode = 0;
    let funEncode = 0;
    let letterResEncode = 0;

    for (let i = 0; i < charaEncode; i++) {
      letterEncode = stringMayEncode.charCodeAt(i);
      funEncode = 0;
      funEncode = ((letterEncode - 65 + offsetEncode) % 26 + 65);
      letterResEncode = String.fromCharCode(funEncode);
      finalMessageEncode = finalMessageEncode + letterResEncode;
    }
    return finalMessageEncode;
  },

  decode: (offsetDecode, stringDecode) => {

    console.log(stringDecode);
    stringMayDecode = stringDecode.toUpperCase();
    console.log(stringMayDecode);
    const charaDecode = stringMayDecode.length;
    let finalMessageDecode = '';
    let letterDecode = 0;
    let funDecode = 0;
    let letterResDecode = 0;

    for (let j = 0; j < charaDecode; j++) {
      letterDecode = stringMayDecode.charCodeAt(j);
      funDecode = 0

      funDecode = letterDecode + (26 - (offsetDecode) % 26);
      console.log('a', funDecode);
      if (funDecode > 90) {
        funDecode = funDecode % 90 + 64;
      }
      console.log('b', funDecode);
      letterResDecode = String.fromCharCode(funDecode);
      finalMessageDecode = finalMessageDecode + letterResDecode;
    }
    return finalMessageDecode;
  }
}