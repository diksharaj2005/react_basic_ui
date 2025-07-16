import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";

const Post = ({data,bgColor,color}) => {
    return (
        <>
            <div className="post_container"style={{backgroundColor:`${bgColor}`,color:`${color}`}}>
                <div className="person">
                    <div className="author">
                        <div className="img">
                            <img src={data.pImg} alt="" />
                        </div>
                        <div className="text">
                            <h3>{data.userName}</h3>
                            <p>{data.title}</p>
                        </div>
                    </div>
                    <div className="dot">
                        <HiOutlineDotsVertical />
                    </div>
                </div>
                <p>
                  {data.description}
                </p>
                <div className="post_img">
                    <img src={data.mImg} alt="" />
                </div>
                <div className="like_comment">
                    <div className="likes">
                        <FcLike className="items" />
                        {data.like}{" "}K
                    </div>
                    <div className="comments">
                        <FaComment className="items" />
                        {data.comment}{" "}K
                    </div>
                    <div className="share">
                        <FaShareNodes className="items" />
                         {data.share}{" "}k
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
