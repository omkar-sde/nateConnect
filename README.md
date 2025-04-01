# nateConnect Chrome Extension

**nateConnect** is a Chrome extension that helps automate the process of sending personalized connection requests on LinkedIn with a customizable message template. You can easily fill in the recipient’s details like their position, company, and first name using a predefined message format.

## Screenshots

**Extension Popup**
  ![Extension Popup](/screenshots/extension.jpg)

**Message Autofill**
  ![Message Autofill](/screenshots/message.jpg)

## Features:
- **Customizable Message Template**: Allows you to set a custom message template with placeholders for the recipient’s name, position, and company.
- **Autofill Connection Message**: When you click "Add a note" on LinkedIn’s connection page, the message is automatically filled with the personalized content.
- **Dynamic Data**: The extension pulls data such as the recipient’s first name.
- **Flexible Settings**: You can change the message template, position, and company from the extension's popup.

## Installation

### Prerequisites:
- Google Chrome browser.

### Steps to Install:

1. **Download the Code**:
   - Clone or download the repository to your local machine.

2. **Load the Extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** at the top-right corner.
   - Click **Load unpacked** and select the folder where your extension files are located.

3. **Set Up the Extension**:
   - Click on the extension icon in the Chrome toolbar to open the popup.
   - Set the **position**, **company**, and **custom message template**. You can update these details at any time.
   - Click **Save** to store the settings.

## Usage

1. **Navigate to LinkedIn**:
   - Open a LinkedIn profile page.

2. **Click "Connect"**:
   - On the profile page, click on the **"Connect"** button.

3. **Click "Add a note"**:
   - After clicking **"Add a note"**, the extension will automatically fill in the message box with a personalized message.
   
4. **Customize the Message**:
   - You can edit the message in the text area if you want to make any changes.
   - Click **Send** to send the connection request.

### Example Custom Message Template:
Here’s an example of the customizable message template you can set in the extension’s popup:

```text
Hi ${name}!
I noticed you are a ${position} at ${company}. I am growing my connections and would love to stay connected.
```

The placeholder **`${name}`** will be dynamically replaced with the actual values from the LinkedIn profile.

## Customization

You can modify the message template, position, and company through the extension's popup. Simply enter new values and click **Save** to store them. The next time you click "Add a note" on LinkedIn, the message will be updated accordingly.