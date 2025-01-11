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
![login page](https://github.com/user-attachments/assets/afec92a5-ce0c-4b89-9e61-a492d2cc2a0d)

### Signup  
![register page](https://github.com/user-attachments/assets/7a919098-c882-43c2-aa73-75b96124e222)

### Search User  
![search user](https://github.com/user-attachments/assets/dd94f8b4-69f4-4797-8a49-632a14fc30a1)

### Send Friend Request  
![send request](https://github.com/user-attachments/assets/02a3075d-23fb-4aa0-8422-9b18f54b82ad)

### Database  
![databse](https://github.com/user-attachments/assets/038d926d-fb67-41aa-9b66-8f1bc8c9cfd9)

## Contributing  
Contributions are welcome! Please open an issue or submit a pull request for improvements.  


## Acknowledgments  
- [React](https://reactjs.org/) for building the user interface.  
- [Tailwind CSS](https://tailwindcss.com/) for styling.  
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for the backend.  
- [MongoDB](https://www.mongodb.com/) for database management.  
```  
