import React from 'react'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const Rightbar = ({data,bgColor,color}) => {
  return (
    <>
    <div className="right_container" style={{backgroundColor:`${bgColor}`,color:'white'}}>
      <div className="postImg">
      <img id= '_img'src={data.img} alt="" />
        <div className="inside_img">
          <div className="img">
             <img src={data.authorImg} alt="" />
          </div>
        <div className="text">
          <h3>{data.authorName}</h3>
          <p>{data.authortext}</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar