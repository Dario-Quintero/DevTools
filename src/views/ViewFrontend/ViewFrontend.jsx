import Navbar from "../../Components/Navbar/Navbar";
import Frontend from "../../Components/Frontend/Frontend";
import Footer from "../../Components/Footer/Footer";

function ViewFrontend() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Frontend />
      <Footer />
    </div>
  );
}

export default ViewFrontend;
