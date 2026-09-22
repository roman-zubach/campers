# TravelTrucks

Frontend for **TravelTrucks**, a camper rental company. Users can browse the
catalog, filter campers by location, body type, engine, transmission and
equipment, save favorites, view the details of a camper (gallery, specs,
reviews) and book it online.

- **Live demo:** _add the Vercel URL here after the first deploy_
- **Design:** [Figma](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=48730-474)
- **API:** [mockapi.io](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

## Pages

| Route          | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `/`            | Home page with a hero banner and the "View Now" call to action    |
| `/catalog`     | Catalog with filters, favorites and "Load more" pagination        |
| `/catalog/:id` | Camper page: gallery, vehicle details, reviews and a booking form |

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist) (favorites are saved in `localStorage`)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) for the booking form
- [react-hot-toast](https://react-hot-toast.com/) for notifications
- SCSS (a component-scoped stylesheet next to each component)

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/roman-zubach/campers.git
cd campers
npm install
npm run dev
```

The app will be available at <http://localhost:5173>.

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server                 |
| `npm run build`   | Type-check and build for production (`dist`) |
| `npm run preview` | Serve the production build locally           |
| `npm run format`  | Format the sources with Prettier             |

## Deployment

The project is deployed on [Vercel](https://vercel.com/). Import the repository
in Vercel. The framework preset is detected as **Vite** automatically (build
command `npm run build`, output directory `dist`). `vercel.json` rewrites every
route to `index.html`, so deep links like `/catalog/1` also work when you
reload the page.

## Project structure

```
src/
├── assets/            # global SCSS (tokens, mixins, reset), images, SVG sprite
├── common/            # shared UI components and helpers
├── features/
│   ├── booking/       # booking form
│   ├── camper/        # API, Redux slice, catalog and camper page components
│   └── homepage/      # hero banner
├── pages/             # route components (lazy-loaded)
├── redux/             # store and typed hooks
└── routing/           # routes and path helpers
```
