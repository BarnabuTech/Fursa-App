// The Opportunity Wheel is an interactive feature 
// that allows users to spin a wheel and randomly 
// discover career-related categories like 
// "Job Openings," "Internships," and "Motivational Quotes." 
// Upon selection, a dynamic description for each category 
// is fetched from the backend and displayed below the wheel.
//  Users can tap on the description for more detailed 
// information or external links. This feature enhances
// user engagement by offering a fun, gamified experience 
// with relevant, real-time content. Future enhancements could 
// include adding more categories or personalized suggestions



Login Logic:

The login process validates user credentials by sending a request to the server. If the credentials are correct, a JWT token is returned, granting access to the user. Any errors, like incorrect credentials, trigger an alert.


Register Logic:

The registration process checks if all fields are filled, validates the email format, and ensures the password meets the minimum length. If valid, the user is registered, otherwise, appropriate error messages are shown.