/*
 * Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

class Poligono {
    constructor(tipo) {
      this.tipo = tipo; 
    }

  }
  
  class Triangulo extends Poligono {
    constructor(base, altura) {
      super('triangulo'); // Es como si le dijeramos el tipo a la clase del poligono 
      this.base = base;
      this.altura = altura;
    }
  }
  
  class Cuadrado extends Poligono {
    constructor(lado) {
      super('cuadrado'); 
      this.lado = lado;
    }
  }
  
  class Rectangulo extends Poligono {
    constructor(largo, ancho) {
      super('rectangulo'); 
      this.largo = largo;
      this.ancho = ancho;
    }
  }
  

  function calcularArea(poligono) {
    let area;
  
    if (poligono.tipo === 'triangulo') {
      area = (poligono.base * poligono.altura) / 2;

    } else if (poligono.tipo === 'cuadrado') {
      area = poligono.lado ** 2;

    } else if (poligono.tipo === 'rectangulo') {
      area = poligono.largo * poligono.ancho;

    } else {
      console.log('Ese tipo de polígono está mal escrito o no existe.');
      return;
    }
  
    console.log(`Es un ${poligono.tipo} y su área es: ${area}`);
  }

  
  let cuadrado = new Cuadrado(4); 
  let rectangulo = new Rectangulo(5, 3); 
  let triangulo = new Triangulo(6, 4); 
  
  calcularArea(cuadrado);   
  calcularArea(rectangulo); 
  calcularArea(triangulo);  
  