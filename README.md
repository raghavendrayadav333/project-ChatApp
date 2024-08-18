Chat Application

Overview
This Chat Application is a simple, real-time messaging platform that allows users to register, log in, view available users, and exchange messages. The project is built using HTML, CSS, and JavaScript, with Firebase providing backend services for authentication and database management.

Features:-
User Registration: Users can create an account using their email and password.
User Login: Registered users can log in to access the chat application.
User List: View a list of available users to start a conversation.
Real-Time Messaging: Exchange messages with other users in real-time.

Project Structure:-
/chat-application
│
├── index.html          # Landing page
├── login.html          # User login page
├── signup.html         # User registration page
├── start-chat.html     # Page displaying list of available users
├── chat.html           # Chat interface for messaging
│
├── css/
│   └── style.css       # Stylesheet for the application
│
├── js/
│   └── validation.js   # JavaScript for form validation and front-end logic
│
├── firebase.js         # Firebase configuration and initialization
├── README.md           # Project documentation
└── .gitignore          # Files to ignore in Git

Technologies Used:-
HTML: Structure of the web pages.
CSS: Styling of the user interface.
JavaScript & jQuery: Front-end logic, including form validation, user authentication, and real-time messaging.
Firebase: Backend services for authentication and real-time database.

Getting Started:-
Prerequisites
Firebase Account: Create a Firebase project and set up authentication and database services.
Web Browser: Any modern web browser (e.g., Chrome, Firefox, Edge).

Setup Firebase:-
Create a Firebase project in your Firebase Console.
Enable Authentication and Realtime Database in the Firebase console.
Copy the Firebase configuration object from the console and replace the configuration in firebase.js.
Run the Application:

Open index.html in your web browser to start the application.
Usage
Register: Create a new account by navigating to the registration page.
Log In: Access the application using your credentials.
Chat: Select a user from the list and start chatting in real-time.
