

### 1. How to customize for custom class in tailwind.config.js


Created custom class `mani-primary` in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "mani-primary": "yellow"
    },
    extend: {},
  },
  plugins: [],
}
```

Example of How to use `mani-primary` class in your component
```jsx
<div className='h-screen bg-black bg-mani-primary '> </div>
```


### 2. How to create custom class and use in `index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: theme("colors.mani-background");
  }
}

@layer components { 
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-mani-primary;
    color: red;
  }
}


@layer utilities {
  .btn-blue {
    @apply text-white;
  }
}

```

