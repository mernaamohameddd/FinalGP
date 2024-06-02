import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { text: input, user: 'user' }]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:3001/chat/message', { message: input });

      setMessages([...messages, { text: response.data.message, user: 'bot' }]);
    } catch (error) {
      console.error(error);
    }
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

  .Message-header{
      display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-family: 'Sriracha', cursive;
    text-decoration: none;
    margin-left: 650px;
    font-size: 19px;

  }
  .chat-container {
      position: fixed;
      bottom: 0;
      left: 9px;
      width: 1468px;
      height: 649px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }

    .chat {
      height: 200px;
      overflow-y: auto;
      padding: 10px;
    }
    
    .user {
      color: blue;
    }
    
    .bot {
      color: green;
    }

    .input-container {
      position: fixed;
      bottom: 1px;
      
    }
    
    input {
      flex: 1;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
      width: 1400px;
    }
    

    button{
      background-color: #5edaf0;
    color: #000;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
    
    }

  `;

  const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';
  
  
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
    <div className="chat-container">
        <h2 className="Message-header">ChatGPT Message</h2>
      <div className="chat">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </main>
    
</body>
</main>
  );
};

export default Chat;
