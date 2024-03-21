import "./App.css";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./libs/redux/store";
import router from "./router/router";
import GlobalStyle from "./styles/global-style";

function App() {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}

export default App;
