import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div
				className="relative z-0 bg-[	
#8c92ac]"
			>
				<div
					className="bg-[	
#8c92ac]bg-cover bg-no-repeat bg-center"
				>
					<Navbar />
					<Hero />
				</div>
				<Works />
				{/* <About /> */}
				{/* <Experience /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
				``{" "}
			</div>
		</BrowserRouter>
	);
};

export default App;
