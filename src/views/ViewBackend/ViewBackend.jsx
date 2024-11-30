import Backend from "../../components/Backend/Backend";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
