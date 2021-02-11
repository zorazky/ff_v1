const arrows = document.querySelectorAll('.detail-arrow');


for (arrow of arrows) {
    arrow.addEventListener('click', function () {
        this.parentElement.parentElement.nextElementSibling.classList.toggle('hide');
        this.classList.toggle('fa-angle-down');
        this.classList.toggle('fa-angle-up');
    });
}
