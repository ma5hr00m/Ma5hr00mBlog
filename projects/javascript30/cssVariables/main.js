function styleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.id}`,this.value + suffix);
    console.log(1);
}

const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener('input',styleUpdate));