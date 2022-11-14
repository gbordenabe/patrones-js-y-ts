class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  white(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.error("Documento aprobado ya no se modifica");
  }
}

const doc = new DocumentContext();
console.log(doc.state);

doc.white("pato");
console.log(doc.content);
console.log(doc.state);

doc.white("algo");
doc.white("mas");
console.log(doc.content);
console.log(doc.state);

doc.setState(new ApprovedState());
doc.white("esto no deberia agregarse por que ya esta aprobado");
console.log(doc.content);
console.log(doc.state);
