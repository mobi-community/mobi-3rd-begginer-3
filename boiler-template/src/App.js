import "./App.css";

import { Provider } from "react-redux";

import store from "./libs/redux/store";
import GlobalStyle from "./styles/global-style";

function App() {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
			</Provider>
		</>
	);
}

export default App;
