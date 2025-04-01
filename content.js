// content.js

// Extract profile data (first name)
function getProfileInfo() {
    // Extract the first name
    let nameElement = document.querySelector('.t-24.v-align-middle.break-words');
    let name = nameElement ? nameElement.innerText.trim().split(" ")[0] : "";

    return { name };
}

// Detect when "Add a Note" is clicked
document.addEventListener("click", (event) => {
    if (event.target.innerText.includes("Add a note")) {
        setTimeout(() => {
            let messageBox = document.querySelector('textarea[name="message"]');
            if (messageBox) {
                // Get the position, company, and custom message from storage
                chrome.storage.sync.get(['position', 'company', 'message'], function (data) {
                    let { name } = getProfileInfo();
                    let position = data.position || "Unknown Position";
                    let company = data.company || "Unknown Company";
                    let messageTemplate = data.message || `Hi ${name}!\nI noticed you are a ${position} at ${company} and wanted to stay connected for current and future updates.\nI am a 4+ years experienced C#/Java Software Engineer currently pursuing my Masters at Northeastern University. Would you mind if I sent you my resume?`;

                    // Replace placeholders in the message template
                    let message = messageTemplate
                        .replace('${name}', name)
                        .replace('${position}', position)
                        .replace('${company}', company);

                    // Autofill the message into the message box
                    messageBox.value = message;
                });
            }
        }, 1000); // Wait a moment for the modal to load
    }
});
