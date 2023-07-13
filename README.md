# Astro with React three fiber ( Minimal Starter )

## Project Structure

Inside of your project, you'll see the following folders and files:

```

Astro-Three-fiber
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── astro.config.mjs
├── public
│   └── favicon.ico 
└── src
    ├── components
    |    ├── Box.jsx
    |    └── Three.jsx
    ├── layouts
    |    └── Mainlayout.astro
    └── pages
        ├── about.astro
        └── index.astro
    
```
#

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, just an example of [ Three fiber ]

Any static assets, like images, can be placed in the `public/` directory. 


## Start your suffering

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |