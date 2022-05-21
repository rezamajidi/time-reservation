[![Netlify Status](https://api.netlify.com/api/v1/badges/9a806d3e-f886-4b00-810a-79190f4a348b/deploy-status)](https://app.netlify.com/sites/time-reservation/deploys)

# Timer Reservation app built with React ⚛️

#### API served with `json-server`

#### Front codebase built with React & TailwindCSS

## Installations

- Clone the repository
- Run `npm i` to install the modules
- Copy the `.env.example` file and rename it to `.env`
- For serving API on your local, you need to have `json-server` globally installed.
  - Serve the api with the command `json-server --watch src/server/db.json`.
  - it usually runs on `http://localhost:3000` so copy this as a `API_BASE_URL` to `env` file.
  - You can also use the API served on [glitch](https://glitch.com/) with url `https://cypress-wholesale-pea.glitch.me` as the `API_BASE_URL`
- Run `npm run dev` to start the project on local development

## Demo

You can check the project live on [netlify](https://time-reservation.netlify.app/)
