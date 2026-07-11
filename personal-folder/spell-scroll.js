const classes = ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"]
let spell_list = document.querySelector(".character-spell-list")
let spell_popup = document.querySelector(".spell-popup")
const test_spells = [{
		"name": "Acid Arrow",
		"level": 2,
		"school": "evocation",
		"classes": ["wizard"],
		"actionType": "action",
		"concentration": false,
		"ritual": false,
		"range": "90 feet",
		"components": ["v", "s", "m"],
		"material": "powdered rhubarb leaf",
		"duration": "Instantaneous",
		"description": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 Acid damage and 2d4 Acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage only.",
		"higherLevelSlot": "The damage (both initial and later) increases by 1d4 for each spell slot level above 2."
	},
	{
		"name": "Acid Splash",
		"level": 0,
		"school": "evocation",
		"classes": ["sorcerer", "wizard"],
		"actionType": "action",
		"concentration": false,
		"ritual": false,
		"range": "60 feet",
		"components": ["v", "s"],
		"duration": "Instantaneous",
		"description": "You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.",
		"cantripUpgrade": "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6)."
	},
	{
		"name": "Aid",
		"level": 2,
		"school": "abjuration",
		"classes": ["bard", "cleric", "druid", "paladin", "ranger"],
		"actionType": "action",
		"concentration": false,
		"ritual": false,
		"range": "30 feet",
		"components": ["v", "s", "m"],
		"material": "a strip of white cloth",
		"duration": "8 hours",
		"description": "Choose up to three creatures within range. Each target's Hit Point maximum and current Hit Points increase by 5 for the duration.",
		"higherLevelSlot": "Each target's Hit Points increase by 5 for each spell slot level above 2."
	},
	{
		"name": "Alarm",
		"level": 1,
		"school": "abjuration",
		"classes": ["ranger", "wizard"],
		"actionType": "action",
		"concentration": false,
		"ritual": true,
		"castingTime": "1 minute",
		"range": "30 feet",
		"components": ["v", "s", "m"],
		"material": "a bell and silver wire",
		"duration": "8 hours",
		"description": "You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is audible or mental: \n\n Audible Alarm. The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area. \n\n Mental Alarm. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you're asleep."
	}]



function spellLevelTemplate (spell){

}

renderSpellPopup(test_spells[3])

function renderSpellPopup(spell){
    spell_popup.innerHTML = spellPopupTemplate(spell);
    spell_popup.classList.toggle('hidden');
}

function spellPopupTemplate (spell){
    console.log("hi");
    let upcast = "";
    let duration = "";
    var spell_level = "";
    if (Object.hasOwn(spell, "castingTrigger")){
        duration = `reaction, ${spell.castingTrigger}`;
    }
    else{
        duration = spell.actionType;
    }
    if (Object.hasOwn(spell, "higherLevelSlot")){
        upcast = spell.higherLevelSlot
    }

    if (spell.level == 0){
        var school = spell.school;
        var schoolUpper = school[0].toUpperCase() + school.slice(1);
        spell_level = `${schoolUpper} cantrip`;
    }
    else if (spell.level == 1){
        spell_level = `1st-level ${spell.school}`;
    }
    else if (spell.level == 2){
        spell_level = `2nd-level ${spell.school}`;
    }
    else if (spell.level == 3){
        spell_level = `3rd-level ${spell.school}`;
    }
    else{
        spell_level = `${spell.level}th-level ${spell.school}`;
    }

    if (spell.ritual){
        spell_level += ` (ritual)`
    }

    var template = `<section class="spell-popup-header">
            <h2>${spell.name}</h2>
            <h2 class="close">x</h2>
        </section>
        <p>${spell_level}</p>
        <p><b>Concentration: </b> ${spell.concentration}</p>
        <p><b>Casting Time: </b> ${duration}</p>
        <p><b>Range: </b> ${spell.range}</p>
        <p><b>Components: </b> ${spell.components}</p>
        <p><b>Duration: </b> ${spell.duration}t</p>
        <p><b>Classes: </b> ${spell.classes}</p>
        <p><b>Description: </b></p>
        <p>${spell.description}</p>`

    
    if (upcast != ""){
        template += `<p><b>At Higher Levels:</b></p>
        <p>${upcast}</p>`
    }

    
    return template;
}