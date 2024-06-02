import React from 'react';
// import { Link } from 'react-router-dom';
// import '././Home.css';
import { useNavigate } from 'react-router-dom';

function Videos() {
 const navigate = useNavigate();

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
      font-size: 19px;
      color: #d1d1d1;
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
      background-color: black;
      color: white;
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
   
    const Register = () => {
      navigate(`/register`);
     };

    const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';
  const cplus='/cvideos';
  const pPage='/pvideos';
  const java='/jvideos';
    return (


<main>
<style>{styles}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<body>
  <header className="header">
    <a href={homePageUrl} className="logo">CodePro</a>
    <nav className="nav-items">
      <a href={homePageUrl}>Home</a>
      <a href={assignmentsUrl}>Assignments</a>
     
    </nav>
  </header>
  <main>
    <div className="intro">
      <h1>View our videos now!</h1>
        </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>The Complete Python Course: Beginner to Advanced!</h2>
        <p> This comprehensive Python course takes you from a beginner level to an advanced level in Python programming. Learn the fundamentals of Python, explore advanced concepts, and gain practical skills through hands-on projects. Develop a strong foundation in Python and unlock a world of possibilities for web development, data analysis, machine learning, and more.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button><a href={pPage}>Explore Course</a></button>
      </div>
      </div>
      <img src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="me"></img>
    </div>

    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Java Programming Masterclass for Software Developers</h2>
        <p>Dive into the world of Java with this masterclass course. Designed for software developers, this course covers everything from Java basics to advanced topics, including object-oriented programming, multithreading, and database connectivity. Gain the skills and confidence to develop robust Java applications and set yourself on the path to becoming a proficient Java developer.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button><a href={java}>Explore Course</a></button>
      </div>
      </div>
      <img src="https://logowik.com/content/uploads/images/731_java.jpg" alt="me"></img>
    </div>

    <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Learn C++ Programming - Beginner to Advance - Deep Dive in C++</h2>
        <p> Explore the power of C++ programming with this in-depth course. Starting from the basics, you'll progress to advanced concepts, such as memory management, templates, and data structures. Build a solid understanding of C++ and unleash its potential for game development, system programming, and high-performance applications.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button><a href={cplus}>Explore Course</a></button>
      </div>
      </div>
      <img  style={{ width: '300px', height: '300px', marginRight: '120px',marginLeft: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="me"></img>
      </div>

      <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>C# Fundamentals: Development for Absolute Beginners</h2>
        <p> If you're new to programming, this course is an ideal starting point. Learn the fundamentals of C# programming, including syntax, control structures, and object-oriented programming principles. Develop a strong foundation in C# and gain the skills to build simple applications and pave the way for further exploration in the world of .NET development.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button>Register now!</button>
      </div>
      </div>
      <img style={{ width: '350px', height: '350px', marginRight: '80px' ,marginLeft: '50px' }}  src="https://images.saymedia-content.com/.image/t_share/MTc0NDczMTM4OTg0NDYxOTU4/a-brief-introduction-to-c.png" alt="me"></img>
      </div>

      <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>Python for Data Science and Machine Learning Bootcamp</h2>
        <p> This course is tailored for those interested in data science and machine learning with Python. Discover the essential libraries and tools for data analysis, visualization, and machine learning algorithms. Gain hands-on experience by working on real-world projects and unleash the power of Python in data-driven decision making.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button><a href={cplus}>Explore Course</a></button>
      </div>
      </div>
      <img style={{ marginRight: '80px'}} src="https://www.doit.com/wp-content/uploads/2022/10/img_machine-learning-319x350.png" alt="me"></img>
      </div>

      <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>JavaScript: Understanding the Weird Parts</h2>
        <p> Take your JavaScript skills to the next level with this course that delves into the intricacies and peculiarities of the language. Gain a deep understanding of JavaScript concepts, including closures, prototypal inheritance, and the "this" keyword. Strengthen your JavaScript skills and unlock the ability to write more efficient and effective code.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button><a href={cplus}>Explore Course</a></button>
      </div>
      </div>
      <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="me"></img>
      </div>

      <div className="about-me">
      <div className="about-me-text">
        <h2 style={{ textDecoration: 'underline' }}>CS50's Introduction to Computer Science</h2>
        <p>  Offered by Harvard University, this course provides a comprehensive introduction to computer science. Covering a wide range of topics, including algorithms, data structures, and web development, this course equips you with a solid foundation in computer science principles. Explore the world of programming and problem-solving through hands-on assignments and gain valuable insights into the field of computer science.</p>
        <div className="Bbutton"  style={{ fontWeight: 'bold', width: '150px', height:'50px', fontSize:'15px' }}>
        <button>Register now!</button>
      </div>
      </div>
      <img src="https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-789.jpg" alt="me"></img>
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

export default Videos;
