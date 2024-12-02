import Navbar from "../../comp/Navbar/Navbar";
import Frontend from "../../comp/Frontend/Frontend";
import Footer from "../../comp/Footer/Footer";

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
