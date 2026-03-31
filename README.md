 this is a **Full Stack** application (even though the frontend is server-side rendered with EJS).

It includes:
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Frontend**: EJS templates (Server-Side Rendering)
- **Architecture**: MVC
- Features: CRUD operations (View courses, Register, Drop courses)

---



Create a file named **`README.md`** in your project root and paste this:

```markdown
# Online Course Registration System

A full-stack web application for university course registration built with **Node.js, Express, EJS, and MongoDB**.

## Features

- Browse available courses
- Register for courses
- View registered courses
- Drop courses
- Responsive and modern UI
- Full MVC architecture
- RESTful API endpoints (ready for future frontend)

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Styling**: Bootstrap 5 + Font Awesome

## Project Structure

```
course-registration-system/
├── config/
│   └── db.js
├── models/
│   ├── Course.js
│   └── Registration.js
├── controllers/
│   └── courseController.js
├── routes/
│   └── courseRoutes.js
├── views/
│   ├── index.ejs
│   ├── register.ejs
│   └── myCourses.ejs
├── .env
├── seed.js
├── app.js
└── package.json
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd course-registration-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Seed sample courses**
   ```bash
   node seed.js
   ```

5. **Run the application**
   ```bash
   node app.js
   ```

6. Open browser and go to:
   ```
   http://localhost:3000
   ```

## Available Routes

- `GET /` → Homepage (All courses)
- `GET /register/:id` → Register form
- `POST /register/:id` → Submit registration
- `GET /my-courses` → My registered courses
- `POST /drop/:id` → Drop a course

## API Endpoints

- `GET /api/courses` → Get all courses (JSON)

## Future Enhancements

- User authentication & authorization
- React.js frontend
- Course management for admins
- Email notifications

---

Made with ❤️ using Node.js & MongoDB
```

---

### 2. `.gitignore` File

Create a file named **`.gitignore`** and paste this:

```gitignore
# Dependencies
node_modules/

# Environment variables
.env

# Logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory
coverage/

# Editor directories
.vscode/
.idea/

# OS generated files
.DS_Store
Thumbs.db
```

---



You can now commit with:

```bash
git add .
git commit -m "Initial commit: Online Course Registration System with MVC + EJS"
git push
```

