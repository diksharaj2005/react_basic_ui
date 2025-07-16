import React from 'react';
import { IoHomeSharp, IoNotificationsCircle, IoLogOut } from "react-icons/io5";
import { FaShoppingBag, FaWallet } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({bgColor,color}) => {
  return (
    <>
      <div className="side_bar_content" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
        <div className="top_content">
          <div className="items"><IoHomeSharp className="icon" /><span>Home</span></div>
          <div className="items"><IoNotificationsCircle className="icon" /><span>Notification</span></div>
          <div className="items"><FaShoppingBag className="icon" /><span>Shop</span></div>
          <div className="items"><BiSolidConversation className="icon" /><span>Conversation</span></div>
          <div className="items"><FaWallet className="icon" /><span>Wallet</span></div>
          <div className="items"><MdSubscriptions className="icon" /><span>Subscription</span></div>
          <div className="items"><CgProfile className="icon" /><span>My Profile</span></div>
        </div>
        <div className="bottom_content items"><IoLogOut className="icon" /><span>Log Out</span></div>
      </div>
    </>
  );
};

export default Sidebar;
