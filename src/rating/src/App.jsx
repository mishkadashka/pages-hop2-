import React from "react";
import Picture from "./pic.png";
import St from "./star.png";
import Photo from "./Rectangle.png";
import Str from "./blackstar.png"
import {useState} from "react";

const styles = {
  text:{
width: "291px",
height: "154px",
fontFamily: 'Mulish',
fontStyle: "normal",
fontWeight: "600",
fontSize: "18px",
lineHeight: "29px",
color: "#000000",
marginLeft:"45px"
  },
  name:{
width: "150px",
height: "60px",
fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "600",
fontSize: "20px",
lineHeight: "29px",
display: "flex",
alignItems: "center",
color: "#000000",
display:"flex",
alignItems:"center"

  },
picture:{
  width: "56px",
height: "56px",
padding:"5px"
},
star:{
width:"35px",
height:"35px",
marginLeft:"5px"
},
border:{
  width: "366px",
height: "374px",
border:"1px solid white",
boxShadow: "5px 10px 18px #888888",
leftPadding:"50px",
topPadding:"50px",
display:"flex",
flexDirection:"column",
justifyContent:"center",
backgroundColor:"white"
},
footer:{
  display:"flex", 
  flexDirection:"row",
  marginLeft:"45px"
},
header:{
  display:"flex",
  flexDirection:"row"
},
photo:{
  width:"370px",
  height:"147px",
  borderRadius: "30px"
},
box:{
width: "370px",
height: "440px",
borderRadius: "30px",
backgroundColor:"white"
},
title:{
  width: "330.01px",
height: "58px",
fontFamily:  'Mulish',
fontStyle: "bold",
fontWeight: "500",
fontSize: "24px",
lineHeight: "29px",
display: "flex",
alignItems: "center",
color: "#25313C",
marginLeft:"50px"
},
comment:{
  width: "318.33px",
height: "84px",
fontFamily:  'Cabin',
fontStyle: "normal",
fontWeight: "600",
fontSize: "14px",
lineHeight: "21px",
display: "flex",
alignItems: "flex-end",
color: "#25313C",
marginLeft:"40px"
},
name2:{
  width: "229px",
height: "60px",
fontFamily: 'Mulish',
fontStyle: "normal",
fontWeight: "600",
fontSize: "13px",
lineHeight: "150.6%",
display: "flex",
alignItems: "center",
color: "#6D7D8B",
},
date:{
  width: "134px",
height: "60px" ,
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight:'600',
fontSize: '13px',
lineHeight: '150.6%',
display: 'flex',
alignItems: 'center',
color: '#6D7D8B',
},
column:{
  width: '3.89px',
height: '21px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '14px',
lineHeight: '21px',
display: 'flex',
alignItems: 'center',
color: '#BBC8D4',

},
footer2:{
  display:"flex", 
  flexDirection:"row",
  justifyContent:"space-evenly"
},
big:{
  width:"100vw",
  height:"100vh",
  display:"flex", 
  flexDirection:"row",
  justifyContent:"space-evenly",
  alignItems:"center",
  backgroundColor:" #F5F5F5"
},
row:{
  display:"flex",
  flexDirection:"row",
  justifyContent:'center'
}
}


const Star =(props) => {

  const activeArray = new Array(props.active).fill(St);
  const unActive = 5 - props.active;
  const unactiveArray = new Array(unActive).fill(Str);
  const array = activeArray.concat(unactiveArray);

  return(
    <>
      {array.map((e, index) => {
        return (
          <img id={index} src={e} alt="" style={styles.star} onClick={(e) => props.onChange(e.target.id)} />
        )
      })}
    </>
  )

}
const Card1 = (props) => {
 

  const [aaa, setAaa] = useState(0);

  const changeState = (e) => {
       const b = parseInt(e) + 1;
       setAaa(b);
  }
  
  return (
    <div style={styles.big}>
<div style={styles.border}>
<div style={styles.row}>
    <Star number={5} active={aaa} onChange={(e) => changeState(e)} />
</div>
    <p></p>
    <div style={styles.text}>
      Give everyone you work with—inside 
      and outside your emoji, keep conversations 
      focused in channels, and simplify all your 
      communication into one place.
    </div>
    <p></p>
    <div style={styles.footer}>
    <img src={Picture} alt="" style={styles.picture}/>
    <div style={styles.name}>
      Amy Klassen
    </div> 
    </div>
  </div>
  </div>
  )
}

const Card2 = (props) => {
  return ( 
    <div style={styles.big}>
<div style={styles.box}>
<img src={Photo} alt="" style={styles.photo} />
<p></p>
<div style={styles.title}>
Data-Driven Design is Killing Our Instincts
</div>
<p></p>
<div style={styles.comment}>
Our latest updates and blogs about managing your team
<br></br>
Our latest updates and blogs about managing your team
</div>
<p></p>
<div style={styles.footer2}>
<img src={Picture} alt="" style={styles.picture}/>
<div style={styles.name2}>
Jane Cooper
</div>
<div style={styles.date}>
2nd January,2022
</div>
</div>
 </div>
 </div>
  )
}

export default Card1;



