const data = [
  {
    name: "Coca Cola",
    color: "Rojo",
    info: "Sabor cola",
  },
  {
    name: "Pepsi",
    color: "Azul",
    info: "Sabor cola",
  },
  {
    name: "Pritty",
    color: "Amarillo",
    info: "Sabor limon",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, i) => {
      return ac + `<div><h2>${i.name}</h2></div><hr>`;
    }, "");
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, i) => {
      return (
        ac +
        `<div><h2>${i.name}</h2><p>${i.color}</p> <p>${i.info}</p></div><hr>`
      );
    }, "");
  }
}

const strategies = [new ListStrategy(), new DetailedListStrategy()];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  const op = event.target.value;
  info.setStrategy(strategies[op]);
  info.show();
});
