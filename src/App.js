import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import SearchComponent from "Component/SearchComponent/SearchComponent";
import Home from "Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import EditComponent from "Component/EditComponent/EditComponent";
import { Loading } from "Component/utils/Loading";
function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />}></Route>
			<Route path="/SearchComponent" element={<SearchComponent />}></Route>
			<Route path="/EditComponent" element={<EditComponent />}></Route>
			<Route path="/Home" element={<Home />}></Route>
			<Route path="/Loding" element={<Loading />}></Route>
		</Routes>
	);
}

export default App;
