# EmployeeHub

## Employee Management Platform

> 🚀 **Live Production Application:**  
> **https://employee-management-system-5zlefxk82.vercel.app**

EmployeeHub is a full-stack Employee Management Platform built with **React, Vite, Spring Boot, Java, Spring Data JPA, Hibernate, and MySQL**.

The application provides a professional web interface for user authentication and complete employee record management through CRUD operations. It includes protected routes, validation, profile management, responsive UI, REST API integration, CORS configuration, cloud deployment, and persistent MySQL database storage.

---

## 🌐 Live Application

### Production Frontend

**EmployeeHub:**  
https://employee-management-system-5zlefxk82.vercel.app

### Production Backend

**Spring Boot API:**  
https://employee-management-backend-o65d.onrender.com

### Source Code

**GitHub Repository:**  
https://github.com/riyazuddin1/employee-management-system

---

# 📌 Project Overview

EmployeeHub is designed to provide a centralized platform for managing employee information.

The application supports:

- User registration
- User login
- Authentication state management
- Protected routes
- Employee dashboard
- Add employee
- View all employees
- View individual employee details
- Update employee information
- Delete employees
- User profile management
- Logout functionality
- Form validation
- Duplicate employee ID protection
- Responsive user interface
- REST API communication
- Cloud deployment

The system uses a **React frontend**, **Spring Boot REST backend**, and **MySQL database** connected through JPA/Hibernate.

---

# ✨ Features

## 🏠 Home / Landing Page

- Professional EmployeeHub branding
- Application introduction
- Feature overview
- Get Started action
- Sign In action
- Product-style dashboard preview
- Responsive design
- Publicly accessible landing page

---

## 🔐 Authentication

EmployeeHub provides a complete authentication flow.

### Features

- User registration
- Username uniqueness validation
- User login
- Invalid login handling
- Login success notifications
- Registration success notifications
- Authentication state management
- Browser local-storage based authentication state
- Protected routes
- Logout functionality
- Automatic navigation after login
- Automatic navigation after logout

### Navigation Before Login

```text
EmployeeHub
│
├── Home
├── Login
└── Register
````

### Navigation After Login

```text
EmployeeHub
│
├── Dashboard
├── Add Employee
├── Profile
└── Logout
```

---

# 👥 Employee Management

EmployeeHub provides complete employee CRUD functionality.

### Create

* Add new employee
* Employee ID validation
* Employee name validation
* Employee age validation
* Department validation
* Duplicate employee ID protection

### Read

* View all employees
* View individual employee details
* Display employee information in the dashboard

### Update

* Update existing employee information
* Employee ID remains protected while editing
* Form validation before submission

### Delete

* Delete an employee by ID
* Refresh employee information after deletion
* Database record removal

---

# 👤 Profile Management

* Protected profile page
* Displays logged-in user information
* Accessible only after authentication
* Consistent EmployeeHub UI

---

# 🎨 User Interface

The application provides a clean and responsive interface.

### UI Features

* EmployeeHub branding
* Responsive navigation bar
* Modern dashboard
* Card-based UI
* Modern forms
* Interactive buttons
* Toast notifications
* Validation feedback
* Hover effects
* Responsive layouts
* Mobile-friendly styling

---

# 🛠️ Technology Stack

## Frontend

* React
* Vite
* JavaScript
* React Router DOM
* Axios
* React Toastify
* CSS3

## Backend

* Java 21
* Spring Boot
* Spring Web / MVC
* Spring Data JPA
* Hibernate
* Jakarta Validation
* Maven
* Apache Tomcat

## Database

* MySQL
* MySQL Connector/J
* JPA/Hibernate persistence

## Deployment

* Vercel — React frontend
* Render — Spring Boot backend
* Aiven — Cloud MySQL database
* Docker — Backend containerization
* GitHub — Source code and version control

## Development Tools

* Visual Studio Code
* Git
* GitHub
* MySQL / MySQL Workbench

---

# 🏗️ Application Architecture

```text
                         EmployeeHub
                              │
              ┌───────────────┴───────────────┐
              │                               │
          Frontend                         Backend
          React + Vite                  Spring Boot
              │                               │
           Vercel                         Render
              │                               │
            Axios                         REST API
              │                               │
              └───────────────┬───────────────┘
                              │
                         Aiven MySQL
                              │
                         Database
