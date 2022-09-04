class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}`
  }
}

// Forma de exportar uma módulo(arquivo)
module.exports = {
  Person,
};