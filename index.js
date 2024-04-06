function rollDice(){
  const numOfDice = document.getElementById("user").value;
  const diceResult = document.getElementById("diceresult");
  const diceImages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for(let i = 0; i<numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice-images/${value}.jpg" alt ="Dice ${value}">`);
  }
  diceResult.textContent = `Dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}