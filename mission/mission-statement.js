let selectElem = document.querySelector('#theme-select');
let body = document.querySelector('body');
const image = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme(){
    let current = selectElem.value;
    if (current == 'dark'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        document.querySelector('.subheading').style.color = 'rgb(161, 228, 248)';
        image.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png')
    }
    else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        document.querySelector('.subheading').style.color = 'rgb(76, 161, 189)';
        image.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp')
    }
}