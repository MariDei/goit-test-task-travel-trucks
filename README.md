# TravelTrucks App

"TravelTrucks" web application is created for a camper rental company.

# Brief description

The web application consists of 3 pages:

- HomePage: contains a banner and navigation and a "View Now" button, with which
  the transition to the CatalogPage is made.
- СatalogPage: a page displaying all available vehicles with the possibility of
  filtering according to certain criteria (location, type of transport,
  availability of additional equipment (air conditioner, kitchen, etc.) and the
  possibility to add a camper to the favorites).
- СamperPage: a page of a separate camper with a detailed description of the
  selected camper, a photo gallery, user reviews, and a booking form.

# The following frameworks and libraries were used to create TravelTrucks App:

- Vite as the bundler and local server.
- React for building the user interface
- ESLint for code quality checks
- Redux for state management.
- React Router for routing.
- Axios for inquiries.
- React Loader Spinner to display information loading during asynchronous
  requests.
- CSS modules for styling.

# Installation instructions

Before running this project locally, ensure you have the following installed:

- Node.js (recommended version: 16.x or higher);
- npm (recommended version: 8.x or higher).

Steps to Run the Project:

1. Clone the project repository to your local machine: git clone
   (https://github.com/MariannaDei/traveltrucks.git)
2. Install dependencies cd traveltrucks: npm install
3. Start the development server: npm run dev
4. Build the project for production: npm run build
5. Preview the production build: npm run preview
6. Run code linting: npm run lint
