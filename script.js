<style>
    h1 {
        text-align: center;
    }
</style>
const form = document.getElementById("internshipForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form submitted successfully!");

});
const form = document.getElementById("internshipForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    alert("Form submitted successfully!");

});
const phone = document.getElementById("phone").value.trim();

if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
}
const skills = document.querySelectorAll(
    'input[name="skills"]:checked'
);

if (skills.length === 0) {
    alert("Please select at least one skill.");
    return;
}const resume = document.getElementById("resume");

if (resume.files.length === 0) {
    alert("Please upload your resume.");
    return;
}

const fileName = resume.files[0].name.toLowerCase();

if (!fileName.endsWith(".pdf") &&
    !fileName.endsWith(".doc") &&
    !fileName.endsWith(".docx")) {

    alert("Please upload a PDF, DOC, or DOCX file.");
    return;
}