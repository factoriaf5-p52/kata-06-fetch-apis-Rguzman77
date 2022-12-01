
const fact = document.querySelector(".fact")
function pressButton(){
let data= fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((response) => response.json())
            .then(data=> fact.innerHTML = (data.text));
}


     

