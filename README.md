# Employee-Review-System
Node Js Project for reviewing the employees performance
# Employee Review System - Admin & Employee Access with Performance Pages

This is a web application for managing employee reviews, providing both admin and employee access. The application allows administrators to view, add, update, and delete employees, as well as manage employee performance reviews. Employees can access their own performance reviews and provide feedback.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

- Admin Access:
  - View all employees in the system
  - Add new employees to the system
  - Update employee information (employee ID, name, email)
  - Delete employees from the system
  - Manage employee performance reviews (add, update, delete)
  - Assign reviewers to performance reviews

- Employee Access:
  - View own performance reviews
  - Provide feedback for performance reviews

## Requirements

To run this application, you need the following software installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/g-vidhulakripali/Employee-Review-System.git
```

2. Change into the project directory.

```bash
cd employee-review-system
```

3. Install the required dependencies.

```bash
npm install
```

Replace `mongodb+srv://gvidhulakripali:Oey4aY6N1BI9N57K@cluster0.squt5dz.mongodb.net/emp-review-db` with your MongoDB connection string and `EmployeePerformance` with a random string used for session encryption.

## Usage

1. Start the MongoDB server.

2. Run the application.

```bash
npm start
```

3. Open your web browser and visit [http://localhost:8000](http://localhost:8000).

## Folder Structure

```
employee-review-system/
  |- controllers/
  |  |- admin_controller.js
  |  |- admin_perfomance_controller.js
  |  |- employee_controller.js
  |  |- home_controller.js
  |  |- users_controller.js
  |- models/
  |  |- userSchema.js
  |  |- performanceSchema.js
  |- public/
  |  |- css/
  |  |  |
  |  |- js/
  |  |  |
  |- routes/
  |  |- admin.js
  |  |- employee.js
  |  |- users.js
  |  |- index.js
  |- views/
  |  |- admin_home.ejs
  |  |- admin_performance_review.ejs
  |  |- add_employee.ejs
  |  |- employee_home.ejs
  |  |- employee_performance_review.ejs
  |  |- user_sign_in.ejs
  |  |- user_sign_up.ejs
  |- .gitignore
  |- index.js
  |- package.json
  |- package-lock.json
  |- server.js
  |- README.md
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- Bootstrap

## Admin Access

Login with email: admin@a.com and password: aaa

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open a GitHub issue or submit a pull request.

## Author

G Vidhula Kripali

[Your Name](https://github.com/your-username)

---
Feel free to customize the information in the README to match your project. Make sure to replace `your-username` with your GitHub username and provide proper links and descriptions as needed. Also, update the folder structure and technologies used to reflect the actual setup of your project.
