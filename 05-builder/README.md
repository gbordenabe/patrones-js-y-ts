# Builder

- Patron de diseño de creacional, nos ayuda a crea un objeto
- En lugar de instanciar una clase directamente, creamos una clase builder que nos devolvera una instancia de esa clase entonces nos ayuda
  a administrar si el mismo tiene varios parametros, seteandole valores por defecto y solo proporiconandoles los que nos interesan asi no tenes que mandar
  tantos espacios null, por ejemplo, una clase puede recibir hasta 10 parametros en su constructor, pero solo queremos crearlo con el aprametro 2 y el 7,
  en lugar de mandar 8 nulls, solo enviaremos los que son pertinentes
- Ademas se peude agregar la clase director, el cual recibira el builder y con "configurara" de la manera que lo necesitemos para crear distintos
  objectos a partir de la misma clase, es como que puede guardar varias "recetas"