```

---

# 🔄 Production Request Flow

```text
User Browser
     │
     ▼
Vercel React Frontend
     │
     │ HTTPS REST API requests
     ▼
Render Spring Boot Backend
     │
     │ JPA / Hibernate
     ▼
Aiven MySQL Database
```

---

# 📂 Project Structure

```text
complete_crud_spring_react_mysql/
│
├── backend/
│   └── employee-management-system/
│       │
│       ├── src/
│       │   │
│       │   ├── main/
│       │   │   │
│       │   │   ├── java/
│       │   │   │   └── employee_management_system/
│       │   │   │       │
│       │   │   │       ├── config/
│       │   │   │       │   └── CorsConfig.java
│       │   │   │       │
│       │   │   │       ├── controller/
│       │   │   │       │   ├── EmployeeController.java
│       │   │   │       │   └── UserController.java
│       │   │   │       │
│       │   │   │       ├── entity/
│       │   │   │       │   ├── Employee.java
│       │   │   │       │   └── User.java
│       │   │   │       │
│       │   │   │       ├── repository/
│       │   │   │       │   ├── EmployeeRepository.java
│       │   │   │       │   └── UserRepository.java
│       │   │   │       │
│       │   │   │       ├── service/
│       │   │   │       │   ├── EmployeeService.java
│       │   │   │       │   └── UserService.java
│       │   │   │       │
│       │   │   │       └── EmployeeManagementSystemApplication.java
│       │   │   │
│       │   │   └── resources/
│       │   │       ├── application.properties
│       │   │       └── application-example.properties
│       │   │
│       │   └── test/
│       │
│       ├── pom.xml
│       ├── mvnw
│       ├── mvnw.cmd
│       └── Dockerfile
│
├── src/
│   │
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Registration.jsx
│   │
│   ├── components/
│   │   ├── NavbarComp.jsx
│   │   └── navbar.css
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ViewEmployee.jsx
│   │   ├── AddEmployee.jsx
│   │   ├── UpdateEmployee.jsx
│   │   ├── ViewIndividualEmp.jsx
│   │   └── Profile.jsx
│   │
│   ├── service/
│   │   ├── AuthContext.jsx
│   │   ├── ProtectedRoutes.jsx
│   │   └── axiosInstance.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── .gitignore
└── README.md
```

> **Note:** Environment files containing credentials or deployment configuration are intentionally excluded from Git.

---

# 🔄 Application Flow

```text
                         Home Page
                             │
                 ┌───────────┴───────────┐
                 │                       │
              Register                  Login
                 │                       │
                 └───────────┬───────────┘
                             │
                      Authentication
                             │
                             ▼
                         Dashboard
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          Add Employee    View/Edit       Profile
              │            Employee          │
              │              │              │
              └──────────────┼──────────────┘
                             │
                             ▼
                       MySQL Database
```

---

# 🧭 Navigation

## Before Login

```text
EmployeeHub
│
├── Home
├── Login
└── Register
```

## After Login

```text
EmployeeHub
│
├── Dashboard
├── Add Employee
├── Profile
└── Logout
```

Protected pages are inaccessible without authentication.

---

# 🔐 Authentication Flow

1. User opens the EmployeeHub Home page.
2. User can navigate to Login or Register.
3. New users can create an account.
4. Backend checks whether the username already exists.
5. Registered users can log in.
6. Successful login updates the authentication state.
7. User is redirected to the Employee Dashboard.
8. Protected routes become accessible.
9. User can access employee management features.
10. Logout clears the authentication state.
11. User is redirected to the Login page.

---

# 👨‍💼 Employee CRUD Operations

EmployeeHub provides complete CRUD functionality through REST APIs.

---

## ➕ Create Employee

### API Endpoint

```text
POST /addEmployee
```

Creates a new employee record in the database.

### Employee Information

* Employee ID
* Employee Name
* Employee Age
* Department

---

## 📋 Get All Employees

### API Endpoint

```text
GET /getEmployees
```

Retrieves all employee records stored in the database.

---

## 🔎 Get Employee By ID

### API Endpoint

```text
GET /getEmpById/{id}
```

Retrieves the details of a specific employee using the employee ID.

---

## ✏️ Update Employee

### API Endpoint

```text
PUT /updateEmployee
```

Updates the information of an existing employee.

The Employee ID remains read-only while editing so that the primary key cannot accidentally be changed.

---

## 🗑️ Delete Employee

### API Endpoint

```text
DELETE /deleteEmp/{id}
```

Deletes the selected employee from the database.

---

# 🛡️ Validation

EmployeeHub uses backend validation to validate employee information before processing requests.

---

## 👤 Employee Name

Employee name cannot be blank.

---

## 🎂 Employee Age

Employee age must be at least:

```text
18 years
```

---

## 🏢 Department

Department cannot be blank.

---

## 🆔 Employee ID

Employee IDs must be unique.

If a user attempts to add an employee using an existing employee ID, the application prevents the existing employee record from being overwritten.

### Example

```text
Employee ID 101 already exists.

Please use a different ID.
```

---

# 🗄️ Database

EmployeeHub uses **MySQL** for persistent data storage.

The production application uses a cloud-hosted MySQL database.

---

## Database Tables

The application currently uses:

```text
employees
users
```

---

## Employee Table

The employee data includes:

```text
id
name
age
dept
```

The employee ID is used as the primary key and employee age is validated to be at least 18.

---

## User Table

The user data includes:

```text
id
first_name
last_name
username
password
```

---

# ⚙️ Environment Configuration

Sensitive configuration values should not be committed to GitHub.

The project uses environment-specific configuration for the deployed frontend and backend.

---

## Frontend Environment Variable

For local frontend development, create:

```text
.env
```

in the **frontend project root**, alongside `package.json`.

Example:

```env
VITE_API_URL=http://localhost:8085
```

For the deployed production frontend, configure the Vercel environment variable:

```text
VITE_API_URL=https://employee-management-backend-o65d.onrender.com
```

The Axios client reads the value through:

```javascript
import.meta.env.VITE_API_URL
```

---

## Backend Configuration

For local development, create:

```text
backend/employee-management-system/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/excelr_employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8085
```

For production deployment, database credentials and other sensitive values should be configured through the deployment platform's environment variables rather than committed to GitHub.

---

# 🔒 Configuration Security

The following files should not be committed when they contain sensitive credentials:

```text
.env
application.properties
```

The repository uses `.gitignore` to prevent sensitive local configuration from being accidentally committed.

Use environment variables for:

* Database credentials
* API configuration
* Production secrets
* Deployment-specific configuration

---

# 🐳 Docker Deployment

The Spring Boot backend is containerized using Docker for deployment on Render.

The backend contains:

```text
backend/employee-management-system/Dockerfile
```

The Docker build performs the following stages:

```text
Maven Build
     │
     ▼
Spring Boot JAR
     │
     ▼
Eclipse Temurin Java Runtime
     │
     ▼
Docker Container
     │
     ▼
Render
```

The backend listens on the port provided by the deployment environment.

---

# ☁️ Deployment Architecture

## Frontend — Vercel

The React/Vite frontend is deployed on Vercel.

### Production URL

```text
https://employee-management-system-5zlefxk82.vercel.app
```

---

## Backend — Render

The Spring Boot backend is deployed as a Docker-based web service on Render.

### Backend URL

```text
https://employee-management-backend-o65d.onrender.com
```

---

## Database — Aiven

The production backend connects to a cloud-hosted MySQL database through Aiven.

The database connection is configured using environment-specific credentials.

---

# 🔗 Production URLs

| Component   | Platform    | URL                                                                                                                    |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Frontend    | Vercel      | [https://employee-management-system-5zlefxk82.vercel.app](https://employee-management-system-5zlefxk82.vercel.app)     |
| Backend     | Render      | [https://employee-management-backend-o65d.onrender.com](https://employee-management-backend-o65d.onrender.com)         |
| Source Code | GitHub      | [https://github.com/riyazuddin1/employee-management-system](https://github.com/riyazuddin1/employee-management-system) |
| Database    | Aiven MySQL | Cloud hosted                                                                                                           |

---

# 🚀 Running the Application Locally

Follow the steps below to run EmployeeHub in a local development environment.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/riyazuddin1/employee-management-system.git
```

