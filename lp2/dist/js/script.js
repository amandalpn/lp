const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

// function handleGetFormData() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const city = document.getElementById("city").value;
//   const zipCode = document.getElementById("zip-code").value;
//   const status = document.getElementById("status").checked;

//   return { name, email, city, zipCode, status };
// }

// function isNumber(str) {
//   return !isNaN(str);
// }

// function checkboxIsChecked() {
//   return document.getElementById("status").checked;
// }

// function validateFormData(data) {
//   if (data !== null && isNumber(data.zipCode) && checkboxIsChecked()) {
//     return true;
//   }
//   return false;
// }

// // Nomor 10
// function submit() {
//   event.preventDefault();
//   const formData = handleGetFormData();

//   if (!validateFormData(formData)) {
//     const warningDiv = document.getElementById("warning");
//     warningDiv.textContent = "Periksa form anda sekali lagi";
//   } else {
//     const warningDiv = document.getElementById("warning");
//     warningDiv.textContent = "";
//   }
// }

// script.js
function handleGetFormData() {
  const formData = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };

  return formData;
}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsCracked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}

function validateFormData(formData) {
  if (formData && isNumber(formData.zipCode) && formData.status === true) {
    return true;
  }

  return false;
}

function submit(event) {
  event.preventDefault(); // Mencegah refresh pada halaman

  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  const warningDiv = document.getElementById("warning");

  if (!isValid) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
    // Lakukan tindakan selanjutnya, seperti mengirim data ke server
  }
}

// Menghubungkan function submit dengan form
const form = document.querySelector("form");
form.addEventListener("submit", submit);

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("form");
//   const warningDiv = document.getElementById("warning");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const formData = handleGetFormData();
//     if (!validateFormData(formData)) {
//       warningDiv.textContent = "Periksa form Anda sekali lagi.";
//     } else {
//       warningDiv.textContent = "";
//       // pengiriman data ke server
//     }
//   });
// });
