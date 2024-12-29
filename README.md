<p align="center">
  <img src="https://github.com/user-attachments/assets/3f2860ee-d4de-4941-8c4e-b69c360c2dac" alt="image">
</p>


## ABOUT
EduConnects is a web-based educational platform designed to enhance learning experiences by connecting students, educators, and resources. It offers personalized learning tools, performance tracking, and interactive features.

## FEATURES

- **User Authentication:** Secure sign-up and login system with password encryption.

- **Dynamic Charts:** Performance statistics and progress tracking using Chart.js.

- **MongoDB Integration:** Permanent data storage for user profiles, feedback, and support queries.

- **Support System:** Contact support form linked to MongoDB for issue tracking.

- **Responsive Design:** User-friendly interface optimized for different devices.

- **Testimonial Section:** Display user testimonials to boost credibility.

- **Interactive Navigation:** Easy access to courses, notes, and profile features.

- **Handlebars Templates:** Modular structure for headers, footers, and layouts.

## TECH STACK

- **Frontend:** HTML, CSS, JavaScript, Chart.js

- **Backend:** Node.js, Express.js

- **Database:** MongoDB with Mongoose

- **Template Engine:** Handlebars

## INSTALLATION

-- **Clone the Repository**

`git clone https://github.com/username/educonnects.git`

`cd educonnects`

-- **Install Dependencies**

`npm install`

-- **Set Up Environment Variables**

*Create a `.env` file in the root directory:*

MONGODB_URI=mongodb://localhost:27017/educonnects
PORT=4000

-- **Start MongoDB (Optional for Compass)**

*Ensure MongoDB is running locally:*

`mongod`

-- **Run the Application**

`npm start`

*The server will run at http://localhost:4000*

## USAGE

- **Landing Page:** Explore features and testimonials.

- **Profile Section:** View progress and performance charts.

- **Courses and Notes:** Access materials via the navigation bar.

- **Support:** Submit queries that save directly to MongoDB.

## API ENDPOINTS

- **User Signup:** POST /api/signup

- **User Login:** POST /api/login

- **Feedback:** POST /api/feedback and GET /api/feedback

- **Support Queries:** POST /api/support and GET /api/support


## FUTURE ENHANCEMENTS

- Role-based access control for students and teachers.

- Integration with external APIs for learning resources.

Real-time chat support and notifications.


