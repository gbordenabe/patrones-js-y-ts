//Componente
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

//Decorador
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

//Producto decorado
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

//Producto con otro decorador
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` $${this.price}`;
  }
}

class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1>Informacion del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`;
  }
}

//Ejecucion de componente sin decorar
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
