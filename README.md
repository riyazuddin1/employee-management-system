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


# 👨‍💼 Employee CRUD Operations

EmployeeHub provides complete CRUD functionality for managing employee records.

---

## ➕ Create Employee

### API Endpoint

```text
POST /addEmployee
````

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

The Employee ID is read-only while editing so that the primary key cannot accidentally be changed.

---

## 🗑️ Delete Employee

### API Endpoint

```text
DELETE /deleteEmp/{id}
```

Deletes the selected employee from the database.

---

# 🛡️ Validation

EmployeeHub uses **Jakarta Validation** on the backend to validate employee information before processing requests.

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

---

## Database Name

```text
excelr_employee_management
```

---

## Create Database

Create the database using:

```sql
CREATE DATABASE excelr_employee_management;
```

Hibernate/JPA is responsible for creating and updating the required database tables.

---

## Database Tables

The application currently uses:

```text
employees
users
```

---

# ⚙️ Local Database Configuration

Create the following file locally:

```text
backend/employee-management-system/src/main/resources/application.properties
```

---

## Example Configuration

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/excelr_employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8085
```

---

## ⚠️ Database Security

The actual `application.properties` file is intentionally excluded from GitHub because it contains local database credentials.

The repository contains:

```text
application-example.properties
```

which can be used as a configuration reference.

---

# 🚀 Running the Application Locally

Follow the steps below to run EmployeeHub on a local development environment.

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

## 2️⃣ Configure MySQL

Make sure MySQL is installed and running.

Create the EmployeeHub database:

```sql
CREATE DATABASE excelr_employee_management;
```

Then configure:

```text
backend/employee-management-system/src/main/resources/application.properties
```

with your local MySQL username and password.

---

## 3️⃣ Start the Spring Boot Backend

Open a terminal and navigate to:

```bash
cd backend/employee-management-system
```

### Windows

```bash
.\mvnw.cmd spring-boot:run
```

### macOS / Linux

```bash
./mvnw spring-boot:run
```

### Backend URL

```text
https://employee-management-backend-o65d.onrender.com
```

---

## 4️⃣ Start the React Frontend

Open another terminal from the project root.

Install the frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Frontend URL

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🧪 Tested Functionality

The following application workflows have been successfully tested.

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

---

## 👥 Employee Management Testing

* Dashboard access
* Add employee
* Duplicate employee ID protection
* Employee listing
* View employee
* Update employee
* Delete employee

---

## 👤 Profile Testing

* Profile access
* Protected profile route
* Logged-in user information display

---

## 🔗 Integration Testing

* Frontend/backend communication
* REST API communication
* MySQL database persistence

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
* Success and error notifications

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
* Validation
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

The current authentication implementation is suitable for an internship/final project demonstration.

For a production environment, the authentication system can be further strengthened with the following technologies and practices.

---

## 🔐 Recommended Production Improvements

* Spring Security
* Password hashing
* JWT authentication
* Role-based authorization
* Environment variables
* Secret management
* HTTPS
* Secure production database configuration
* Production CORS configuration

---

# 📸 Screenshots

Screenshots can be added to document the application's major screens.

---

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

# 🌐 Deployment

The application is currently configured and tested in a local development environment.

---

## Current Deployment Status

| Component           | Status                          |
| ------------------- | ------------------------------- |
| React Frontend      | To be deployed                  |
| Spring Boot Backend | To be deployed                  |
| MySQL Database      | To be configured for production |
| Live Demo           | Coming soon                     |

Live URLs will be added to this section after deployment.

---

# 🔮 Future Enhancements

The following improvements can be added in future versions of EmployeeHub.

---

## 🔐 Authentication & Security

* Spring Security
* JWT authentication
* Password encryption
* Role-based access control

---

## 👥 Employee Management

* Employee search
* Department filtering
* Pagination
* Employee profile pictures

---

## 📊 Dashboard

* Dashboard analytics
* Employee statistics
* Department statistics
* Visual reports

---

## 📤 Data Management

* Export employee records
* Import employee records
* Automated reports

---

## ☁️ Deployment & DevOps

* Cloud deployment
* Automated testing
* CI/CD pipeline
* Production monitoring

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

EmployeeHub demonstrates practical full-stack development using the following technologies and concepts.

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

---

## Backend Development

* Java
* Spring Boot
* Spring Web
* REST APIs
* Spring Data JPA
* Hibernate
* Jakarta Validation
* Maven

---

## Database

* MySQL
* Relational data management
* JPA/Hibernate persistence

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

---

## Version Control

* Git
* GitHub
* Git-based project versioning

---

# 📄 License

This project was developed as an internship/final project for educational, demonstration, and portfolio purposes.

