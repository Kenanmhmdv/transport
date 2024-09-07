class Transport {
  name;
  model;
  speed;
  wheel;

  constructor(name, model, speed, wheel) {
    this.name = name;
    this.model = model;
    this.speed = speed;
    this.wheel = wheel;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Car extends Transport {
  #panarama = 1;

  constructor(name, model, speed, wheel) {
    super(name, model, speed, wheel);

    console.log(
      `${this.name}'s model is ${this.model}. top speed ${this.speed}, have e ${this.wheel} wheels `
    );
  }

  set Panarama(count) {
    this.#panarama = count;
  }
  get Panarama() {
    return this.#panarama;
  }

  drift() {
    console.log(
      `${this.name} may be drifting. and have  ${this.#panarama} panarama `
    );
  }
}

class plane extends Transport {
  constructor(name, model, speed, wheel) {
    super(name, model, speed, wheel);
    this.fly = fly;

    console.log(
      `${this.name}'s model  ${this.model} ,${this.fly} ${this.speed} km/s, have e ${this.wheel} wheels `
    );
  }
}

let car = new Car("mercedes", "e300", 320, 4);
let Plane = new plane("Airplane", "Boing", "flying", 500, 12);
