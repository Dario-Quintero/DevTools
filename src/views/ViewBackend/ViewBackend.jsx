import Backend from "../../comp/Backend/Backend";
import Navbar from "../../comp/Navbar/Navbar";
import Footer from "../../comp/Footer/Footer";

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
