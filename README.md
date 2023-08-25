# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  API's Autentication
  Login https://developers.themoviedb.org/ get an options key and save in ./src/keys/key.jsx. It's look like this (copy it and replace the access token value):

  export const options = {
  method: "GET",
  headers: {
  accept: "application/json",
  Authorization: "Bearer {API read access token}", //example => Authorization: "Bearer eyJhbGciOp_jUrqoCkgkqVoOC5Rb6TevKaPGVJvpV6oSCn0",
  },
  };
