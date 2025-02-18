# My Portfolio

A personal portfolio website built with React and TypeScript to showcase my projects, skills, and experience.

## Description

This portfolio is designed to be a clean, responsive, and engaging platform for potential employers and collaborators to learn more about me and my work.  It includes sections for showcasing projects, highlighting skills, providing contact information, and offering a downloadable resume.

## Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

## Usage

1.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

2.  **Open the application in your browser:**

    Visit `http://localhost:5173` (or the URL provided by Vite) to view the portfolio.

## Project Structure

The project structure is organized as follows:

*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `LICENSE`: Contains licensing information (if applicable).
*   `README.md`: This file, providing documentation for the project.
*   `eslint.config.js`: Configuration file for ESLint, ensuring code quality and consistency.
*   `index.html`: The main HTML file.
*   `package-lock.json`: Records the exact versions of dependencies used.
*   `package.json`: Contains project metadata, dependencies, and scripts.
*   `public/`: Contains static assets like images and icons.
    *   `icons/`: Various icons used throughout the portfolio.
    *   `illustrations/`: Illustrations used for visual appeal.
*   `src/`: Contains the main application source code.
    *   `App.css`: Global styles for the application.
    *   `App.tsx`: The root component of the application.
    *   `assets/`: Contains assets like the React logo.
    *   `components/`: Reusable UI components.
        *   `AboutmeSection.tsx`: Component for the "About Me" section.
        *   `ContactSection.tsx`: Component for the "Contact" section.
        *   `FooterSection.tsx`: Component for the footer.
        *   `HeroSection.tsx`: Component for the hero section.
        *   `Navbar.tsx`: Component for the navigation bar.
        *   `ProjectBox.tsx`: Component for displaying individual projects.
        *   `ProjectSection.tsx`: Component for the "Projects" section.
        *   `ResumeSection.tsx`: Component for the "Resume" section.
        *   `ServiceSection.tsx`: Component for the "Services" section.
        *   `SvgIcons.tsx`: Component for rendering SVG icons.
        *   `ToolBox.tsx`: Component for displaying skills/tools.
    *   `contexts/`: React Contexts for managing global state.
        *   `ThemeContext.tsx`: Context for managing the theme (e.g., light/dark mode).
    *   `hooks/`: Custom React hooks.
        *   `useProjects.tsx`: Hook for fetching and managing project data.
        *   `useTools.tsx`: Hook for fetching and managing tool/skill data.
    *   `index.css`: Global CSS styles.
    *   `main.tsx`: Entry point for the React application.
    *   `vite-env.d.ts`: TypeScript declaration file for Vite environment variables.
*   `tsconfig.app.json`: TypeScript configuration for the application.
*   `tsconfig.json`: Base TypeScript configuration.
*   `tsconfig.node.json`: TypeScript configuration for Node.js.
*   `vite.config.ts`: Configuration file for Vite, the build tool.

## Contribution

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## License

[Optional: Add license information here, e.g., MIT License.  If you have a `LICENSE` file, refer to it.]

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
