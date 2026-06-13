const aCharacter= {
    class: 'Soul-Knife Rogue',
    level: 5,
    health: 100,
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