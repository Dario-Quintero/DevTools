import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

function ViewSearch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
}

export default ViewSearch;
