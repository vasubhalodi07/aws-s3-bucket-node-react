# Upload Image into S3 Bucket Using Node JS and React JS

## Introduction:

S3 Image Uploader with Node and React is a versatile solution for efficiently uploading images to an S3 bucket while seamlessly integrating with Node.js and React.js. This project enables users to effortlessly upload images, which are then securely stored in an S3 bucket. Leveraging the power of Node.js for the backend and React.js for the frontend, this system offers a user-friendly interface for managing and interacting with uploaded images.

## Installation Steps:

## Backend:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Set up your MySQL database:
   - Create a MySQL database with the name provided in the environment variable `DB_DATABASE`.
   - Set the username and password for the database in the environment variables `DB_USERNAME` and `DB_PASSWORD`.
   - Update the database host and dialect in the environment variables `DB_HOST` and `DB_DIALECT`.
5. Set up your AWS S3 bucket:
   - Create an S3 bucket in the region provided in the environment variable `AWS_REGION_S3_BUCKET`.
   - Set the bucket name in the environment variable `AWS_S3_BUCKET_NAME`.
   - Provide the necessary access keys for your S3 user in the environment variables `AWS_S3_USER_ACCESS_KEY` and `AWS_S3_USER_SECRET_ACCESS_KEY`.
6. Start the backend server: `npm start`
7. The backend server will be running at `http://localhost:5000`.

## Frontend:

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm run dev`
4. The frontend development server will be running at `http://localhost:5173`.

## Usage:

1. Access the frontend application at `http://localhost:5173` in your web browser.
2. Use the provided interface to upload, fetch, and delete images.
3. Images uploaded will be stored in the S3 bucket, and their URLs will be saved in the MySQL database.
4. You can interact with the backend APIs directly at `http://localhost:5000`.

## Note:

Ensure you have Node.js, npm, MySQL, and AWS S3 credentials set up before running the application. Adjust the configurations as per your environment.

## Contributing:

Contributions are welcome! Feel free to submit issues or pull requests.
