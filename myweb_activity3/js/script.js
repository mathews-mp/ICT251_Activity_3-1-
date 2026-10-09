// ========================================
// ICT251 Activity 3 - Interactive Features
// ========================================


// ========================================
// 1. CONTACT FORM VALIDATION AND PREVIEW
// ========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Stop the form from reloading or sending data
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formPreview = document.getElementById("formPreview");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formPreview.hidden = true;

    let valid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate message
    if (message === "") {
        messageError.textContent = "Please enter a message.";
        valid = false;
    }

    // Display preview if everything is valid
    if (valid) {

        formPreview.innerHTML = "";

        const heading = document.createElement("h3");
        heading.textContent = "Form Preview";

        const validationMessage = document.createElement("p");
        validationMessage.textContent =
            "Your information has been validated successfully. No message was sent.";

        const nameText = document.createElement("p");
        nameText.textContent = "Name: " + name;

        const emailText = document.createElement("p");
        emailText.textContent = "Email: " + email;

        const topicText = document.createElement("p");
        topicText.textContent = "Topic: " + (topic || "Not provided");

        const messageText = document.createElement("p");
        messageText.textContent = "Message: " + message;

        formPreview.appendChild(heading);
        formPreview.appendChild(validationMessage);
        formPreview.appendChild(nameText);
        formPreview.appendChild(emailText);
        formPreview.appendChild(topicText);
        formPreview.appendChild(messageText);

        formPreview.hidden = false;
    }
});


// ========================================
// 2. EXPANDABLE PROJECT DETAILS
// ========================================

const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        if (details.hidden) {
            details.hidden = false;
            button.textContent = "Hide Details";
        } else {
            details.hidden = true;
            button.textContent = "Show Details";
        }
    });
});


// ========================================
// 3. PHOTO GALLERY VIEWER
// ========================================

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const photos = [
    {
        src: "images/photo1.jpeg",
        alt: "A photo of my study environment",
        caption: "Photo 1: My study environment."
    },
    {
        src: "images/photo2.jpeg",
        alt: "A photo related studying the Bible",
        caption: "Photo 2: My interest in studying the Bible."
    },
    {
        src: "images/photo3.jpeg",
        alt: "A photo representing my interest in chess",
        caption: "Photo 3: My interest in chess."
    }
];

let currentPhoto = 0;


// Display the selected photo
function displayPhoto(index) {

    galleryImage.src = photos[index].src;
    galleryImage.alt = photos[index].alt;
    galleryCaption.textContent = photos[index].caption;

    // Disable buttons at the first and last photos
    previousPhoto.disabled = index === 0;
    nextPhoto.disabled = index === photos.length - 1;
}


// Previous button
previousPhoto.addEventListener("click", function () {

    if (currentPhoto > 0) {
        currentPhoto--;
        displayPhoto(currentPhoto);
    }
});


// Next button
nextPhoto.addEventListener("click", function () {

    if (currentPhoto < photos.length - 1) {
        currentPhoto++;
        displayPhoto(currentPhoto);
    }
});


// Show the first photo when the page loads
displayPhoto(currentPhoto);


// ========================================
// 4. STUDY HOURS CALCULATOR
// ========================================

const studyForm = document.getElementById("studyForm");

studyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const hoursPerDay = Number(
        document.getElementById("hoursPerDay").value
    );

    const daysPerWeek = Number(
        document.getElementById("daysPerWeek").value
    );

    const studyResult = document.getElementById("studyResult");

    // Check the values entered by the visitor
    if (
        !Number.isFinite(hoursPerDay) ||
        hoursPerDay < 0 ||
        !Number.isFinite(daysPerWeek) ||
        daysPerWeek < 1 ||
        daysPerWeek > 7
    ) {
        studyResult.textContent =
            "Please enter valid study hours and a number of days from 1 to 7.";
        return;
    }

    const weeklyHours = hoursPerDay * daysPerWeek;

    studyResult.textContent =
        "Your planned study time is " +
        weeklyHours +
        " hours per week.";
});


// ========================================
// 5. LIGHT/DARK THEME SWITCH
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Switch to Light Theme";
    } else {
        themeToggle.textContent = "Switch to Dark Theme";
    }
});