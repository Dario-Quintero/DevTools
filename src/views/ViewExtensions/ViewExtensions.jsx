import Extensions from "../../components/Extensions/Extensions";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
