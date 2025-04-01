// popup.js

// When the popup is loaded, fetch saved position, company, and message template
document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get(['position', 'company', 'message'], function (data) {
        if (data.position) {
            document.getElementById('position').value = data.position;
        }
        if (data.company) {
            document.getElementById('company').value = data.company;
        }
        if (data.message) {
            document.getElementById('message').value = data.message;
        }
    });
});

// Save position, company, and message when save button is clicked
document.getElementById('saveButton').addEventListener('click', function () {
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    chrome.storage.sync.set({ 'position': position, 'company': company, 'message': message }, function () {
        alert('Settings saved!');
    });
});
