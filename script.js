'use strict';

const size = document.querySelectorAll('.btn-size');

const switchButtonColor = function () {
    size.classList.remove('.inactive');
    size.classList.add('.active');
}
console.log(switchButtonColor());


size.addEventListener('click', switchButtonColor());