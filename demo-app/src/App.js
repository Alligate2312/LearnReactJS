import "./App.css";
import BrokenProfile from "./BrokenProfile";
import Footer from "./Footer";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

function App() {
  const studentName = "Your Name Here";
  const currentDate = new Date().toDateString();
  const lessonNumber = 1;

  return (
    <div className="App">
      <h1>Welcome to My React Learning Journey</h1>
      <p>
        Hello, {studentName}! Today is {currentDate}
      </p>
      <p>This is lesson number {lessonNumber}</p>
      <p>Next lesson will be lesson {lessonNumber + 1}</p>
      <PersonalInfo />
      <Skills /> {/* Add this line */}
      <BrokenProfile />
      <Footer />
    </div>
  );
}

export default App;
