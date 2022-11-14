class Singleton{
    constructor(){
        console.log("'Entrando al constructor'")
        this.random = Math.random()
        if(Singleton.intance){
            console.log(('Ya existe'))
            return Singleton.intance
        }
        console.log('No existe y se crea')
        Singleton.intance = this
    }
}

const singleton = new Singleton()
const singleto2 = new Singleton()

console.log(singleton.random)
console.log(singleto2.random)
console.log(singleton === singleto2)