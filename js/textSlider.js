const textSlider = document.getElementById("myRange");
const table = document.querySelector('#mainTable');

console.log(table);

textSlider.addEventListener('change', (e) => {
    console.log(`${textSlider.value}`);
    table.style.fontSize = `${textSlider.value}px`;
})