import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Post from "./components/Post";
import { data, data2 } from "./Data";



const App = () => {
  const [bgColor, setBgColor] = useState("#232D3f")
  const [color, setColor] = useState("white")
  const [toggle, setToggle] = useState(true)


  const toggleButton=()=>{
    setToggle(!toggle)
    if(toggle){
      setBgColor("rgb(255,255,255)")
      setColor("black")
      document.querySelector("body").style.backgroundColor = "#cbc5c5"
    }
    else{
      setBgColor("#232D3f")
      setColor("white")
      document.querySelector("body").style.backgroundColor = "black"
    }

  }
  return (
    <>
      <Navbar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} toggleButton={toggleButton} />
        </div>

        <div className="post_section">
          {data.map((d) => (
            <Post key={d.id} data={d} bgColor={bgColor} color={color} toggleButton={toggleButton} />
          ))}
        </div>

        <div className="right_bar">
        {data2.map((d) => (
  <Rightbar key={d.id} data={d} bgColor={bgColor} color={color} toggleButton={toggleButton} />
))}
        </div>
      </div>
    </>
  );
};

export default App;
