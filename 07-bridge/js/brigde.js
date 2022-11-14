class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncooderImplementor {
  encode(str) {
    return window.btoa(decodeURI(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(decodeURI(window.atob(str)));
  }
}

class HTMLEncoderImplementos {
  encode(str) {
    return str.split(".").reduce((ac, e) => {
      return ac + `<p>${e.trim()}</p>`;
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((ac, e) => {
      return e !== "" ? ac + e.replace("<p>", "") + ". " : ac + "";
    }, "");
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncooderImplementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementos());
console.log(encoder2.encode("Esto es un texto. para dividir. en parrafos"));
console.log(
  encoder2.decode(
    "<p>Esto es un texto</p><p>para divicir</p><p>en parrafos</p>"
  )
);
