import Backend from "../../Components/Backend/Backend";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ViewBackend() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Backend />
      <Footer />
    </div>
  );
}

export default ViewBackend;
