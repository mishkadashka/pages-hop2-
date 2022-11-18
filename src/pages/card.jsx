import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Img1 from '../picture/Rectangle.png';
import Pro1 from '../picture/Ellipse.png';


const Card =()=> {
    const styles={
        pic1:{
        height: '147px',
        width: '360px',
        left:' 0px',
        top: '0px',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',

        // backgroundImage: `url(${Img1})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'auto',
        },
        pro:{
        display:"flex",
        felxDirection:"row",
        alignItems:'flex-end',
          height:"140px"
        },
        color:{
            color:" #6D7D8B"
        }
    }
return(
<div style={{
    width: '363px',
    height: '440px',
    // left: '142px',
    background: '#FFFFFF',
    borderRadius:' 30px',
    border:'1px solid black',
    }}>
        <div style={styles.out}>
            <img src={Img1} style={styles.pic1}/>
        </div>
        <h3>The Emotional Toll of Being in UX</h3>
        There are times when our work impacts 
        us deeply — sometimes in ways we neither 
        acknowledge nor understand
        <br></br>
        <div  style={styles.pro} >
          <img src={Pro1} alt="" style={{
            height: '45px',
            width: '45px',
            margin:'20px'
          }}/>
          <div style={{
            display:"flex",
            felxDirection:"row",
                alignItems:"center",
                height:"90px"
             }}>
             <div style={styles.color}>Wade Waren</div>
             <div style={styles.color}>⎮</div>
             <div style={styles.color}>2nd January, 2022</div>
           </div>
        </div> 
        </div>
)}

 export default Card;