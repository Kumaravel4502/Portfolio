# Portfolio Website

This is a portfolio website built with React and Vite.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
    npm run dev
   ```

## Performance Optimizations

This project has been optimized for performance by implementing the following techniques:

- **Code Splitting:** The application is broken down into smaller chunks using `React.lazy()` and `Suspense`. This allows the application to load only the necessary code for the initial screen, reducing the initial load time.
- **Lazy Loading Images:** Images are lazy-loaded using the `react-lazy-load-image-component`. This means that images are only loaded when they are about to enter the viewport, which further improves the initial load time.
- **CDN for Images:** All project images are served from a CDN, which ensures fast and efficient delivery of assets.
- **Unused Asset Identification:** Unused large image files have been identified in the `public/images` directory. These can be safely deleted to reduce the overall project size.
