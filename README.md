Chat Application

Overview: This is a simple real-time chat application wherein a user can sign up, log in, obtain a list of other available users within the system, and send messages across to them. It will be developed using HTML, CSS, and JavaScript, while Firebase is used for the back-end purposes for authentication and database purposes.

Features: User Registration: A user is able to register and log in with an email and a password. User Log-in: The users logged in can access the chat application. User List: The list of users available to chat with is displayed. Real-Time Messaging: The system exchanges messages with other users in real-time.

Project Structure:-
 /chat-application │
├── index.html # Landing page
├── login.html # User login page
├── signup.html # User registration page
├── start-chat.html # Page listing all the available users
├── chat.html # Chat interface for messaging
│
├── css/
│ └── style.css # Application stylesheet
│
├── js/
│ └── validation.js # JavaScript for form validation and front-end logic
│
├── firebase.js # Firebase Configuration and initialization
├── README.md # Project documentation
└── .gitignore # Files to ignore in Git

Technologies Used:- HTML: Structure of the WebPages. CSS: For the styling of the User Interface. JavaScript & jQuery: Frontend logic, form validation, user authentication and real-time messaging. Firebase: Backend services for authentication and real-time database.

Getting Started:- Prerequisites Firebase Account: Create a Firebase project and setup authentication and database services. Web Browser: Any recent browser, e.g. Chrome, Firefox, Edge.

Setting Up Firebase:- Create a Firebase project in the Firebase Console. Turn on Authentication and Realtime Database in the Firebase console. Copy the Firebase configuration object from the console, replace the configuration in firebase.js. Run the Application:

Open index.html in your web browser. Run The Application Usage Register: A user is able to register a new account via the registration page. Log In: Log in to the application with Credentials Given chat: It updates and starts Chatting after selecting any user from available list.
