const menu = document.querySelector(".menu")
const items = document.querySelector("nav")
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

menu.addEventListener('click', toggleMenu)
function toggleMenu(){

    items.classList.toggle('hide');
}

function openModal(e) {
    const img = e.target;
    console.log(img)

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    modalImage.src = src;
    modalImage.alt = alt;
    modal.showModal();
    
}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});