const myNumber = [1, 2, 3, 4, 5,]
const myNumber = [3, 2, 6, 7, 5,]

for (let i = 0; i < myNumber.length; i++) {
  if (myNumber[i] === randomNumber[i]) {
    const box = document.getElementById(`myBox1-${i}`);
    box.setAttribute('class', 'guessedBox');
  } else if (randomNumber.includes(myNumber[i]))
    const box = document.getElementById(`myBox1-${i}`);
    box.setAttribute('class', 'semiGuessedBox');
  } else{
  const box = document.getElementById(`myBox1-${i}`);
  box.setAttribute('class', 'semiGuessedBox');

  }


for (let i = 0; i < myNumber.length; i++) {

}

} else if (randomNumber.includes(myNumber[i])) {
  const box = document.getElementById(`myBox1-${i}`);
  box.setAttribute('class', 'semiGuessedBox');

} else {

}

