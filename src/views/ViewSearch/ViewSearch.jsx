import Navbar from "../../comp/Navbar/Navbar";
import Footer from "../../comp/Footer/Footer";
import Search from "../../comp/Search/Search";

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
