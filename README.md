# Daily Thoughts Web Application

A web application where users can sign up, share their daily thoughts, and connect with others from the same college. Users' identities are kept private, and thoughts will be automatically deleted after 24 hours. The application is built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Sign Up**: Users can sign up by providing a username, college name, and password.
- **Share Thoughts**: Users can share their daily thoughts, which are visible to others from the same college.
- **Privacy**: User identities are private, and no one can see who shared the thought.
- **Delete Thoughts**: Users can delete their shared thoughts at any time.
- **Auto-Delete**: Thoughts are automatically deleted after 24 hours.

## Tech Stack

### Frontend: React.js
- React is used to build the user interface of the application.
- State management is handled using React's Context API or hooks.
- Axios or Fetch API is used to communicate with the backend server.

### Backend: Node.js & Express.js
- Node.js is used to run the server-side application.
- Express.js is used for handling routes and API requests.
- User authentication is managed using JSON Web Tokens (JWT) and bcrypt for password hashing.

### Database: MongoDB
- MongoDB is used to store user data, thoughts, and manage authentication.
- Each thought is stored with a timestamp and is automatically deleted after 24 hours.
- Mongoose is used to interact with MongoDB for smooth data handling.

### Authentication: JWT (JSON Web Tokens)
- Users are authenticated using JWT tokens to maintain session and secure access.
- Passwords are hashed using bcrypt for added security.



### Made With ❤️ By Nitish

## Thank you 🌵