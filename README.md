# TravelTrucks App

"TravelTrucks" web application is created for a camper rental company.

## Project overview

### The web application consists of 3 pages:

- HomePage: contains a banner and navigation and a "View Now" button, with which
  the transition to the CatalogPage is made.
- СatalogPage: a page displaying all available vehicles with the possibility of
  filtering according to certain criteria (location, type of transport,
  availability of additional equipment (air conditioner, kitchen, etc.) and the
  possibility to add a camper to the favorites).
- СamperPage: a page of a separate camper with a detailed description of the
  selected camper, a photo gallery, user reviews, and a booking form.

### To implement the functionality of the application, a ready-made API backend is used, which is available at the [link] https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

Its main endpoints are:

- #### GET /campers
  to get all ads (filtering must be done on the backend, not the frontend;
- #### GET /campers/:id
  to get ad details by its ID.

## The following frameworks and libraries were used to create TravelTrucks App:

- Vite as the bundler and local server.
- React for building the user interface
- ESLint for code quality checks
- Redux for state management.
- React Router for routing.
- Axios for inquiries.
- React Loader Spinner to display information loading during asynchronous
  requests.
- React Date Picker to select a date on the calendar.
- CSS modules for styling.

## Installation instructions

### Before running this project locally, ensure you have the following installed:

- Node.js (recommended version: 16.x or higher);
- npm (recommended version: 8.x or higher).

### Steps to Run the Project:

1. Clone the project repository to your local machine:
   #### git clone [link] (https://github.com/MariDei/goit-test-task-travel-trucks.git)
2. Install dependencie:
   #### cd goit-test-task-travel-trucks
   #### npm install
3. Start the development server:
   #### npm run dev
4. Build the project for production:
   #### npm run build
5. Preview the production build:
   #### npm run preview
6. Run code linting:
   #### npm run lint
