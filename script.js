'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Get call back


document.getElementById("getcall").addEventListener("click", function () {
  const num = document.querySelector(".email-field").value || "[Enter Your Number...]"

  let email = "drapurvmamidwar@gmail.com";
  const subject = "For Dental Health"; // Customize the subject
  const body = `Hello,\n\nI hope this message finds you well. I would appreciate the opportunity to discuss [specific topic or purpose...]. Please let me know a convenient time for you to give me a call at ${num}. \n\n Alternatively, you can reply to this email with your available times, and I will ensure I’m available to connect.\nLooking forward to hearing from you.\n\nBest regards,\n [Your Full Name]`; // Customize the body
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailURL, "_blank"); // Opens Gmail in a new tab
});

// on click go to what's

document.querySelector(".phone-number").addEventListener("click", calling)

function calling() {
  var phoneNumber = document.querySelector(".phone-number").getAttribute("dnumber");
  if (phoneNumber) {
    // Open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }

}

document.querySelector(".phone-number2").addEventListener("click", calling2)
document.querySelector("#bookAppointment").addEventListener("click", calling2)
document.querySelector("#bookAppointment2").addEventListener("click", calling2)
function calling2() {
  var phoneNumber = document.querySelector(".phone-number2").getAttribute("dnumber") || 7385888885;
  if (phoneNumber) {
    // Open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }

}



function forwardToGmail(email) {
  const subject = "Subject goes here"; // Customize the subject
  const body = "Hello,\n\nYour message here."; // Customize the body
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailURL, "_blank"); // Opens Gmail in a new tab
}



/**
 * for Enquiry form
 */
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Simple form validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
    .map((checkbox) => checkbox.value);

  console.log(name, email, phone, selectedServices)

  selectedServices.map((service) => { console.log(service) })

  if (!name || !email || !phone) {
    alert("Please fill out all required fields.");

  }
  else {
    // Display success message
    document.getElementById("successMessage").style.display = "block";
  }


  // Reset the form
  document.getElementById("enquiryForm").reset();
});



function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}