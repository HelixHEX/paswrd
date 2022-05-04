import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./pages/App";
import { loadState, saveState } from "./utils/localStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistedState = loadState();
const store = configureStore({reducer, preloadedState: persistedState});
store.subscribe(() => {
  saveState(store.getState());
})
// const store = configureStore({ reducer });
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initalColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
