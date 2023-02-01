let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 8) {
        wipe();
    } else if (e.keyCode == 46) {
        wipe();
    } else if (e.keyCode == 13) {
        calc();
    } else if (e.keyCode == 96) {
        show(0);
    } else if (e.keyCode == 97) {
        show(1);
    } else if (e.keyCode == 98) {
        show(2);
    } else if (e.keyCode == 99) {
        show(3);
    } else if (e.keyCode == 100) {
        show(4);
    } else if (e.keyCode == 101) {
        show(5);
    } else if (e.keyCode == 102) {
        show(6);
    } else if (e.keyCode == 103) {
        show(7);
    } else if (e.keyCode == 104) {
        show(8);
    } else if (e.keyCode == 105) {
        show(9);
    } else if (e.keyCode == 107) {
        show('+');
    } else if (e.keyCode == 109) {
        show('-');
    } else if (e.keyCode == 111) {
        show('/');
    } else if (e.keyCode == 106) {
        show('*');
    }
});
