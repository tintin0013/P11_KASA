import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About"

function App() {
  return (
		<BrowserRouter>
			<Routes>
      <Route exact path="/" element={<Home />} />
	  <Route path="/about" element={<About />} />
	  <Route path="/*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
