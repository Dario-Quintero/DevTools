import Courses from "../../comp/Courses/Courses";
import Navbar from "../../comp/Navbar/Navbar";
import Footer from "../../comp/Footer/Footer";

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
