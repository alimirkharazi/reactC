import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ReactCRouter } from "./ReactCRouter";

export default function App({ store, persistor, basename }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} >
				<React.Suspense >
					<BrowserRouter basename={basename}>
						<ReactCRouter authenticationModule={false}/>
					</BrowserRouter>
				</React.Suspense>
			</PersistGate>
		</Provider>
	);
}
