import React, { useContext } from 'react';
import { useState } from 'react';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';
function StudentHome() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };


    const styles = `
    body {
      margin: 0;
      box-sizing: border-box;
    }

    /* CSS for header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: black;
    }

    .header .logo {
      font-size: 25px;
      font-family: 'Sriracha', cursive;
      color: white;
      text-decoration: none;
      margin-left: 30px;
    }

    .nav-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: black;
      margin-right: 20px;
    }

    .nav-items a {
      text-decoration: none;
      color: white;
      padding: 35px 20px;
    }

    /* CSS for main element */
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 520px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }


    .intro h1 {
      font-family: sans-serif;
      font-size: 60px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }

    .intro p {
      font-size: 20px;
      color: #d1d1d1;
      text-transform: uppercase;
      margin: 20px 0;
    }

    .intro button {
      background-color: #5edaf0;
      color: #000;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
    }

    .Bbutton {
      background-color: #5edaf0;
      color: #000;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
      
    }

    .achievements {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 80px;
    }

    .achievements .work {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .achievements .work i {
      width: fit-content;
      font-size: 50px;
      color: #333333;
      border-radius: 50%;
      border: 2px solid #333333;
      padding: 12px;
    }

    .achievements .work .work-heading {
      font-size: 20px;
      color: #333333;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .achievements .work .work-text {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    .about-me {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 80px;
      border-top: 2px solid #eeeeee;
    }

    .about-me img {
      width: 500px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .about-me-text h2 {
      font-size: 30px;
      color: #333333;
      text-transform: uppercase;
      margin: 0;
    }

    .about-me-text p {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    /* CSS for footer */
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #302f49;
      padding: 40px 80px;
    }

    .footer .copy {
      color: #fff;
    }

    .bottom-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 0;
    }

    .bottom-links .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .bottom-links .links span {
      font-size: 20px;
      color: #fff;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .bottom-links .links a {
      text-decoration: none;
      color: #a1a1a1;
      padding: 10px 20px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      
      .dropdown-content a:hover {
        background-color: #f1f1f1;
      }
      
      .show {
        display: block;
      }

    `;
   
    // const Assignments = () => {
    //   navigate(`/Landing1`);
    // };
    
    const courses = () => {
      navigate(`/Courses`);
    };

     const UserLevels = () => {
      navigate(`/UserLevels`);
     };
     const time = () => {
      navigate(`/timed`);
     };
     const video = () => {
      navigate(`/videos`);
     };

    const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';
  const chat='/chat';
  //const time='/timed';
    
    return (
<main>
<style>{styles}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<body>
  <header className="header">
    <a href={homePageUrl} className="logo">CodePro</a>
    <nav className="nav-items">
      <a href={homePageUrl}>Home</a>
      <div style={{ color: 'white' }}>
      <button onClick={toggleDropdown} className={`dropbtn ${dropdownOpen ? 'show' : ''}`}>
  User
</button>
{dropdownOpen && (
  <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
   <a href={assignmentsUrl}>Assignments</a>
    <a href={chat}>Chat</a>
    <a onClick={handleLogout}>Logout</a>
  </div>
)}
            </div>

    </nav>
  </header>
  <main>
    <div className="intro">
      <h1>CodePro for programs assessments</h1>
      <p>Empowering students with comprehensive coding courses and real-world programming assignments.</p>
      <button onClick={UserLevels}>Start taking assignments!</button>
    </div>
    <div className="achievements">
  
      <div className="work">
        <i className="fas fa-atom"></i>
        <p className="work-heading" style={{ fontSize: '24px', fontWeight: '600' }}>Courses</p>
        <p className="work-text" style={{ fontSize: '20px' }}>Unlock your coding potential with immersive courses and master real-world programming assignments for comprehensive skill development and growth. Our comprehensive range of educational offerings is designed to empower learners with the knowledge and skills needed to excel in the ever-evolving field of technology. Explore our courses to enhance your expertise, unlock new career opportunities, and stay at the forefront of the rapidly advancing world of software development and cloud computing.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold' }}>
        <button onClick={courses}>Explore our courses!</button>
      </div>
      </div>
      <div className="work">
        <i className="fas fa-atom"></i>
        <p className="work-heading" style={{ fontSize: '24px', fontWeight: '600' }}>TImmed Exercises</p>
        <p className="work-text" style={{ fontSize: '20px' }}>Try pushing your limits and embracing ongoing development by setting challenges for yourself with timed workouts. You'll improve your ability to solve problems, accelerate your code, and build deadline-resilience by placing time constraints on your coding assignments. Accept the challenge, and as you approach each scheduled exercise with resolve and concentration, you'll see personal growth. Recall that overcoming each obstacle puts you one step closer to being an expert in your field. So go ahead and push yourself, and you'll be rewarded for your diligence and hard work.
</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold' }}>
        <button onClick={time}>Try Timed Execrise!</button>
      </div>
      </div>
    </div>
    <div className="achievements">
    <div className="work">
        <i className="fas fa-atom"></i>
        <p className="work-heading" style={{ fontSize: '24px', fontWeight: '600' }}>Videos</p>
        <p className="work-text" style={{ fontSize: '20px' }}>Unlock your coding potential with immersive courses and master real-world programming assignments for comprehensive skill development and growth. Our comprehensive range of educational offerings is designed to empower learners with the knowledge and skills needed to excel in the ever-evolving field of technology. Explore our courses to enhance your expertise, unlock new career opportunities, and stay at the forefront of the rapidly advancing world of software development and cloud computing.
</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold' }}>
        <button onClick={video}>Explore our videos!</button>
      </div>
      </div>
      </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2>About Us</h2>
        <p> CodePro helps students elevate their coding skills through expert guidance and personalized feedback on programming assignments, empowering them to become a proficient programmers and achieve mastery in the art of coding.</p>
      </div>
      <img src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2022/11/03/133723601-6a292048-fbcd-44ef-942f-d3ec982f3757.jpg" alt="me"></img>
    </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2>Skills</h2>
        <p> Develop exceptional coding and problem-solving skills through challenging programming assignments, receiving detailed feedback to sharpen your abilities and excel in the world of programming.</p>
      </div>
      <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8" alt="me"></img>
    </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2>Study Body</h2>
        <p> The study body on our website encompasses a comprehensive range of educational content, resources, and interactive features tailored to facilitate effective learning, academic growth, and knowledge acquisition.</p>
      </div>
      <img src="https://img.freepik.com/premium-photo/software-developers-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-programmers-doing-teamwork_482257-33308.jpg" alt="me"></img>
      </div>
  </main>
  <footer className="footer">
    <div className="copy">© 2023 CodePro</div>
    <div className="bottom-links">
      <div className="links">
        <span>More Info</span>
        <a href={homePageUrl}>Home</a>
        <a href={assignmentsUrl}>Assignments</a>
        <a href={homePageUrl}>LogOut</a>
      </div>
       
    </div>
  </footer>
</body>
</main>
  );
}

export default StudentHome;
