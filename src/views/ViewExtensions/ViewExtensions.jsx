import Extensions from "../../comp/Extensions/Extensions";
import Navbar from "../../comp/Navbar/Navbar";
import Footer from "../../comp/Footer/Footer";

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
