class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS();
    }
    return this.instance;
  }
}

const singletonTs = SingletonTS.getInstance();
const singletonTs2 = SingletonTS.getInstance();

console.log(singletonTs.random);
console.log(singletonTs2.random);
console.log(singletonTs === singletonTs2);
