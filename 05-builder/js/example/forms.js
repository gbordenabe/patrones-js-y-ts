class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}">
    ${this.controls.reduce((ac, c) => {
      return (
        ac +
        `<div>
            ${this.getLabel(c)}
            ${this.getInput(c)}
        </div>`
      );
    }, "")}
    <button type="submit">Enviar</button>
    </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" name="${control.name}"/>`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = "";
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: "text",
    });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: "email",
    });
    return this;
  }

  setCheckBox(name, text) {
    this.controls.push({
      name,
      text,
      type: "checkbox",
    });
    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name,
      text,
      type: "color",
    });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuiler = formBuilder;
  }

  createPeopleForm() {
    this.formBuiler.reset();
    this.formBuiler
      .setText("firstName", "Nombre")
      .setText("lastName", "Apellido");
  }

  createContactForm() {
    this.formBuiler.reset();
    this.formBuiler
      .setText("name", "Nombre del interesado")
      .setEmail("email", "Correo electronico")
      .setText("message", "Mensaje");
  }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", "Apellido")
  .setCheckBox("drinker", "Es bebedor?")
  .setColor("favoriteColor", "Color favorito")
  .build();
console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const formEmail = frmBuilder
  .setAction("send.php")
  .setText("name", "Nombre")
  .setText("email", "Correo electronico")
  .build();

form2.innerHTML = formEmail.getContent();

const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form4.innerHTML = frmBuilder.build().getContent();
