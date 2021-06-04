# Able Moving Services
A static production website, custom-built for Able Moving Services. 

![https://github.com/sandypockets/able-moving-services/blob/main/docs/able-index.png?raw=true](https://github.com/sandypockets/able-moving-services/blob/main/docs/able-index.png?raw=true)

The project was built with React, using [Next.js](https://nextjs.org/). The project is styled with [Tailwind CSS](https://tailwindcss.com/), and parts of [Tailwind UI](https://tailwindui.com/documentation) components. The site is currently deployed on [Vercel](https://vercel.com/).

The site uses SSR (Server Side Rendering), ensuring that loading between pages is lightning fast, providing a great user experience. 

## Getting Started

1. Fork, then clone the project to your machine. 

```shell
git clone git@github.com:sandypockets/able-moving-services.git
```

2. From the project root, run the following command to install dependencies. **You must use Node 14 or higher to install dependencies correctly**.

If you're using `npm`:
```shell
npm install
```

or if you're using `yarn`

```shell
yarn install
```

3. Start the development server.
```shell
npm run dev

# or with yarn
yarn dev
```

4. Navigate to [`localhost:3000`](http://localhost:3000) in your browser to view the site. 

## Dependencies
* @headlessui/react `^1.2.0`
* @heroicons/react `^1.0.1`
* @tailwindcss/forms `^0.3.2`
* next `10.2.3`
* react `17.0.2`
* react-dom `17.0.2`

## Dev Dependencies
* autoprefixer `^10.2.6`
* postcss `^8.3.0`
* tailwindcss `^2.1.2`

## Contributing

Each page lives in the `pages/` directory, and is composed of components from the `components/` directory. 

### Helpful Links
* [Next.js deployment documentation](https://nextjs.org/docs/deployment)
* [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
* The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [Next.js GitHub repository](https://github.com/vercel/next.js/)