Enter the project directory:

```bash
cd employee-management-system
```

---

# 2️⃣ Configure MySQL

Make sure MySQL is installed and running.

Create the local database:

```sql
CREATE DATABASE excelr_employee_management;
```

Configure the backend:

```text
backend/employee-management-system/src/main/resources/application.properties
```

with your local MySQL username and password.

---

# 3️⃣ Start the Spring Boot Backend

Open a terminal and navigate to:

```bash
cd backend/employee-management-system
```

## Windows

```bash
.\mvnw.cmd spring-boot:run
```

## macOS / Linux

```bash
./mvnw spring-boot:run
```

The default local backend runs on:

```text
http://localhost:8085
```

---

# 4️⃣ Configure the React Frontend

From the frontend project root, create:

```text
.env
```

Example:

```env
VITE_API_URL=http://localhost:8085
```

Do not commit this file if it contains environment-specific configuration.

---

# 5️⃣ Install Frontend Dependencies

From the project root:

```bash
npm install
```

---

# 6️⃣ Start the React Frontend

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🔄 Frontend API Configuration

The application uses a centralized Axios instance.

```javascript
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
```

This allows the same frontend codebase to work with:

```text
Local Backend
http://localhost:8085
```

and:

```text
Production Backend
https://employee-management-backend-o65d.onrender.com
```

depending on the configured environment variable.

---

# 🌐 React Router and Vercel

EmployeeHub uses React Router for client-side navigation.

The project includes:

```text
vercel.json
```

to configure SPA rewrites.

Configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures routes such as:

```text
/login
/register
/viewEmp
/profile
```

continue to work correctly when directly opened or refreshed in the browser.

---

# 🧪 Tested Functionality

The following workflows have been successfully tested in the deployed application.

---

## 🔐 Authentication Testing

* User registration
* Duplicate username handling
* User login
* Invalid login handling
* Login success notification
* Registration success notification
* Protected routes
* Logout
* Redirect after logout
* Production authentication against the cloud database

---

## 👥 Employee Management Testing

* Dashboard access
* Add employee
* Duplicate employee ID protection
* Employee listing
* View employee
* Update employee
* Delete employee
* Production CRUD operations

---

## 👤 Profile Testing

* Profile access
* Protected profile route
* Logged-in user information display

---

## 🔗 Integration Testing

* Frontend/backend communication
* REST API communication
* CORS configuration
* MySQL database persistence
* Vercel-to-Render communication
* Render-to-Aiven database communication
* Production login
* Production CRUD

---

# 🎨 User Interface

EmployeeHub provides a responsive and professional user interface.

---

## 🏠 Landing Page

* EmployeeHub branding
* Application introduction
* Feature overview
* Get Started action
* Sign In action
* Product-style dashboard preview
* Responsive layout

---

## 🔐 Authentication Pages

The application provides dedicated pages for:

* Registration
* Login
* Authentication feedback
* Form validation
* Success notifications
* Error notifications

---

## 📊 Employee Dashboard

The dashboard provides:

* Employee listing
* Employee information
* View action
* Edit action
* Delete action
* Add Employee navigation

---

## 📝 Employee Forms

Employee forms provide:

* Structured input fields
* Required-field validation
* Age validation
* Duplicate ID protection
* User-friendly controls
* Success notifications
* Error notifications

---

## 👤 Profile Page

The Profile page provides:

* Logged-in user information
* Protected access
* Consistent EmployeeHub styling

---

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

# 🔒 Security Considerations

The current authentication implementation is suitable for an internship/final-project demonstration.

For a larger production system, authentication and authorization can be further strengthened.

Recommended improvements include:

* Spring Security
* Password hashing
* JWT-based authentication
* Role-based authorization
* Secure session management
* Environment variables
* Secret management
* HTTPS
* Secure production database configuration
* Strict production CORS configuration
* Input sanitization
* API rate limiting

---

# 📸 Screenshots

Screenshots can be added to document the application's major screens.

