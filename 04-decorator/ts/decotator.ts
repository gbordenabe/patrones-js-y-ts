interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  getDetail(): string {
    return `${this.name}`;
  }
}

abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(componente: Component, tradename: string, brand: string) {
    super(componente);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

class StoreProductDecorator extends ProductDecorator {
  private price: number;
  constructor(component: Component, price: number) {
    super(component);
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

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());
