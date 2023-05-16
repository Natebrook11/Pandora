const passwordForm = document.getElementById("password-form");
const searchForm = document.getElementById("search-form");
const passwordList = document.getElementById("password-list");

let passwords = [];

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const appName = document.getElementById("app-name").value;
  const password = document.getElementById("password").value;

  passwords.push({ appName, password });
  passwordList.innerHTML = getPasswordsHTML(passwords);

  localStorage.setItem("passwords", JSON.stringify(passwords));

  passwordForm.reset();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredPasswords = passwords.filter((password) =>
    password.appName.toLowerCase().includes(searchTerm)
  );
  passwordList.innerHTML = getPasswordsHTML(filteredPasswords);

  searchForm.reset();
});

function getPasswordsHTML(passwords) {
  return passwords
    .map(
      (password) =>
        `<div class="password-entry"><strong>${password.appName}:</strong> ${password.password}</div>`
    )
    .join("");
}

// Load saved passwords from localStorage
const savedPasswords = localStorage.getItem("passwords");
if (savedPasswords) {
  passwords = JSON.parse(savedPasswords);
  passwordList.innerHTML = getPasswordsHTML(passwords);
}
