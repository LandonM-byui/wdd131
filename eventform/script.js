
const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const codesContainer = document.querySelector("#codesContainer");
const codes = document.querySelector("#codes");
const sIdContainer = document.querySelector("#sIdContainer")
const sId = document.querySelector("#sId");
const output = document.querySelector("#output");

function updateCodesField() {
  const value = ticketType.value;
  if (value === ""){
    codesContainer.hidden = true;
    codes.required = false;
    sIdContainer.hidden = true;
    sIdContainer.required = false;
    
  }
  else if (value === "guest") {
    codesContainer.hidden = false;
    codes.required = true;
    sIdContainer.hidden = true;
    sIdContainer.required = false;
  }
  else if (value === "student"){
    codesContainer.hidden = true;
    codes.required = false;
    sIdContainer.hidden = false;
    sIdContainer.required = true;
  }
  
}

ticketType.addEventListener("change", updateCodesField);
updateCodesField();


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const value = ticketType.value;
  let codeOrId = null;

  if (value === ""){
    output.textContent = "Please select a ticket type";
    return;
  }
  else if (value === "student"){
    codeOrId = form.sId.value.trim();
  }
  else if (value === "guest"){
    codeOrId = form.codes.value.trim();
  }
  
  if (value === "student" && codeOrId.length != 9){
    output.textContent = "Please enter a 9 digit I-number";
    return;
  }

  if (value === "guest" && codeOrId != "EVENT131"){
    output.textContent = "Please enter a valid access code";
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${value}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateCodesField();
});
          