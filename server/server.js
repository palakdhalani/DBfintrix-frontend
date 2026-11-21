const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
require('dotenv').config();

const { initDB, blogs, contacts, hero, users } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsDir));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${cleanName}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB limit
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|svg/;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    const mime = file.mimetype.toLowerCase();
    if (allowed.test(ext) || mime.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (jpeg, jpg, png, webp, gif, svg) are allowed!'));
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// --- Blog Endpoints ---

// GET /api/blogs (supports ?category=...)
app.get('/api/blogs', async (req, res, next) => {
  try {
    const { category } = req.query;
    const result = await blogs.find({ category });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/blogs/:id
app.get('/api/blogs/:id', async (req, res, next) => {
  try {
    const blog = await blogs.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    next(err);
  }
});

// POST /api/blogs
app.post('/api/blogs', async (req, res, next) => {
  try {
    const { title, content, category, imageUrl, author } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Blog title is required' });
    }
    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Blog content is required' });
    }

    const created = await blogs.create({
      title: title.trim(),
      content: content.trim(),
      category: category ? category.trim() : 'Market Updates',
      imageUrl: imageUrl || '',
      author: author ? author.trim() : 'Admin'
    });

    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

// PUT /api/blogs/:id
app.put('/api/blogs/:id', async (req, res, next) => {
  try {
    const updated = await blogs.findByIdAndUpdate(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/blogs/:id
app.delete('/api/blogs/:id', async (req, res, next) => {
  try {
    const deleted = await blogs.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully', _id: req.params.id });
  } catch (err) {
    next(err);
  }
});

// --- Upload Endpoint ---

// POST /api/upload
app.post('/api/upload', (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Please attach an image file with key "image"' });
    }

    // Return path relative to server root e.g. /uploads/filename.ext
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
  });
});

// --- Contacts / Callback Inquiries Endpoints ---

// GET /api/contacts
app.get('/api/contacts', async (req, res, next) => {
  try {
    const list = await contacts.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
});

// POST /api/contacts
app.post('/api/contacts', async (req, res, next) => {
  try {
    const { fullName, mobileNumber, emailAddress, preferredTime, message, status } = req.body;
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ error: 'Full name is required' });
    }
    if (!mobileNumber || !mobileNumber.trim()) {
      return res.status(400).json({ error: 'Mobile number is required' });
    }

    const created = await contacts.create({
      fullName: fullName.trim(),
      mobileNumber: mobileNumber.trim(),
      emailAddress: emailAddress ? emailAddress.trim() : '',
      preferredTime: preferredTime ? preferredTime.trim() : '',
      message: message ? message.trim() : '',
      status: status || 'new'
    });

    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/contacts/:id
app.delete('/api/contacts/:id', async (req, res, next) => {
  try {
    const deleted = await contacts.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Contact inquiry not found' });
    }
    res.json({ message: 'Contact inquiry deleted successfully', _id: req.params.id });
  } catch (err) {
    next(err);
  }
});

// --- Hero / Dynamic Section Content Endpoints ---

// GET /api/hero/:section
app.get('/api/hero/:section', async (req, res, next) => {
  try {
    const sectionData = await hero.get(req.params.section);
    if (!sectionData) {
      return res.json({
        section: req.params.section,
        heading: '',
        subheading: '',
        imageUrl: ''
      });
    }
    res.json(sectionData);
  } catch (err) {
    next(err);
  }
});

// PUT /api/hero/:section
app.put('/api/hero/:section', async (req, res, next) => {
  try {
    const { heading, subheading, imageUrl } = req.body;
    const updated = await hero.upsert(req.params.section, {
      heading,
      subheading,
      imageUrl
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// --- User Auth Endpoints ---

// POST /api/users/login
app.post('/api/users/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await users.findByEmail(email.trim());
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      },
      token: 'mock-session-token'
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/users/register
app.post('/api/users/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }
    if (!password || password.length < 4) {
      return res.status(400).json({ error: 'Password must be at least 4 characters' });
    }

    const existing = await users.findByEmail(email.trim());
    if (existing) {
      return res.status(400).json({ error: 'An account already exists with this email' });
    }

    const newUser = await users.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password
    });

    res.status(201).json({
      message: 'Registration successful',
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      },
      token: 'mock-session-token'
    });
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start Server
async function start() {
  await initDB();
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DB Fintrix API Server running on http://localhost:${PORT}`);
  });
}

start();
