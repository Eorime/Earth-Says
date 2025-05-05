import AppRoutes from "./AppRoutes";
import "./index.css";
import Loader from "./components/loader/Loader";
import { useState } from "react";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoaderComplete = () => {
		setIsLoading(false);
	};

	return (
		<div className="App">
			{isLoading ? <Loader onComplete={handleLoaderComplete} /> : <AppRoutes />}
		</div>
	);
}

export default App;
