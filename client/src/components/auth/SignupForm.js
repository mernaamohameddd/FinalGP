import { useForm } from 'react-hook-form';
import FormInputError from '../../UI/form/FormInputError';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import { useContext } from 'react';
const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const submitHandler = async (formData) => {
    try {
      console.log(formData);
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const authContext=useContext(AuthContext);
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
    height: 450px;
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
    background-color: black;
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

  /* Form styles */
  form {
    background-color: #fff; /* Match form background color */
    padding: 10px; /* Add padding for spacing */
    border-radius: 10px; /* Add border radius for rounded corners */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
    max-width: 500px; /* Limit form width */
    margin: 0 auto; /* Center align form */
  }

  form label {
    font-weight: bold;
    margin-bottom: 5px; /* Add spacing between label and input */
    display: block; /* Make labels block-level for better spacing */
  }

  form input[type="text"],
  form input[type="password"],
  form input[type="email"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px; /* Add spacing between inputs */
    border: 1px solid #ccc; /* Match input border color */
    border-radius: 5px; /* Match input border radius */
    box-sizing: border-box;
  }

  form button[type="submit"] {
    background-color: #000; /* Match button background color */
    color: #fff; /* Match button text color */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  form button[type="submit"]:hover {
    background-color: #333; /* Darken button color on hover */
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .signin-link {
    text-decoration: none;
    color: #333; /* Adjust color as needed */

    padding: 100px;
  }
  `;
 
  const Register = () => {
    navigate(`/register`);
   };

  const homePageUrl = '/';
const assignmentsUrl = '/Landing1';
const user = '/signin';
  return (


<main>
<style>{styles}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<body>
<header className="header">
  <a href={homePageUrl} className="logo">CodePro</a>
  <nav className="nav-items">
    <a></a>
    <a></a>
  </nav>
</header>
<main>
      <br></br>
    <form
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: '25px' }}>SIGN UP</h1>
      <label htmlFor="Username">Username</label>
      <input
        label="Username"
        type="text"
        name="Username"
        {...register("Username", { required: true })}
      />
      {formState.errors.username && (
        <FormInputError>Username must not be empty.</FormInputError>
      )}
      <br></br>
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        name="Password"
        {...register("Password", { required: true })}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}
      <br></br>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="Name"
        {...register("Name", { required: true })}
      />
      {formState.errors.name && (
        <FormInputError>Name must not be empty</FormInputError>
      )}
      <br></br>
      <label htmlFor="Role">Role</label>
      <input
        type="text"
        name="Role"
        {...register("Role", { required: true })}
      />
      {formState.errors.name && (
        <FormInputError>Role must not be empty</FormInputError>
      )}
      <br></br>
      
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="Email"
        {...register("Email", { required: true })}
      />
      {formState.errors.username && (
        <FormInputError>Email must not be empty.</FormInputError>
      )}
      <br></br>
      
      <button type="submit" >Signup</button>
      {!authContext.token && (
            <a href={user} className="signin-link">Already Have an Account!</a>
          )}
    </form>
    <br></br>
  </main>
  <footer className="footer">
    <div className="copy">© 2023 CodePro</div>
    <div className="bottom-links">
      <div className="links">
        <span></span>
        <a ></a>
        <a ></a>
      </div>
       
    </div>
  </footer>
</body>
</main>
  );
};

export default SignupForm;
