
import Banner from "./Components/Banner/Banner.js";
import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Testimonials from "./Components/Testimonials/Testimonials.js";
import "./index.css"
function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
