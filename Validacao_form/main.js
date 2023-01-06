const form = document.getElementById('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if (campoB.value > campoA.value) {
        console.log("Válido");
    } else if (campoB.value == campoA.value) {
        console.log("Mesmos valores");
    } else {
        console.log("Inválido");
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a').value = '';
    const campoB = document.getElementById('campo-b').value = '';

})



