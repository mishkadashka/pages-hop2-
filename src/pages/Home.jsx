import React from 'react'
import Background from '../component/background.png';
import Simple from "../component/simple.png";
import Actually from "../component/actually.png";
import Meeting from "../component/meeting.png";
import Rating from "../rating/src/App";
import Footer from "./Footer";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const ACCESS_TOKEN = "6374b50a2dfe8ebc0d62ee22";
const API = "  https://dummyapi.io/data/v1/user?page=1&limit=10";

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"></link>
export const Home = () => {
  return (
    <div>
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${Background})`,
        //  backgroundSize: 'cover'
      }}>
         <div style={{
        fontFamily: 'Poppins',
        width: '514px',
height: '420px',
left: '124px',
top: '252px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '48px',
lineHeight: '56px',
color: '#FFFFFF',
display:"flex",
alignItems:"flex-end",
marginLeft:"200px"
    }}>
      Instant collaborations for remote teams
        </div>
        <div style={{
          fontFamily:"Quicksand",
          width: '323.85px',
          height:' 58px',
          left: '124px',
          top: '394px',
          fontStyle: 'normal',
          fontWeight:' 550',
          fontSize: '18px',
          lineHeight: "29px",
          display: 'flex',
          alignItems: 'center',
          color:' #FFFFFF',
          marginLeft:"200px"
        }}>
        All in one for your remote team chats, 
collaboration and track projects
        </div>
        <input spaceholder="Email" type='text'
        style={{
          boxSizing: 'border-box',
          left: "0%",
right: "0%",
top: "0%",
bottom: "0%",
background: "#FFFFFF",
border: "2px solid #BBC8D4",
borderRadius: "4px",
marginLeft:"200px",
height: '56px',
width: '317px',
left: '0px',
top:' 0px',
borderRadius: '4px',
        }}/>
        <button style={{
          backgroundColor:"#0BBEF2",
          height: '56px',
width: '164px',
left: '0px',
top: '0px',
borderRadius: '4px',
marginLeft:"50"
        }}>Get early access</button>
      </div>
      


  <div 
  style={{
    //  marginTop:"5px",
    // width:"100%",
    display:"flex",
    flexDirection:"column",
  }}
  > 
<div
style={{
  marginTop:"5px",
  width:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"
}}
>
  <div
  style = {{
    display:"flex",
    flexDirection:"column",
  }}
  >
    <div
    style={{
      marginTop:"10px",
      width: '898px',
height: '220px',
left: '140px',
top:' 1136px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '78px',
lineHeight: '60px',
display: 'flex',
alignItems: 'center',
color: '#000000',
marginLeft:'10px'
    }}>
    Your Hub for teamwork</div>
    <div
    style={{
      width: '865px',
height: '145px',
left: '140px',
top: '1286px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '28px',
lineHeight: '29px',
display: 'flex',
alignItems: 'center',
color: '#182D40',
    }}
    >Give everyone you work with—inside and outside 
      your company—a more productive way to stay in sync. 
      Respond faster with emoji, keep conversations 
      focused in channels, and simplify all 
      your communication into one place.</div>
      <fdiv></fdiv>
      <div
      style={{
width:' 137px',
height: '28px',
left: '142px',
top: '1471px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '26px',
lineHeight: '28px',
display: 'flex',
alignItems: 'center',
textDecorationLine: 'underline',
color: '#4DA0FD',
      }}
      >Learn more</div>
  </div>
 <img src={Meeting} alt=""  style={{ 
      width: '1000px',
      height:' 705px',
      left: '833px',
      top: '960px',
      filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))',
      borderRadius: '20px',
    }} />
  </div>
</div>

<div
style={{
  width:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"
}}
>
  <div>
    <img src={Simple} alt="" 
    style={{
      width: '675px',
height: '675px',
left: '557px',
top: '1804px',
marginLeft:'10px'
    }}
    />
  </div>
  <div
    style = {{
      display:"flex",
      flexDirection:"column",
    }}
  >
  <div
  style={{
    marginTop:"10px",
    width: '898px',
height: '220px',
left: '140px',
top:' 1136px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '78px',
lineHeight: '60px',
display: 'flex',
alignItems: 'center',
color: '#000000',
  }}
  >Simple task management</div>
  <div
  style={{
    width: '865px',
    height: '145px',
    left: '140px',
    top: '1286px',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'center',
    color: '#182D40',
  }}
  >Give everyone you work 
    with—inside and outside your 
    company—a more productive way 
    to stay in sync. Respond faster
     with emoji, keep conversations
      focused in channels, and 
      simplify all your communication
       into one place.</div>
       <div
       style={{
        width:' 137px',
        height: '28px',
        left: '142px',
        top: '1471px',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '26px',
        lineHeight: '28px',
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#4DA0FD',
              }}
       >Learn more</div>
</div>
</div>
<div
style={{
  width:"100%", 
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"
}}>
  <div   style = {{
    display:"flex",
    flexDirection:"column",
    width:"50%"
  }}>
  <div
  style={{
    marginTop:"10px",
    width: '898px',
height: '220px',
left: '140px',
top:' 1136px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '78px',
lineHeight: '60px',
display: 'flex',
alignItems: 'center',
color: '#000000',
marginLeft:'10px'
  }}
  >Scheduling that actually works</div>
  <div
  style={{
    width: '865px',
height: '145px',
left: '140px',
top: '1286px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '28px',
lineHeight: '29px',
display: 'flex',
alignItems: 'center',
color: '#182D40',
  }}
  >Give everyone you work with—inside 
    and outside your company—a more productive
     way to stay in sync. Respond faster with
      emoji, keep conversations focused in 
      channels, and simplify all your communication
       into one place.</div>
       <div
       style={{
        width:' 137px',
height: '28px',
left: '142px',
top: '1471px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '26px',
lineHeight: '28px',
display: 'flex',
alignItems: 'center',
textDecorationLine: 'underline',
color: '#4DA0FD',
              }}
       >Learn more</div>
       </div>

<div >
  <img src={Actually} alt=""
  style={{
    width: '675px',
height: '675px',
left: '743px',
top: '2531px',
  }}
  />
</div>
</div>


<Rating/>
<Footer/>

  </div> 
  )
}