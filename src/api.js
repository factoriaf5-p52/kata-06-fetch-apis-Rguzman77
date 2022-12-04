const content = document.querySelector(".fact")

function pressButton(){
let data = fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  .then((response) => response.json())
  .then((data) => content.textContent = (data.text));}

     

