import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function PythonPage() {
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
   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png");
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

   
    const Register = () => {
      navigate(`/register`);
     };

    const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';

  const chat='/chat';
    
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
      <h1>Python Courses</h1>
        </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Introduction To Python Programming</h2>
        <p>A Quick And Easy Intro to Python Programming</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <a href="https://www.udemy.com/course/pythonforbeginnersintro/" target="_blank" rel="noopener noreferrer">
      <button>Enroll now!</button></a>
      </div>
      </div>
      <img src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="me"></img>
    </div>

    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Introduction To Python Programming</h2>
        <p>This beginner-friendly course introduces you to the world of Python, equipping you with fundamental programming skills.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px'}}>
        <a href="https://www.udemy.com/course/introduction-to-python-for-beginners/" target="_blank" rel="noopener noreferrer">
      <button>Watch now!</button></a>
      </div>
      </div>
      <img src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="me"></img>
      </div>

    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Python For Beginners(2023)</h2>
        <p>A beginner Python course covering all of the basics you need to know</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <a href="https://www.udemy.com/course/python-for-complete-beginners-1/" target="_blank" rel="noopener noreferrer">
      <button>Enroll now!</button></a>
      </div>
      </div>
      <img src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="me"></img>
    </div>

    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Python OOP : Object Oriented Programming in Python</h2>
        <p>Python Object Oriented programming OOP advanced / Scripting for projects / automation / interview questions / beginners</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <a href="https://www.udemy.com/course/object-oriented-python-programming/" target="_blank" rel="noopener noreferrer">
      <button>Watch now!</button></a>
      </div>
      </div>
      <img src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="me"></img>
      </div>

      
  </main>
  <footer className="footer">
    <div className="copy">© 2023 CodePro</div>
    <div className="bottom-links">
      <div className="links">
        <span>More Info</span>
        <a href={homePageUrl}>Home</a>
        <a href={assignmentsUrl}>Assignments</a>
      </div>
       
    </div>
  </footer>
</body>
</main>

  );
}

export default PythonPage;
