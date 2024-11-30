import Courses from "../../components/Courses/Courses";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ViewCourses() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Courses />
      <Footer />
    </div>
  );
}

export default ViewCourses;