Recommended sections include:

## 🏠 Home Page

*Add Home page screenshot here.*

---

## 🔐 Login Page

*Add Login page screenshot here.*

---

## 📝 Registration Page

*Add Registration page screenshot here.*

---

## 📊 Employee Dashboard

*Add Dashboard screenshot here.*

---

## ➕ Add Employee

*Add Add Employee screenshot here.*

---

## 👁️ Employee Details

*Add Employee Details screenshot here.*

---

## ✏️ Update Employee

*Add Update Employee screenshot here.*

---

## 👤 Profile

*Add Profile screenshot here.*

---

# 🚀 Deployment Status

| Component           | Platform    | Status       |
| ------------------- | ----------- | ------------ |
| React Frontend      | Vercel      | ✅ Live       |
| Spring Boot Backend | Render      | ✅ Live       |
| MySQL Database      | Aiven       | ✅ Connected  |
| Docker Backend      | Render      | ✅ Deployed   |
| REST API            | Render      | ✅ Working    |
| CORS                | Spring Boot | ✅ Configured |
| React SPA Routing   | Vercel      | ✅ Configured |
| Authentication      | Production  | ✅ Tested     |
| Employee CRUD       | Production  | ✅ Tested     |
| Live Demo           | Vercel      | ✅ Available  |

---

# 🔮 Future Enhancements

The following improvements can be considered for future versions of EmployeeHub.

---

## 🔐 Authentication & Security

* Spring Security
* JWT authentication
* Password hashing
* Role-based access control
* Admin/user roles
* Forgot password functionality
* Email verification

---

## 👥 Employee Management

* Employee search
* Department filtering
* Pagination
* Advanced sorting
* Employee profile pictures
* Employee status management
* Bulk employee operations

---

## 📊 Dashboard

* Dashboard analytics
* Employee statistics
* Department statistics
* Charts and graphs
* Employee growth trends
* Visual reports

---

## 📤 Data Management

* Export employee records
* Import employee records
* CSV export
* Excel export
* Automated reports

---

## ☁️ Deployment & DevOps

* CI/CD pipeline
* Automated testing
* Production monitoring
* Application health monitoring
* Logging and observability
* Automated database backups

---

# 👨‍💻 Author

## Mohammad Riyazuddin

**B.Tech — Computer Science Engineering (AI & ML)**

---

## GitHub

[https://github.com/riyazuddin1](https://github.com/riyazuddin1)

---

## LinkedIn

[https://www.linkedin.com/in/mohammad-riyazuddin05](https://www.linkedin.com/in/mohammad-riyazuddin05)

---

# 📌 Project Highlights

EmployeeHub demonstrates practical full-stack development using modern web technologies and cloud deployment.

---

## Frontend Development

* React
* Vite
* JavaScript
* React Router DOM
* Axios
* React Toastify
* CSS3
* Responsive UI design
* Client-side routing
* Environment-based API configuration

---

## Backend Development

* Java 21
* Spring Boot
* Spring Web
* REST APIs
* Spring Data JPA
* Hibernate
* Jakarta Validation
* Maven
* Docker

---

## Database

* MySQL
* Relational data management
* JPA/Hibernate persistence
* Cloud database deployment

---

## Cloud & Deployment

* Vercel
* Render
* Aiven
* Docker
* GitHub
* Production environment configuration
* CORS configuration
* SPA routing configuration

---

## Application Features

* CRUD operations
* Authentication
* Protected routes
* Form validation
* Duplicate ID protection
* API integration
* Toast notifications
* Responsive design
* Profile management
* Production deployment

---

## Version Control

* Git
* GitHub
* Git-based project versioning
* Branch-based development
* Automated deployment through Git-connected platforms

---

# 📄 License

This project was developed as an internship/final project for educational, demonstration, learning, and portfolio purposes.

---

# ⭐ EmployeeHub

**A full-stack Employee Management Platform built with React + Spring Boot + MySQL and deployed using Vercel, Render, Docker, and Aiven.**

### 🚀 Live Demo

**[https://employee-management-system-5zlefxk82.vercel.app](https://employee-management-system-5zlefxk82.vercel.app)**

```
```
