# EmployeeHub

## Employee Management Platform

EmployeeHub is a full-stack Employee Management application built using **React, Spring Boot, and MySQL**.

It provides a professional web interface for managing employee records with authentication, CRUD operations, validation, profile management, protected routes, and responsive UI styling.

---

## 📌 Project Overview

EmployeeHub is designed to provide a centralized platform for managing employee information.

The application allows authenticated users to:

- Register an account
- Log in securely
- View the employee dashboard
- Add employees
- View employee details
- Update employee information
- Delete employees
- Manage their profile
- Log out of the application

The system also includes backend validation and duplicate employee ID protection to prevent an existing employee record from being accidentally overwritten.

---

## ✨ Features

### 🏠 Home / Landing Page

- Professional EmployeeHub landing page
- Application overview
- Feature highlights
- Get Started button
- Sign In button
- Product-style dashboard preview
- Responsive layout

### 🔐 Authentication

- User registration
- Username uniqueness validation
- User login
- Invalid login handling
- Login success notifications
- Registration success notifications
- Persistent authentication state using browser local storage
- Protected routes
- Logout functionality

### 👥 Employee Management

- Add employee
- View all employees
- View individual employee details
- Update employee information
- Delete employee
- Duplicate employee ID protection
- Employee age validation
- Required field validation

### 👤 Profile

- Protected profile page
- Displays logged-in user information
- Accessible only after authentication

### 🎨 User Interface

- Professional EmployeeHub branding
- Responsive navigation bar
- Dashboard interface
- Modern forms
- Interactive buttons
- Toast notifications
- Responsive layouts
- Hover effects
- Card-based UI
- Form validation feedback
- Mobile-friendly styling

---

# 🛠️ Technology Stack

## Frontend

- React
- Vite
- JavaScript
- React Router DOM
- Axios
- React Toastify
- CSS3

## Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Jakarta Validation
- Maven

## Database

- MySQL
- MySQL Connector/J

## Development Tools

- Visual Studio Code
- IntelliJ IDEA / Eclipse
- MySQL Workbench
- Git
- GitHub

---

# 🏗️ Application Architecture

```text
                    EmployeeHub
                         │
          ┌──────────────┴──────────────┐
          │                             │
      Frontend                      Backend
       React                       Spring Boot
          │                             │
       Axios                         REST API
          │                             │
          └──────────────┬──────────────┘
                         │
                       MySQL
                      Database


📂 Project Structure

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
│       │   │   │       └── service/
│       │   │   │           ├── EmployeeService.java
│       │   │   │           └── UserService.java
│       │   │   │
│       │   │   └── resources/
│       │   │       └── application-example.properties
│       │   │
│       │   └── test/
│       │
│       ├── pom.xml
│       └── mvnw.cmd
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
├── index.html
├── package.json
├── .gitignore
└── README.md


🔄 Application Flow

                    Home Page
                       │
             ┌─────────┴─────────┐
             │                   │
          Register              Login
             │                   │
             └─────────┬─────────┘
                       │
                 Authentication
                       │
                       ▼
                  Dashboard
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
        Add          View/Edit     Profile
      Employee       Employee
          │            │
          └────────────┼────────────┘
                       │
                       ▼
                 MySQL Database


🧭 Navigation

Before Login
EmployeeHub
│
├── Home
├── Login
└── Register

After Login
EmployeeHub
│
├── Dashboard
├── Add Employee
├── Profile
└── Logout

Protected pages are not accessible without authentication.


🔐 Authentication Flow
User opens the EmployeeHub Home page.
User can navigate to Login or Register.
New users can create an account.
The backend checks whether the username already exists.
Registered users can log in.
Successful login updates the authentication state.
Protected routes become accessible.
The user can access employee management features.
Logout clears the authentication state.
The user is redirected to the Login page.
👨‍💼 Employee CRUD Operations
Create Employee

Endpoint:

POST /addEmployee

Creates a new employee record.

Employee information:

Employee ID
Employee Name
Employee Age
Department
Get All Employees

Endpoint:

GET /getEmployees

Returns all employee records from the database.

Get Employee By ID

Endpoint:

GET /getEmpById/{id}

Returns the details of a specific employee.

Update Employee

Endpoint:

PUT /updateEmployee

Updates an existing employee record.

The Employee ID is read-only while editing so the primary key cannot accidentally be changed.

Delete Employee

Endpoint:

DELETE /deleteEmp/{id}

Deletes the selected employee.

🛡️ Validation

The backend uses Jakarta Validation to validate employee information.

Employee Name

Employee name cannot be blank.

Employee Age

Employee age:

Minimum: 18
Department

Department cannot be blank.

Employee ID

Employee IDs must be unique.

If a user tries to add an employee using an existing ID, the application prevents the existing employee from being overwritten.

Example:

Employee ID 101 already exists.
Please use a different ID.
🗄️ Database

The application uses MySQL.

Database name:

excelr_employee_management

Create the database using:

CREATE DATABASE excelr_employee_management;

The application creates/updates the required tables through JPA/Hibernate.

Current tables include:

employees
users
⚙️ Local Database Configuration

Create the following file locally:

backend/employee-management-system/src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3306/excelr_employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8085
⚠️ Security

The actual application.properties file is intentionally excluded from GitHub because it contains local database credentials.

The repository contains:

application-example.properties

which can be used as a configuration reference.

🚀 Running the Application Locally
Step 1 — Clone Repository
git clone https://github.com/riyazuddin1/employee-management-system.git

Enter the project:

cd employee-management-system
Step 2 — Configure MySQL

Make sure MySQL is installed and running.

Create the database:

CREATE DATABASE excelr_employee_management;

Then configure:

backend/employee-management-system/src/main/resources/application.properties

with your local MySQL username and password.

▶️ Start Spring Boot Backend

Open a terminal and run:

cd backend/employee-management-system
Windows
.\mvnw.cmd spring-boot:run
macOS / Linux
./mvnw spring-boot:run

Backend URL:

http://localhost:8085
▶️ Start React Frontend

Open another terminal from the project root:

npm install

Then:

npm run dev

The frontend will normally be available at:

http://localhost:5173
🧪 Tested Functionality

The following workflows have been tested successfully:

Home page
User registration
Duplicate username handling
User login
Invalid login handling
Login success notification
Registration success notification
Protected routes
Dashboard access
Add employee
Duplicate employee ID protection
Employee listing
View employee
Update employee
Delete employee
Profile access
Logout
Redirect after logout
Frontend/backend communication
MySQL database persistence
🎨 User Interface

EmployeeHub includes:

Responsive navigation
Landing page
Authentication pages
Employee dashboard
Employee forms
Employee details page
Profile page
Toast notifications
Responsive layouts
Interactive controls
Professional card-based UI
Responsive mobile styling
🔒 Security Considerations

This project currently implements application-level authentication suitable for an internship/final project demonstration.

For a production deployment, the authentication system can be further enhanced with:

Spring Security
Password hashing
JWT authentication
Role-based authorization
Environment variables
Secret management
HTTPS
Secure production database configuration
CORS configuration for production domains
📸 Screenshots

Screenshots can be added to this section after the final deployment.

Recommended screenshots:

Home Page
Login
Registration
Dashboard
Add Employee
Employee Details
Update Employee
Profile
🌐 Deployment

The application is currently configured and tested locally.

Production deployment is planned for:

Frontend: To be deployed
Backend: To be deployed
Database: To be configured for production

Live URLs will be added here after deployment.

🔮 Future Enhancements

Potential improvements include:

Spring Security
JWT authentication
Password encryption
Role-based access control
Employee search
Department filtering
Pagination
Employee profile pictures
Dashboard analytics
Export employee records
Email notifications
Cloud deployment
Automated unit and integration testing
CI/CD pipeline
👨‍💻 Author
Mohammad Riyazuddin

B.Tech — Computer Science Engineering (AI & ML)

GitHub

https://github.com/riyazuddin1

LinkedIn

https://www.linkedin.com/in/mohammad-riyazuddin05

📌 Project Highlights

EmployeeHub demonstrates practical full-stack development using:

React frontend development
Vite development environment
Spring Boot REST API development
Java backend development
Spring Data JPA
Hibernate ORM
MySQL database integration
CRUD operations
Authentication
Protected routes
Form validation
Axios API integration
Toast notifications
Responsive UI design
Git and GitHub version control

📄 License
This project was developed as an internship/final project for educational, demonstration, and portfolio purposes.
```
