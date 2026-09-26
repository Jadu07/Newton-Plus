# Catbox.moe Image Upload Integration

This document explains how image uploading is handled in the `tracker website` project using [Catbox.moe](https://catbox.moe). 

## Why Catbox.moe?
Previously, the app used `uguu.se`, which enforces a 3-hour expiry limit on all uploaded images. Catbox.moe is a completely free, anonymous image hosting provider that **does not delete files**, meaning images uploaded here will persist indefinitely. It also does not require registering for an API key.

## Implementation Details

The integration is implemented in two places:
1. **Local Express Server (`server/server.js`)**: Used when running `npm run dev`.
2. **Vercel Serverless Function (`api/upload.js`)**: Used in production when deployed to Vercel.

Both endpoints receive a `multipart/form-data` payload containing the image from the frontend (via `App.jsx`).

### The API Request
The Node.js backend converts the image buffer into a `FormData` object and makes a `POST` request to `https://catbox.moe/user/api.php`.

```javascript
const formData = new FormData();
// Catbox specifically requires 'reqtype' to be 'fileupload'
formData.append('reqtype', 'fileupload');

// Convert the buffer received by multer back into a Blob so fetch can correctly set boundaries
formData.append('fileToUpload', new Blob([req.file.buffer], { type: req.file.mimetype }), req.file.originalname);

const response = await fetch('https://catbox.moe/user/api.php', {
  method: 'POST',
  body: formData,
  headers: {
    // Critical: Catbox's anti-bot firewall (like Cloudflare) may block generic backend requests (like Vercel).
    // Faking a standard browser User-Agent ensures the request goes through smoothly.
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

// Catbox returns the direct URL to the image in plain text (not JSON)
const url = await response.text();
return res.json({ url: url.trim() });
```

### Key Considerations

1. **`reqtype=fileupload`**: Catbox requires this exact form field to understand that an anonymous upload is occurring.
2. **`fileToUpload`**: This is the field name Catbox expects for the file payload (unlike other services which might expect `files[]` or `file`).
3. **User-Agent**: Datacenter IPs (such as Vercel) or default `node-fetch` user agents are frequently blocked by Catbox to prevent spam. Using a real browser User-Agent allows the request to be accepted.
4. **Plain Text Response**: Catbox returns the raw URL (e.g. `https://files.catbox.moe/asxzpl.png`) as plain text. The code awaits `response.text()` rather than `response.json()` and wraps it back into JSON for the frontend to consume.
