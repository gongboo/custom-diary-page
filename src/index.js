import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./ReduxFiles/store";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        {/* <App /> */}
        <RouterProvider router={routes} />
      </DndProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
