const inputs = document.querySelectorAll("input");

//el this del handle es el objeto del cual se esta invocando en este caso es un input
function handleUPdate(){
    console.log(this.value);
    console.log(this.dataset.size);
    console.log(this.name);
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + this.dataset.size);

}

//inputs es un NodeList y se puede recorrer con foreach
//a cada input le agrega un listener y llama a handleUPdate
inputs.forEach(input => input.addEventListener("change",handleUPdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUPdate));


