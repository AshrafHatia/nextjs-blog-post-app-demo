```markdown
# Next.js Blog Post Application

A simple blog post application built with Next.js, using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) as a data source. This project demonstrates the fundamentals of Next.js, including server-side rendering, dynamic routing, and API integration.

## Features

- Fetch and display blog posts dynamically.
- View detailed post information.
- Display author details, including name, email, and website.
- Fully responsive design with a clean and modern UI.
- Environment variable configuration for API URL.

## Tech Stack

- **Next.js**: Framework for server-side rendering and frontend development.
- **TailwindCSS**: For styling the application.
- **JSONPlaceholder API**: Free online REST API used for demo data.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-blog-post-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nextjs-blog-post-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variable:
     ```
     POST_API_URL=https://jsonplaceholder.typicode.com
     ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Learning Outcomes

While building this project, I learned the following:

1. **Next.js Basics**:
   - Setting up a Next.js application.
   - Understanding server-side rendering (SSR) and static site generation (SSG).
   - Using `getStaticProps` and `getStaticPaths` for dynamic routing.

2. **Environment Variables**:
   - Configuring environment variables using `process.env`.
   - Securing API URLs with `.env.local`.

3. **Dynamic Routing**:
   - Creating dynamic routes using `[params]`.
   - Fetching data based on route parameters.

4. **API Integration**:
   - Working with REST APIs and Axios/Fetch.
   - Consuming data from the JSONPlaceholder API.

5. **Styling with TailwindCSS**:
   - Building a clean and responsive UI with TailwindCSS classes.

6. **Error Handling**:
   - Implementing error handling for API calls.

## Future Improvements

- Add a feature for creating new posts (local simulation).
- Improve error messages and fallback pages for invalid routes.
- Add unit tests using Jest and React Testing Library.
- Enhance the UI for better accessibility and user experience.

## Usage

- Open the app in a browser.
- View the list of blog posts.
- Click on a post to see the detailed view and author information.

## Demo



## License

This project is open-source and available under the [MIT License](LICENSE).

```
