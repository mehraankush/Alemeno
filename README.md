# Alemeno Education


## Introduction
This project is a Course Management Platform where users can view, enroll in, and mark courses as completed. It leverages modern web technologies and Firebase for backend services.

## Features
- **User Authentication**: Sign up and login using Firebase Authentication.
- **Course Management**: 
  - Display all available courses.
  - Search for courses by name or instructor using debounce.
  - Enroll in courses.
  - Mark courses as completed.
- **User Management**: Store and retrieve user data from Redux .
- **Responsive Design**: Fully responsive UI built with TailwindCSS.

## Technologies Used
- **Frontend**: 
  - Reactjs and Nextjs
  - Redux
  - React Query
  - TailwindCSS
- **Backend**:
  - Firebase Firestore
  - Firebase Authentication


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/course-management-platform.git
   cd Alemeno```

2. Instalk dependencies:
    ```bash
       npm install
    # or
    yarn install   ```

3. Set up Firebase:
  - Create a Firebase project at Firebase Console.
  -Add Firebase config to your project. Create a .env file at the root of your project and add your Firebase configuration:
 ```bash
     REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id ```

