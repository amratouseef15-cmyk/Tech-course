
import React, { useState } from "react";
import "./index.css";

function CourseCard(props) {
  return (
    <div className="card">
      <h2>{props.icon}</h2>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button onClick={() => alert(props.name)}>Explore</button>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState("technical");

  const technical = [
    { name: "AI & Machine Learning", icon: "🧠", description: "Build intelligent applications with AI." },
    { name: "Web Development", icon: "💻", description: "Create modern websites." },
    { name: "Data Science", icon: "📊", description: "Analyze data and find insights." },
    { name: "Cloud Computing", icon: "☁️", description: "Learn cloud technology." },
    { name: "Cybersecurity", icon: "🛡️", description: "Protect systems and applications." }
  ];

  const programming = [
    { name: "JavaScript", icon: "🟨", description: "Learn JavaScript programming." },
    { name: "Python", icon: "🐍", description: "Learn Python programming." },
    { name: "Java", icon: "☕", description: "Learn Java programming." },
    { name: "C++", icon: "⚙️", description: "Learn C++ programming." },
    { name: "React", icon: "⚛️", description: "Build apps using React." }
  ];

  const courses = category === "technical" ? technical : programming;

  return (
    <div className="container">

      <nav>
        <h2>💠 Tech-Course</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <header id="home">
        <h1>Tech-Course</h1>
        <h2>Course Central</h2>
        <p>Explore technical courses and build your career in technology.</p>
      </header>

      <section id="courses">
        <h2>Our Courses</h2>

        <div className="tabs">
          <button onClick={() => setCategory("technical")}>
            Technical Fields
          </button>

          <button onClick={() => setCategory("programming")}>
            Programming Languages
          </button>
        </div>

        <p>Total Courses: {courses.length}</p>

        <div className="course-list">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              name={course.name}
              description={course.description}
            />
          ))}
        </div>
      </section>

      <footer id="about">
        <h2>About Tech-Course</h2>
        <p>Learn technical skills and programming languages with us.</p>
        <p>© 2026 Tech-Course</p>
      </footer>

    </div>
  );
}

export default App;
