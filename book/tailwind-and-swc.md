To set up Tailwind CSS with a Vite project using `plugin-react-swc`, you need to follow these steps:

1. **Install Dependencies**:
   Install Tailwind CSS, PostCSS, and Autoprefixer:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialize Tailwind CSS**:
   Generate the `tailwind.config.js` and `postcss.config.js` files:
   ```sh
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**:
   Update the `tailwind.config.js` file to include the paths to your templates:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Create a Tailwind CSS Entry File**:
   Create a `src/index.css` file and add the Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Import Tailwind CSS in Your Application**:
   Import the `src/index.css` file in your `src/main.jsx` file:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import './index.css'; // Import Tailwind CSS
   import { BrowserRouter as Router } from 'react-router-dom';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <Router>
         <App />
       </Router>
     </React.StrictMode>
   );
   ```

6. **Verify Vite Configuration**:
   Ensure your `vite.config.js` file is correctly set up to use the `plugin-react-swc`:
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react-swc';

   export default defineConfig({
     plugins: [react()],
   });
   ```

7. **Build and Run Your Application**:
   Start your Vite development server to see if Tailwind CSS is working:
   ```sh
   npm run dev
   ```

### Complete Example

Here’s how your files should look:

**tailwind.config.js**:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**src/index.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**src/main.jsx**:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```

**vite.config.js**:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
});
```

By following these steps, you should have Tailwind CSS working with your Vite + React (using `plugin-react-swc`) project. If you encounter any issues, make sure to check for typos and verify that all dependencies are installed correctly.