(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _preguntas = require('./preguntas');

var q = _interopRequireWildcard(_preguntas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var preguntas = q.preguntas;
var randomArray = [];
var numberCuestion;
var position;
var respuestasCorrectas = 0;

var span = document.getElementsByClassName("close-modal")[0];
var modalElment = document.getElementById('myModal');
var innerModal = document.getElementById('modalContent');
var content = document.getElementById('container-cards');

random();
start();

document.getElementById("send").addEventListener("click", validateResponse);

function random() {

  var i = 0;
  var randomNumber = void 0;
  numberCuestion = 0;
  do {
    randomNumber = Math.floor(Math.random() * 16 + 1);
    if (randomArray.includes(randomNumber) === false) {
      i++;
      randomArray.push(randomNumber);
    }
  } while (i <= 9);
}

function start() {
  var body = '';
  position = randomArray[numberCuestion];
  body += '\n    <div class="card">\n      <div class="card-body">\n        <h5 class="card-title">- ' + preguntas[position].pregunta + '</h5>\n        <hr class="my-4">\n        <form>\n            <input id="' + 1 + '" class="input-radio" type="checkbox" onclick=\'selectOnlyThis(this.id)\' value="' + preguntas[position].respuestas.a + '"/>\n            <span>' + preguntas[position].respuestas.a + '</span>\n            <br>\n            <input id="' + 2 + '" class="input-radio" type="checkbox" onclick=\'selectOnlyThis(this.id)\' value="' + preguntas[position].respuestas.b + '"/> \n            <span>' + preguntas[position].respuestas.b + '</span>\n            <br>\n            <input id="' + 3 + '" class="input-radio" type="checkbox" onclick=\'selectOnlyThis(this.id)\' value="' + preguntas[position].respuestas.c + '"/>\n            <span>' + preguntas[position].respuestas.c + '</span>\n            <br>\n            <input id="' + 4 + '" class="input-radio" type="checkbox" onclick=\'selectOnlyThis(this.id)\' value="' + preguntas[position].respuestas.d + '"/>\n            <span>' + preguntas[position].respuestas.d + '</span>\n        </form>\n      </div>\n    </div>\n  ';
  content.innerHTML = body;
}

function validateResponse() {
  var validate = 0;
  var response;

  for (var i = 1; i <= 4; i++) {
    if (document.getElementById(i).checked === false) {
      validate++;
    } else {
      response = document.getElementById(i).value;
    }
  }

  if (validate === 4) {
    var modalContent = '\n        <div class="alert alert-warning" role="alert">\n          Por favor selecciona una respuesta\n        </div>\n      ';
    innerModal.innerHTML = modalContent;
    return modalElment.style.display = "block";
  }
  if (numberCuestion >= 9) {
    var _modalContent = '\n      <div class="alert alert-info" role="alert">\n        Respuestas correctas: ' + respuestasCorrectas + '\n      </div>\n    ';
    innerModal.innerHTML = _modalContent;
    modalElment.style.display = "block";
  } else {
    if (preguntas[position].correcta === response) {
      respuestasCorrectas++;
    }
    numberCuestion++;
    start();
  }
}

span.onclick = function () {
  modalElment.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalElment) {
    modalElment.style.display = "none";
  }
};

},{"./preguntas":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var preguntas = exports.preguntas = [{
  pregunta: 'De acuerdo a la siguiente figura, cual es el producto de dicha matriz. ',
  respuestas: {
    a: 'imagen',
    b: 'imagen',
    c: 'imagen',
    d: 'imagen'
  },
  correcta: 'imagen'
}, {
  pregunta: 'Son aquellas matrices A=(aij) tales que para todo i,j =1',
  respuestas: {
    a: 'Matriz cuadrada',
    b: 'Matriz Simetrica',
    c: 'Matriz inversa',
    d: 'Matriz adyacente'
  },
  correcta: 'Matriz Simetrica'
}, {
  pregunta: 'Tenemos un triángulo con vértices en (0,0), (1,1) y (2,0) y queremos duplicar las longitudes de los lados del triángulo, ¿en dónde quedarán los vértices del triángulo ampliado?',
  respuestas: {
    a: 'P(0,0)= (0,0)      P(1,1)= (2,2)     P(2,0)=  (4,0)',
    b: 'P(0,0)= (3,0)      P(1,1)= (1,4)     P(2,0)=  (8,3)',
    c: 'P(0,0)= (0,2)      P(1,1)= (0,2)     P(2,0)=  (0,4)',
    d: 'No tengo idea'
  },
  correcta: 'P(0,0)= (0,0)      P(1,1)= (2,2)     P(2,0)=  (4,0)'
}, {
  pregunta: 'Es la matriz que se obtiene al escribir los renglones de A, en orden, como columnas',
  respuestas: {
    a: 'Matriz inversa',
    b: 'Suma de matrices',
    c: 'No sé',
    d: 'Matriz Traspuesta'
  },
  correcta: 'Matriz Traspuesta'
}, {
  pregunta: '¿Cómo se le denomina a la matriz que tiene un solo renglón y la que tiene sólo una columna?',
  respuestas: {
    a: 'Matriz renglón y matriz columna',
    b: 'No sé',
    c: 'Determinante',
    d: 'Matriz escalonada'
  },
  correcta: 'Matriz renglón y matriz columna'
}, {
  pregunta: 'En la matriz de adyacencia para un grafo dirigido, la entrada en el i-ésimo renglón y j-ésima columna es___',
  respuestas: {
    a: 'El número de aristas',
    b: 'El número de flechas de vi para vj',
    c: 'La lonhitud de caminos',
    d: 'Muy díficil de contestar'
  },
  correcta: 'El número de flechas de vi para vj'
}, {
  pregunta: 'Se dice que una matriz cuadrada A es invertible sí y sólo sí existe otra matriz del mismo orden, llamada inversa de A y representada por A^-1, tal que: A*A^-1 = A^-1*A=1 donde I es la matriz unidad',
  respuestas: {
    a: 'Matriz inversa',
    b: 'Producto de un escala',
    c: 'Matriz Regular',
    d: 'No sé'
  },
  correcta: 'Matriz Regular'
}, {
  pregunta: 'Se le llama a la que tiene el conjunto de m por n números reales dispuestos en m filas y n columnas',
  respuestas: {
    a: 'Matriz',
    b: 'Determinante',
    c: 'Sesgo',
    d: 'No sé'
  },
  correcta: 'Matriz'
}, {
  pregunta: 'Matriz cuadrada en la que todos los elementos que están por debajo de la diagonal principal son 0',
  respuestas: {
    a: 'Matriz cuadrada',
    b: 'Matriz Escalonada',
    c: 'Matriz triangular inferior',
    d: 'Matriz nula '
  },
  correcta: 'Matriz triangular inferior'
}, {
  pregunta: '¿Qué tipo de matriz es la que todos los elementos son 0? Se representa por Omxn o simplemente por 0',
  respuestas: {
    a: 'Matriz rectangular',
    b: 'No se',
    c: 'Matriz nula',
    d: 'Matriz escalonada'
  },
  correcta: 'Matriz nula'
}, {
  pregunta: 'Calcular los siguientes determinantes',
  respuestas: {
    a: 'A) 37    B) -67',
    b: 'A) -37   B) 67',
    c: 'A) 40    B) 20',
    d: 'A) 90    B) 38'
  },
  correcta: 'A) -37   B) 67'
}, {
  pregunta: '¿Qué tipo de operación es la que para formar el producto AB de dos matrices, el número de columnas de la matriz A debe ser igual que el número de renglones que la matriz B?',
  respuestas: {
    a: 'Suma de matrices',
    b: 'Multiplicación de matrices',
    c: 'No sé',
    d: 'Matriz identidad'
  },
  correcta: 'Multiplicación de matrices'
}, {
  pregunta: 'En la matriz de adyacencia para un grafo no dirigido, la entrada en el i-ésimo renglón y j-ésima columna es____',
  respuestas: {
    a: 'El número de aristasque conectarn a vi y vj',
    b: 'La adyacencia de un grafo',
    c: 'La longitud de la matriz',
    d: 'No sé'
  },
  correcta: 'El número de aristasque conectarn a vi y vj'
}, {
  pregunta: 'Es la matriz cuadrada A tal que A’ = A ',
  respuestas: {
    a: 'Matriz conjugada',
    b: 'Matriz simétrica',
    c: 'Matriz nula',
    d: 'Matriz identidad'
  },
  correcta: 'Matriz simétrica'
}, {
  pregunta: 'Como se le conoce a la matriz dónde G es una gráfica simple con n vértices',
  respuestas: {
    a: 'Matriz de adyacencia de G',
    b: 'Matriz escalonada',
    c: 'Matriz nula',
    d: 'Matriz transpuesta de G'
  },
  correcta: 'Matriz de adyacencia de G'
}, {
  pregunta: 'Si G es un grafo con vértices v1, v2…vm y A es la matriz de adyacencia de G, entonces para cada entero positivo n y para todos los enteros, i y j con i,j=1,2…m, la ij-ésima entrada a de A^n= ____',
  respuestas: {
    a: 'No sé',
    b: 'El grafo es indefinido',
    c: 'El número de caminos de longitud n de vi a vj',
    d: 'La arista es indefinida'
  },
  correcta: 'El número de caminos de longitud n de vi a vj'
}, {
  pregunta: 'Matriz que tiene el mismo número de renglones que de columnas',
  respuestas: {
    a: 'Matriz cuadrada',
    b: 'Matriz inversa',
    c: 'Matriz Triangular inferior',
    d: 'No sé'
  },
  correcta: 'Matriz Triangular inferior'
}];

},{}]},{},[1]);
