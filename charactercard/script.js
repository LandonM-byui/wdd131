const aCharacter= {
    name: 'Espevé D\'Liavellen',
    class: 'Soul-Knife Rogue',
    level: 5,
    health: 100,
    img: "enderpicture.png",
    alt: "Picture of a pale elf wearing leather armor of cream, blue, and purple, with a white hood and mask, a purple blindfold, and weilding a black crystaline dagger.",
    attacked: function () {
        if (this.health > 0){
            this.health -= 20;
            console.log("Ow")
            renderStats(this);
        }
        if (this.health <= 0){
            alert("Character Died")
        }
    },
    levelUp: function () {
        if (this.health > 0){
            this.level += 1;
            renderStats(this);
        }
    }
}
document.querySelector('.image').setAttribute('src', aCharacter.img);
document.querySelector('.image').setAttribute('alt', aCharacter.alt);
document.querySelector('.name').textContent = aCharacter.name;
renderStats(aCharacter);
document.querySelector('#atk').addEventListener("click", function () {aCharacter.attacked()});
document.querySelector('#lv').addEventListener("click", function () {aCharacter.levelUp()});



function generateCharacterCard(character){
    return`
    <p><b>Class:</b> ${character.class}</p>
    <p><b>Level:</b> ${character.level}</p>
    <p><b>Health:</b> ${character.health}</p>`
}

function renderStats(character){
    const html = generateCharacterCard(aCharacter);
    document.querySelector('.stats').innerHTML = html;
}