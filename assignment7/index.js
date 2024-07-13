const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Set up Multer storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
    }
});

const upload = multer({ storage: storage });

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({
        message: 'file uploaded successfully',
        imageUrl: req.file.path
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
