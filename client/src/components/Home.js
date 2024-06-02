import React, {useState,  useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom';
import userrr from '../img/icons8-male-user-96.png';

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <a href={props.href} style={{ color: 'black' }}>{props.text}</a>
    </li>
  );
}

function Home() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
      margin-right: 80px;
    }

    .nav-items a {
      text-decoration: none;
      color: white;
      padding: 35px 20px;
    }

    .menu-trigger{
      position: absolute;
      top:20px;
      right:20px;
      height:60px;
      width:60px;
      border-radius:50%;
      overflow:hidden;
      cursor:pointer;
    }

    .dropdown-menu{
      position:absolute;
      top:100px;
      right:20px;
      background-color:#fff;
      border-radius:var(--border-radius);
      padding:10px 20px;
      width:200px;
    }

    .dropdown-menu::before{
      content:'';
      position:absolute;
      top:-5px;
      right:20px;
      height:20px;
      width:20px;
      backgroun: var(--secondare-bg);
      transform:rotate(45deg);
    }

    .dropdown-menu ul li{
      padding: 10px 0;
      border-top: 19x solid rgba(0,0,0,0.05);
    }

    .dropdown-menu ul li: hover a{
      color:rgb(212,33,9);
      cursor:pointer;
    }

    .dropdown-menu ul li: hover img{
      opacity:1;
      cursor:pointer;
    }

    h3{
      width:100%;
      text-align:center;
      font-size:18px;
      padding: 20px 0;
      font-weight:500;
      font-size:18px;
      color:var(--primary-text-color);
      line-height:1.2rem;
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
    `;
   
   
    /*const courses = () => {
      navigate(`/Courses`);
    };*/

    const courses = () => {
      navigate(`/signup`);
    };

    const UserLevels = () => {
      navigate(`/signup`);
     };

     /*const UserLevels = () => {
      navigate(`/UserLevels`);
     };*/

     
    const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';
  const user = '/signin';
  const sign = '/signup';
  const chat='/chat';
  

  const authContext=useContext(AuthContext);
    
    return (
<main>
<style>{styles}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<body>
  <header className="header">
    <a href={homePageUrl} className="logo">CodePro</a>
    <nav className="nav-items">
      <a href={homePageUrl}>Home</a>
     
      <div className='menu-container'>
        <div className='menu-trigger' onClick={toggleDropdown}>
    <img src={userrr} alt="User"/>
     </div>
     {showDropdown && (
     <div className='dropdown-menu'>
<h3>Profile</h3>
<ul>
{!authContext.token && <DropdownItem href={user} text={"Sign In"} />}
{!authContext.token && <DropdownItem href={sign} text={"Sign Up"} />}
<DropdownItem href={chat} text={"Chat"}/>           
           
            </ul>
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
        <a href={user}>Sign In</a>
        <a href={sign}>Sign Up</a>
      </div>
       
    </div>
  </footer>
</body>
</main>
  );
}

export default Home;
