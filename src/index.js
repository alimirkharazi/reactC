import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import * as _redux from "./redux";
import store, { persistor } from "./redux/store";
import App from "./app/App";
import "./index.scss";

const { PUBLIC_URL } = process.env;

_redux.mockAxios(axios);

_redux.setupAxios(axios, store);

ReactDOM.render(
	<App store={store} persistor={persistor} basename={PUBLIC_URL} />,
	document.getElementById("root")
);
