const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, 'data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function generateId() {
  return crypto.randomBytes(12).toString('hex');
}

function readJSON(filename, defaultValue = []) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    if (!fs.existsSync(filePath)) {
      writeJSON(filename, defaultValue);
      return defaultValue;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filename}:`, err.message);
    return defaultValue;
  }
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  const tempPath = `${filePath}.tmp.${Date.now()}`;
  try {
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    console.error(`Error writing ${filename}:`, err.message);
    // fallback direct write
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}

// Embedded File Datastore
const fileStore = {
  blogs: {
    find: async (query = {}) => {
      let blogs = readJSON('blogs.json', []);
      if (query.category && query.category !== 'All') {
        const cat = query.category.toLowerCase().trim();
        blogs = blogs.filter(b => b.category && b.category.toLowerCase().trim() === cat);
      }
      return blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    findById: async (id) => {
      const blogs = readJSON('blogs.json', []);
      return blogs.find(b => b._id === id || b.id === id) || null;
    },
    create: async (data) => {
      const blogs = readJSON('blogs.json', []);
      const newBlog = {
        _id: generateId(),
        title: data.title || '',
        content: data.content || '',
        category: data.category || 'Market Updates',
        imageUrl: data.imageUrl || '',
        author: data.author || 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      blogs.unshift(newBlog);
      writeJSON('blogs.json', blogs);
      return newBlog;
    },
    findByIdAndUpdate: async (id, updateData) => {
      const blogs = readJSON('blogs.json', []);
      const index = blogs.findIndex(b => b._id === id || b.id === id);
      if (index === -1) return null;
      const existing = blogs[index];
      const updated = {
        ...existing,
        ...updateData,
        _id: existing._id,
        updatedAt: new Date().toISOString()
      };
      blogs[index] = updated;
      writeJSON('blogs.json', blogs);
      return updated;
    },
    findByIdAndDelete: async (id) => {
      const blogs = readJSON('blogs.json', []);
      const index = blogs.findIndex(b => b._id === id || b.id === id);
      if (index === -1) return null;
      const [deleted] = blogs.splice(index, 1);
      writeJSON('blogs.json', blogs);
      return deleted;
    }
  },

  contacts: {
    find: async () => {
      const contacts = readJSON('contacts.json', []);
      return contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    findById: async (id) => {
      const contacts = readJSON('contacts.json', []);
      return contacts.find(c => c._id === id || c.id === id) || null;
    },
    create: async (data) => {
      const contacts = readJSON('contacts.json', []);
      const newContact = {
        _id: generateId(),
        fullName: data.fullName || '',
        mobileNumber: data.mobileNumber || '',
        emailAddress: data.emailAddress || '',
        preferredTime: data.preferredTime || '',
        message: data.message || '',
        status: data.status || 'new',
        createdAt: new Date().toISOString()
      };
      contacts.unshift(newContact);
      writeJSON('contacts.json', contacts);
      return newContact;
    },
    findByIdAndDelete: async (id) => {
      const contacts = readJSON('contacts.json', []);
      const index = contacts.findIndex(c => c._id === id || c.id === id);
      if (index === -1) return null;
      const [deleted] = contacts.splice(index, 1);
      writeJSON('contacts.json', contacts);
      return deleted;
    }
  },

  hero: {
    get: async (section) => {
      const heroMap = readJSON('hero.json', {});
      return heroMap[section] || null;
    },
    upsert: async (section, data) => {
      const heroMap = readJSON('hero.json', {});
      const existing = heroMap[section] || {};
      const updated = {
        section,
        heading: data.heading !== undefined ? data.heading : existing.heading || '',
        subheading: data.subheading !== undefined ? data.subheading : existing.subheading || '',
        imageUrl: data.imageUrl !== undefined ? data.imageUrl : existing.imageUrl || '',
        updatedAt: new Date().toISOString()
      };
      heroMap[section] = updated;
      writeJSON('hero.json', heroMap);
      return updated;
    }
  },

  users: {
    findByEmail: async (email) => {
      const users = readJSON('users.json', []);
      return users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase()) || null;
    },
    create: async (data) => {
      const users = readJSON('users.json', []);
      const newUser = {
        _id: generateId(),
        name: data.name || '',
        email: data.email || '',
        password: data.password || '',
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      writeJSON('users.json', users);
      return newUser;
    }
  }
};

let activeStore = fileStore;

// Optional Mongoose Initialization
async function initDB() {
  if (process.env.MONGODB_URI) {
    try {
      const mongoose = require('mongoose');
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 3000
      });
      console.log('Connected to MongoDB via MONGODB_URI.');
      
      const blogSchema = new mongoose.Schema({
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: String, default: 'Market Updates' },
        imageUrl: { type: String, default: '' },
        author: { type: String, default: 'Admin' }
      }, { timestamps: true });

      const contactSchema = new mongoose.Schema({
        fullName: { type: String, required: true },
        mobileNumber: { type: String, required: true },
        emailAddress: { type: String, default: '' },
        preferredTime: { type: String, default: '' },
        message: { type: String, default: '' },
        status: { type: String, enum: ['new', 'in-progress', 'resolved'], default: 'new' }
      }, { timestamps: true });

      const heroSchema = new mongoose.Schema({
        section: { type: String, required: true, unique: true },
        heading: { type: String, default: '' },
        subheading: { type: String, default: '' },
        imageUrl: { type: String, default: '' }
      }, { timestamps: true });

      const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
      }, { timestamps: true });

      const BlogModel = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
      const ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
      const HeroModel = mongoose.models.Hero || mongoose.model('Hero', heroSchema);
      const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

      activeStore = {
        blogs: {
          find: async (query = {}) => {
            const filter = {};
            if (query.category && query.category !== 'All') {
              filter.category = new RegExp(`^${query.category.trim()}$`, 'i');
            }
            return await BlogModel.find(filter).sort({ createdAt: -1 }).lean();
          },
          findById: async (id) => {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await BlogModel.findById(id).lean();
          },
          create: async (data) => {
            const doc = await BlogModel.create(data);
            return doc.toObject ? doc.toObject() : doc;
          },
          findByIdAndUpdate: async (id, data) => {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await BlogModel.findByIdAndUpdate(id, data, { new: true }).lean();
          },
          findByIdAndDelete: async (id) => {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await BlogModel.findByIdAndDelete(id).lean();
          }
        },
        contacts: {
          find: async () => await ContactModel.find().sort({ createdAt: -1 }).lean(),
          findById: async (id) => {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await ContactModel.findById(id).lean();
          },
          create: async (data) => {
            const doc = await ContactModel.create(data);
            return doc.toObject ? doc.toObject() : doc;
          },
          findByIdAndDelete: async (id) => {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await ContactModel.findByIdAndDelete(id).lean();
          }
        },
        hero: {
          get: async (section) => await HeroModel.findOne({ section }).lean(),
          upsert: async (section, data) => {
            return await HeroModel.findOneAndUpdate(
              { section },
              { $set: { ...data, section } },
              { upsert: true, new: true }
            ).lean();
          }
        },
        users: {
          findByEmail: async (email) => await UserModel.findOne({ email: new RegExp(`^${email}$`, 'i') }).lean(),
          create: async (data) => {
            const doc = await UserModel.create(data);
            return doc.toObject ? doc.toObject() : doc;
          }
        }
      };

      // Auto-seed Atlas database if collections are currently empty
      try {
        const blogCount = await BlogModel.countDocuments();
        if (blogCount === 0) {
          const initialBlogs = readJSON('blogs.json', []);
          if (initialBlogs.length > 0) {
            await BlogModel.insertMany(initialBlogs);
            console.log(`Seeded ${initialBlogs.length} initial blogs into MongoDB Atlas.`);
          }
        }

        const contactCount = await ContactModel.countDocuments();
        if (contactCount === 0) {
          const initialContacts = readJSON('contacts.json', []);
          if (initialContacts.length > 0) {
            await ContactModel.insertMany(initialContacts);
            console.log(`Seeded ${initialContacts.length} initial contacts into MongoDB Atlas.`);
          }
        }

        const heroCount = await HeroModel.countDocuments();
        if (heroCount === 0) {
          const heroMap = readJSON('hero.json', {});
          const heroItems = Object.values(heroMap);
          if (heroItems.length > 0) {
            await HeroModel.insertMany(heroItems);
            console.log(`Seeded ${heroItems.length} initial hero sections into MongoDB Atlas.`);
          }
        }

        const userCount = await UserModel.countDocuments();
        if (userCount === 0) {
          const initialUsers = readJSON('users.json', []);
          if (initialUsers.length > 0) {
            await UserModel.insertMany(initialUsers);
            console.log(`Seeded ${initialUsers.length} initial users into MongoDB Atlas.`);
          }
        }
      } catch (seedErr) {
        console.warn('Auto-seed warning:', seedErr.message);
      }

      return;
    } catch (err) {
      console.warn(`MongoDB connection failed (${err.message}). Falling back to embedded datastore.`);
    }
  }

  console.log(`Using embedded JSON datastore at ${DATA_DIR}`);
}

module.exports = {
  initDB,
  get blogs() { return activeStore.blogs; },
  get contacts() { return activeStore.contacts; },
  get hero() { return activeStore.hero; },
  get users() { return activeStore.users; }
};
