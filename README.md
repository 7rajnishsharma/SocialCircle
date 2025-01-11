## Overview  
**SocialCircle** is a social networking platform designed to connect users seamlessly. It offers features like user registration, login, search functionality, and friend requests. The platform is built with a responsive design to ensure a smooth experience on both desktop and mobile devices.  

## Features  
- **User Registration and Login**: Secure authentication system for user accounts.  
- **Search Users**: Easily find other users by their usernames.  
- **Friend Requests**: Send and accept friend requests.  
- **Responsive Design**: Optimized for devices of all sizes.  
- **User-Friendly Interface**: Clean and intuitive navigation.  

## Tech Stack  
### Frontend  
- React  
- Tailwind CSS  
- React Router  

### Backend  
- Node.js  
- Express.js  
- MongoDB  

### Authentication  
- JSON Web Tokens (JWT)  


## Installation  
Follow these steps to set up SocialCircle on your local system:  

### 1. Clone the Repository  
```bash  
git clone https://github.com/7rajnishsharma/SocialCircle.git  
cd SocialCircle  
```  

### 2. Backend Setup  
```bash  
cd back-end  
npm install  
```  

### 3. Frontend Setup  
```bash  
cd ../front-end  
npm install  
```  

### 4. Configure Environment Variables  
Create a `.env` file in the `/back-end` directory and add the following:  
```plaintext  
PORT=5000  
MONGODB_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
```  

### 5. Run the Application  
#### Start the Backend Server:  
```bash  
cd back-end  
node server.js  
```  
#### Start the Frontend Application:  
```bash  
cd ../front-end  
npm start  
```  

## Visuals  
### Login  
![Login Page](path/to/login-screenshot.png)  

### Signup  
![Signup Page](path/to/signup-screenshot.png)  

### Search User  
![Search User](path/to/search-user-screenshot.png)  

### Send Friend Request  
![Send Friend Request](path/to/send-friend-request-screenshot.png)  

### Database  
![Database Structure](path/to/database-screenshot.png)  

## Contributing  
Contributions are welcome! Please open an issue or submit a pull request for improvements.  


## Acknowledgments  
- [React](https://reactjs.org/) for building the user interface.  
- [Tailwind CSS](https://tailwindcss.com/) for styling.  
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for the backend.  
- [MongoDB](https://www.mongodb.com/) for database management.  
```  
