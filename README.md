Task Monitoring System

Overview

The Task Monitoring System is a web-based application designed to help individuals and teams track tasks efficiently. It provides users with a simple and intuitive interface for task management, deadline tracking, and collaboration.

Features

User authentication (Sign up, Log in, Log out)

Task creation, assignment, and tracking

Categorization and priority levels

Deadline notifications and reminders

Dashboard with task progress overview

Responsive design for mobile and desktop access

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js and npm (for backend and package management)

MongoDB (for database management)

Git (optional, for version control)

Steps to Run the System

Clone the Repository:

git clone https://github.com/your-repository/task-monitoring-system.git
cd task-monitoring-system

Install Dependencies:

npm install

Start the Backend Server:

npm start

Start the Frontend (If Separate):

cd frontend
npm install
npm start

The system should now be accessible at http://localhost:3000/ (or the configured port).

Folder Structure

Task-Monitoring-System/
│-- backend/                # Backend API and logic
│-- frontend/               # Frontend UI components
│-- database/               # Database models and configurations
│-- public/                 # Public assets (images, styles, etc.)
│-- README.md               # Project documentation
│-- package.json            # Dependencies and scripts

Usage

Sign up or log in to access the dashboard.

Create new tasks, assign them to team members, and set due dates.

View tasks on the dashboard with real-time updates.

Receive notifications for approaching deadlines.

Mark tasks as completed and track progress over time.

Future Enhancements

Implement user roles and permissions.

Add real-time collaboration features.

Integrate calendar and scheduling functions.

Deploy to cloud hosting for public access.

Author

Camden Thomson
