import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { GlobalRouter } from "./router/GlobalRouter";
import { createTheme, MantineProvider } from "@mantine/core";
//Добавлено от 10.10.24
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
import "./global.css"; // Импорт глобальных стилей

const myTheme = createTheme({
  primaryColor: "yellow",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={myTheme}>
      <GlobalRouter />
    </MantineProvider>
  </StrictMode>
);

// //Добавлено от 10.10.24
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//  <React.StrictMode>
//  <App />
//  </React.StrictMode>
// );
