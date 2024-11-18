# Opportunity Wheel Feature

The **Opportunity Wheel** is an interactive gamified feature designed to enhance user engagement by randomly introducing career-related categories. Users can spin the wheel and discover a variety of options, such as:

- **Job Openings**
- **Internships**
- **Motivational Quotes**

Each category dynamically fetches a description from the backend, which is displayed below the wheel. Users can tap on these descriptions to access detailed information or external links for further exploration.

## Key Features

- **Dynamic Content**: Real-time descriptions fetched from the backend.
- **Interactive UI**: Gamified spinning wheel for enhanced user experience.
- **Expandable Design**: Future updates could include more categories or personalized suggestions tailored to individual users.

---

## Authentication Logic

### Login

The **login process** validates user credentials by sending a request to the backend server. Here's how it works:

1. Users enter their email and password.
2. A request is sent to the server for verification.
3. If valid, a **JWT token** is issued, granting the user access.
4. If invalid, the system triggers an alert with the corresponding error message.

### Registration

The **registration process** ensures secure and valid user creation:

1. Validates that all required fields are filled.
2. Checks the email format for correctness.
3. Ensures the password meets the minimum length and complexity requirements.
4. Provides error messages for incomplete or invalid input.

---

## Technologies Used

- **Frontend**: React Native (Expo)
- **Backend**: Node.js/Express.js and MongoDB
- **Authentication**: JWT-based token system

---

## Future Enhancements

- Add more categories to the Opportunity Wheel.
- Incorporate personalized suggestions based on user profiles.
- Improve the gamification experience with animations or rewards.
- Enable social sharing of selected opportunities.

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone 

2. Install dependencies:

   ```bash
   npm install 

3. Run the project:

   ```bash
   npx expo start 
