import Navbar from "../../components/Navbar/Navbar";
import Frontend from "../../components/Frontend/Frontend";
import Footer from "../../components/Footer/Footer";

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
