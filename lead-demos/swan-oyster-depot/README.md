# Pindola Demo Website Template

This directory contains a lightweight, polished one-page demo website template designed for local businesses. It includes an embedded AI Receptionist chat widget.

## How to Use

To generate a custom demo for a lead:
1. Copy all files from this directory to a new folder (e.g., `/home/team/shared/demos/lead-business-name/`).
2. Open `index.html` and replace the following placeholders with the business's actual information:
    - `{{BUSINESS_NAME}}`: The name of the business.
    - `{{TAGLINE}}`: A catchy tagline or value proposition.
    - `{{ABOUT_TEXT}}`: A brief description of the business.
    - `{{SERVICES_HTML}}`: HTML blocks for services. Example:
      ```html
      <div class="service-card">
          <h3>Service Name</h3>
          <p>Service description goes here.</p>
      </div>
      ```
    - `{{ADDRESS}}`: Business physical address.
    - `{{PHONE}}`: Business phone number.
    - `{{EMAIL}}`: Business contact email.
3. (Optional) Replace the placeholder images in the Gallery section or the Hero background in `style.css`.

## Features
- **Responsive Design**: Works on mobile, tablet, and desktop.
- **AI Receptionist Widget**: A mock AI chat widget is included (`chat-widget.js`). It demonstrates how an AI can handle customer inquiries.
- **Fast & Lightweight**: Built with vanilla HTML/CSS/JS for instant loading.

## File Structure
- `index.html`: Main structure.
- `style.css`: Styling and responsive layout.
- `script.js`: Site-wide interactions (smooth scroll, etc.).
- `chat-widget.js`: Self-contained AI chat widget logic and styles.
