import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const parseUpload = (req, res) => new Promise((resolve, reject) => {
  upload.single('file')(req, res, (error) => {
    if (error) reject(error);
    else resolve();
  });
});

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await parseUpload(req, res);
    if (!req.file?.mimetype?.startsWith('image/')) {
      return res.status(400).json({ error: 'An image file is required.' });
    }

    const formData = new FormData();
    formData.append('files[]', new Blob([req.file.buffer], { type: req.file.mimetype }), req.file.originalname);

    const response = await fetch('https://uguu.se/upload.php', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    const url = result.files?.[0]?.url;

    if (!response.ok || !result.success || !url?.startsWith('http')) {
      return res.status(502).json({ error: 'Image host rejected the upload.' });
    }
    return res.status(200).json({ url });
  } catch (error) {
    console.error('Upload error:', error.message);
    return res.status(502).json({ error: 'Image upload failed.' });
  }
}
