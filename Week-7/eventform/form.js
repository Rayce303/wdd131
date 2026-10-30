const whatType = document.getElementById('whatType');
const notesContainer = document.getElementById('notesContainer');
const notesLabel = document.getElementById('theLabelYay');
const form = document.querySelector("#eventForm");

whatType.addEventListener("change", function() {
    if (whatType.value === "Student") {
        notesContainer.hidden = false;
        notesLabel.textContent = "Student I#";
    }
    else if (whatType.value === "Guest") {
        notesContainer.hidden = false;
        notesLabel.textContent = "Access Code:";
    }
    else (notesContainer.hidden = true);
});

// make sure you pick a later day
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

// make sure the student # is long enough
function isValidID(value) {
  return value.toString().length != 9;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // this thing ^^^ stops entries from ending up in the URL

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.whatType.value;
  const availableDate = form.availableDate.value;
  const notes = form.notes.value.trim();

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  if (type === "Student" && isValidID(notes)) {
    output.textContent = "Student ID # must be 9 digits.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});