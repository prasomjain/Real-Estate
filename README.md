# Real Estate Rental Platform

The Real Estate Rental Platform is a web application designed to connect tenants and property managers.  Tenants can easily browse rental listings and search/filter properties by location, price, amenities, and other criteria.  Property managers (landlords) can add new listings with detailed information (rent, amenities, images, etc.) and manage existing properties.  This platform addresses the growing rental market – for example, about 34% of U.S. households are in rental homes – by simplifying how renters find homes and how managers list them.

## Features

* **Tenant Features:** Tenants can browse all available rental properties.  They can apply search filters (e.g. location, price range, number of bedrooms, pet-friendliness) to find properties that match their needs.  Each listing shows detailed information (rent amount, amenities, photos, and location).  Tenants can view property details and contact the manager (e.g. via email or an inquiry form) to schedule viewings or ask questions.

* **Manager Features:** Property managers can create and manage listings.  They can add new properties by entering details such as monthly rent, amenities (e.g. parking, laundry, air conditioning), property type (apartment, house, etc.), and upload photos.  Managers can edit or remove their listings as needed (for example, to update rent or mark a unit as rented).  A management dashboard (if included) allows owners to track inquiries or rental applications for each property.

## Tech Stack

* **Frontend:** React – a free and open-source JavaScript library for building user interfaces.  (Often using React Router for client-side routing and Redux or Context for state management.)
* **Backend:** Node.js – a cross-platform, open-source JavaScript runtime environment for running server-side code.  Express.js – a minimal web framework for Node.js used to build RESTful APIs.
* **Database:** MongoDB – a cross-platform, document-oriented NoSQL database used to store property and user data.  (Data is typically stored as JSON-like documents.)
* **Authentication:** JSON Web Tokens (JWT) for secure user authentication.  (When a user logs in, the server issues a signed JWT that the client uses for subsequent requests, as commonly done in modern web apps.)

## Installation Instructions

1. **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) (v14+ recommended) and npm installed on your machine.  Also install MongoDB (or use a hosted MongoDB service) and ensure it is running.

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/prasomjain/Real-Estate.git
   cd Real-Estate
   ```

3. **Install Dependencies:**

   * For a monorepo or full-stack repo, you may have separate client and server folders. If so, run `npm install` in each:

     ```bash
     cd client
     npm install
     cd ../server
     npm install
     ```
   * If it is a single project, run `npm install` in the project root.

4. **Environment Configuration:**

   * Create a `.env` file (or otherwise configure environment variables) with the required settings, such as the Postgres creating database (```createdb realestate```) and a JWT secret key (`JWT_SECRET`), etc.
   * For example:

     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=realestate
     DB_USER=your_db_username
     DB_PASS=your_db_password
     JWT_SECRET=your-secret-key
     ```

5. **Start the Application:**

   * Start the backend server, e.g.:

     ```bash
     cd server
     npm start
     ```
   * Start the frontend, e.g.:

     ```bash
     cd client
     npm start
     ```

   The app should now be running locally (commonly at [http://localhost:3000](http://localhost:3000) or [http://localhost:5000](http://localhost:5000), etc., depending on configuration). See console output for the exact URLs.

## Usage Instructions

* **As a Tenant:**

  1. Register a new account or log in.
  2. Browse the home page or listings page to view available rentals.
  3. Use search filters or a search bar to narrow down listings by location, rent price, or other criteria.
  4. Click on a property to view its details, photos, and amenities.
  5. Use the “Contact Manager” or “Apply” button (if available) to send a message or application to the property manager.

* **As a Property Manager:**

  1. Register/log in with a manager account.
  2. Navigate to the “Add Property” or “My Listings” section of the dashboard.
  3. Fill out the form to add a new property, including rent amount, address, property type, amenities (e.g. wifi, parking), and upload photos.
  4. Submit the form to publish the listing. The property will then appear in the tenant’s listings.
  5. You can edit or delete your property from your dashboard if details change or the unit becomes unavailable.

## Screenshots or UI Previews

A representative UI screenshot is shown above (homepage with a “Search properties” banner and featured services).  In the README, include actual screenshots or mockups of your app’s interface: for example, the main listing/search page, a property detail page, and the manager’s dashboard. Visual examples help new users and developers quickly understand the look and flow of the application.

## Contributing

* Contributions are welcome! To contribute:

  1. **Fork** the repository and **clone** your fork locally.
  2. **Create a new branch** (`git checkout -b feature/my-feature`).
  3. **Make your changes** in the codebase (add tests if applicable) and commit them.
  4. **Push** the branch to your fork (`git push origin feature/my-feature`).
  5. **Open a Pull Request** on the main repo, describing your changes. We will review and merge improvements.
* Please ensure code follows the existing style and that any new feature is documented. For major changes, opening an issue first to discuss is appreciated.

## License

This project is licensed under the **MIT License**.  The MIT License is a permissive open-source license with very few restrictions on reuse. (See the [LICENSE](LICENSE) file for full details.)
