import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userrr from '../img/icons8-male-user-96.png';

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <a href={props.href} style={{ color: 'black' }}>{props.text}</a>
    </li>
  );
}
const RetieveStudentForm = () => {
  const [student, setStudents] = useState([]);
  
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/auth/students');
      console.log('Response:', response.data); 
      setStudents(response.data); 
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navigate = useNavigate();
  

  const handleLogout = () => {
    navigate('/');
  };

 
  const styles = `

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
    justify-content: left;
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
    color: black;
    margin: 10px 0;
    font-weight: bold;
  }
 
  .about-me-text {
    text-align: right; 
  }
  
  .about-me-text ul {
    padding: 0;
    margin: 0;
  }
  
  .about-me-text li {
    list-style: none; 
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .b {
    background-color: #5edaf0;
    color: #000;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4);
    margin-left:900px;
    margin-bottom: 15px;
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
   const addcourse = '/';
   //const chat='/chat';
const chatt=()=>{
  navigate(`/chat`);
}

   const feedback = () => {
    navigate(`/Feedback`);
  };


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
<DropdownItem href={addcourse} text={"Add Courses"}/> 
<DropdownItem href={chatt} text={"Chat"}/>           
<DropdownItem onClick={handleLogout} text={"Logout"}/>           
            </ul>
     </div>
     )}
     </div>
    </nav>
    </header>
      <main>
        <div className="intro">
          <h1>Students</h1>
            </div>
            <div className="about-me">
      <div className="about-me-text">
      <ul>
      {student.map((username, index) => (
              <li key={index}>
                <p>Username: {username}</p>
                <button className="b" onClick={feedback}>View Student's Code</button>
                <hr />
              </li>
            ))}
      </ul>
      </div>
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
};

export default RetieveStudentForm;
