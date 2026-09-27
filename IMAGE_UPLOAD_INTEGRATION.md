# Image Upload Integration

This document explains how image uploading is handled in the `tracker website` project.

## Why Kappa.lol?
Previously, the app used `uguu.se` (which enforces a 3-hour expiry) and `catbox.moe`. However, Catbox.moe frequently blocks API requests coming from datacenter IPs (like Vercel serverless functions), leading to `Image host rejected the upload` errors in production. 

To solve this while retaining persistence and anonymity, we now use **Kappa.lol** (`https://kappa.lol/`). It is a completely free, anonymous image hosting provider that returns standard JSON responses and does not block Vercel's datacenter IPs.

## Implementation Details

The integration is implemented in two places:
1. **Local Express Server (`server/server.js`)**: Used when running `npm run dev`.
2. **Vercel Serverless Function (`api/upload.js`)**: Used in production when deployed to Vercel.

Both endpoints receive a `multipart/form-data` payload containing the image from the frontend (via `App.jsx`).

### The API Request
The Node.js backend converts the image buffer into a `FormData` object and makes a `POST` request to `https://kappa.lol/api/upload`.

```javascript
const formData = new FormData();

// Convert the buffer received by multer back into a Blob so fetch can correctly set boundaries
formData.append('file', new Blob([req.file.buffer], { type: req.file.mimetype }), req.file.originalname);

const response = await fetch('https://kappa.lol/api/upload', {
  method: 'POST',
  body: formData
});

// Kappa.lol returns a standard JSON object containing the link
const data = await response.json();

if (!response.ok || !data?.link) {
  return res.status(502).json({ error: 'Image host rejected the upload.' });
}
return res.status(200).json({ url: data.link });
```

### Key Considerations

1. **`file` Field**: Kappa.lol expects the uploaded file to be under the `file` field name.
2. **JSON Response**: The API responds with JSON containing the direct URL to the image under the `link` property.
3. **No Auth Required**: Unlike services like ImgBB which require an API key, Kappa.lol operates fully anonymously which aligns with the app's privacy-focused design.
