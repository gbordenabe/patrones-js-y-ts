interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos a la base de datos");
    if (user === "admin" && password === "entra") {
      return true;
    }
    return false;
  }
}

class LoginServicetrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos al servicio de autenticafion");
    if (user === "admin" && password === "entra") {
      return true;
    }
    return false;
  }
}

class LoginGoogletrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("nos dirigimos a google");
    if (user === "admin" && password === "entra") {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login("admin", "entra"));
console.log("---------");
console.log(auth.login("asd", "123"));
console.log("----- Se cambio la estrategia -----");
auth.setStrategy(new LoginServicetrategy());
console.log(auth.login("admin", "entra"));
console.log("---------");
console.log(auth.login("asd", "123"));
console.log("----- Se cambio la estrategia -----");
auth.setStrategy(new LoginGoogletrategy());
console.log(auth.login("admin", "entra"));
console.log("---------");
console.log(auth.login("asd", "123"));
