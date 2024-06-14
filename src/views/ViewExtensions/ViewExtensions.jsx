import Extensions from "../../Components/Extensions/Extensions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ViewExtensions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Extensions />
      <Footer />
    </div>
  );
}

export default ViewExtensions;
