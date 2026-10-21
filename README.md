# StayNest – PG, Hostel & Flat Rental Platform

A full-stack web application that helps students and individuals find accommodation options such as PGs, hostels, and rental flats. StayNest allows users to explore property listings, view property details, upload property images, and share reviews.

## 🚀 Features

- **User Authentication:** Secure user registration and login using Passport.js.
- **Property Listings:** Create, view, edit, and delete accommodation listings.
- **Property Search:** Search for available accommodation listings.
- **Reviews & Ratings:** Users can share reviews and ratings for properties.
- **Image Uploads:** Upload and manage property images using Cloudinary.
- **Authorization:** Restrict listing modifications to authorized owners.
- **MVC Architecture:** Organized codebase with separate models, views, and controllers.
- **Database Integration:** Store user information, property listings, and reviews in MongoDB.

## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript
- EJS (Embedded JavaScript Templates)

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- MongoDB Atlas

**Authentication & Media**
- Passport.js
- Cloudinary
- Multer

**Development Tools**
- Git
- GitHub
- Visual Studio Code

## 🏗️ Project Architecture

The application follows the Model-View-Controller (MVC) architecture to keep the code organized and maintainable.

```text
StayNest/
├── controller/     # Application logic
├── models/         # Database models
├── routes/         # Application routes
├── views/          # EJS templates
├── public/         # Static assets
├── utils/          # Utility functions
├── middleware.js   # Custom middleware
├── CloudConfig.js  # Cloudinary configuration
├── schema.js       # Validation schemas
├── app.js          # Application entry point
├── package.json    # Dependencies and scripts
└── .gitignore      # Ignored files
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/StayNest.git
```

### 2. Navigate to the Project Directory

```bash
cd StayNest
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the credentials required by your application.

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Use the exact environment variable names expected by your source code. Never commit your actual credentials to GitHub.

### 5. Run the Application

```bash
node app.js
```

Open the local URL configured by your application in your browser, for example:

```text
http://localhost:8080
```

## 🔐 Security

- Keep database credentials, session secrets, and API keys in environment variables.
- Use `.gitignore` to exclude `.env` and `node_modules`.
- Apply authentication and authorization checks to protected operations.

## 🎯 Project Objective

StayNest aims to simplify the accommodation search process for students and individuals by bringing property listings, property details, and user reviews together in one platform.

## 👩‍💻 Author

**Versha Nishad**

- GitHub: [GitHub Profile](https://github.com/versha890)
- LinkedIn: Add your LinkedIn profile URL here

---

*StayNest — Find a place that feels like home.*
