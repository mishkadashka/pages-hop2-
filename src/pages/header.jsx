import React from "react";
import logo  from "../picture/team.png";
const Header = () => {
    return (
<div style={{display:"flex",width:"100vw", justifyContent:"space-between", height:"100px",  alignItems:"center"}}>
  <img src={logo} alt="" style={{height:"30px", display:"flex",}}/>
  <div style={{display:'flex',width:"350px",flexDirection:'row', justifyItems:"space-evenly",margin:"10px"}}>
  <div style={{textDecoration: 'underline', margin:"10px"}}>
    Products
  </div >
  <div style={{textDecoration: 'underline', margin:"10px"}}>
  Service
  </div>
 <div style={{textDecoration: 'underline', margin:"10px"}}>
   Contact
  </div>
<div style={{textDecoration: 'underline', margin:"10px"}} >
    Log in 
  </div>
  </div>
</div>
    )
  }
  
  export default Header