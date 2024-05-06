function createPage() {
  const root = document.getElementById('root')

  //header
  const myHeader = document.createElement('header');
  myHeader.id = 'myHeader';
  root.appendChild(myHeader);

  const myh1 = document.createElement('h1');
  myh1.id = 'myh1';
  myh1.innerText = 'Numberle_';
  myHeader.appendChild(myh1);

  //main
  const myMain = document.createElement('main');
  myMain.id = 'myMain';
  root.appendChild(myMain);

  //footer
  const myFooter = document.createElement('footer');
  myFooter.id = 'myFooter';
  root.appendChild(myFooter);
}

function createBoard(row, column) {
  const myMain = document.getElementById('myMain');
  for (let i = 1; i <= row; i++) {
    const oneTry = document.createElement('div');
    oneTry.setAttribute('class', 'oneTry');

    for (let j = 1; j <= column; j++) {
      const myBox = document.createElement('div');
      myBox.setAttribute('class', 'nullBox');
      myBox.setAttribute('id', 'myBox' + i + '-' + j);
      oneTry.appendChild(myBox);
    }
    myMain.appendChild(oneTry);
  }
}

function createNumbers(column) {
  const myFooter = document.getElementById('myFooter');
  for (let i = 0; i < column; i++) {
    const theNumbers = document.createElement('div');
    theNumbers.setAttribute('id', 'theNumbers' + i);
    theNumbers.setAttribute('class', 'theNumbers');
    myFooter.appendChild(theNumbers);
    theNumbers.innerText = i;
  }
}

function createButtons(buttonNames) {
  const myFooter = document.getElementById('myFooter');
  for (let i = 0; i < buttonNames.length; i++) {
    const otherButtons = document.createElement('div');
    otherButtons.setAttribute('id', 'otherButtons' + i);
    otherButtons.setAttribute('class', 'otherButtons');
    otherButtons.innerText = buttonNames[i];
    myFooter.appendChild(otherButtons);
  }
}

// Crear un array con un numero aleatorio
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

function createRandomNumber(lengthNumber) {
  const randomNumberArray = [];

  for (let i = 0; i < lengthNumber; i++) {
    randomNumberArray.push(getRandomNumber(0, 9));
  }
  return randomNumberArray;
}


//clic butons and write in box
function trying(tries, lengthNumber) {
  let toTrie = 1;
  console.log(`Llevo ${toTrie} vuelta`)

  //obtener el texto del boton clicado
  for (let i = 0; i < 10; i++) {
    const currentNumber = document.getElementById(`theNumbers${i}`);
    currentNumber.addEventListener('click', function (event) {
      const textoBoton = event.target.innerText; // Obtener el texto del botón clicado

      while (toTrie <= tries) {
        for (let j = 1; j <= lengthNumber; j++) {
          const myBox = document.getElementById(`myBox${toTrie}-${j}`); // Obtener el div "myBox" actual
          if (!myBox.innerText) {
            myBox.innerText = textoBoton; // Insertar el texto en el div "myBox" actual
            return;
          }
        }
        toTrie++;
      }
    });
  }
}

function toEnter(lengthNumber) {

  const myNumber = [];
  const enter = document.getElementById('otherButtons0');
  enter.addEventListener('click', function () {
    for (let i = 1; i <= lengthNumber; i++) {
      const box = document.getElementById(`myBox1-${i}`);

      myNumber.push(box.innerText);
    }
  });
  return myNumber;
}

function toGuess(lengthNumber) {
  const myNumber = toEnter(lengthNumber);
  const randomNumber = createRandomNumber(lengthNumber);

  //Para cada numero del array comprueba si esta en la posicion

  for (let i = 0; i < myNumber.length; i++) {


  }
  for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] === randomNumber[i]) {
      const box = document.getElementById(`myBox1-${i}`);
      box.setAttribute('class', 'guessedBox');
    }
  }

  for (let i = 0; i < myNumber.length; i++) {
    if (randomNumber.includes(myNumber[i])) {
      const box = document.getElementById(`myBox1-${i}`);
      box.setAttribute('class', 'guessedBox');
    } else if (randomNumber.includes(myNumber[i])) {
      const box = document.getElementById(`myBox1-${i}`);
      box.setAttribute('class', 'semiGuessedBox');
    }
  }
}



function runApp(tries, lengthNumber) {
  //creating HTML
  createPage();

  //creating the space
  createBoard(tries, lengthNumber);
  createNumbers(10);
  createButtons(['Enter', 'Delete',]);
  createRandomNumber(lengthNumber);

  //run
  trying(tries, lengthNumber);
  toEnter(lengthNumber);
  toGuess(lengthNumber);

}

runApp(6, 5);

// /delete, la misma funcion pero al reves

// document.getElementById(`otherButtons1`).addEventListener('click', function () {
//   textoBoton.innerText =null; // borrar texto
// });
