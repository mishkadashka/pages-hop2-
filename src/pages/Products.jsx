import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./header"
import Pro1 from '../picture/Ellipse.png';
import Pro2 from '../picture/Ellipse2.png';
import Big from "../picture/Rectangle2.png"
const Products = () => {
  const styles={
    pro:{
    display:"flex",
    felxDirection:"row",
    alignItems:'flex-end',
      height:"140px",
      marginLeft:"370px",
      marginRight:"370px",
      width:"900px"
    },
    text:{
      height: '959px',
width: '600px',
borderRadius: 'nullpx',
marginLeft:"370px",
marginRight:"370px",
lineHeight: '200%',
    },
    main:{
      display:"felx",
      justifyContent:"center",
      width:"100vw"
    }
}

  return(
    <div>
          <Header/>
          <div>
          <div>
            <h1 style={ {marginLeft:"370px",
      marginRight:"370px"}} >10 Secrets for managing a remote team </h1>
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
          <img src={Big} alt="" style={ {marginLeft:"270px",
      marginRight:"270px"}}/>
          <div style={styles.text}>
          If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!
<br></br>
<div></div>
In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.
<br></br>
Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
<br></br>
Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.
<br></br>
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 
<br></br>
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
<br></br>
         <div >
          <div  style={styles.pro} >
          <img src={Pro1} alt="" style={{
            height: '45px',
            width: '45px',
            margin:'20px'
          }}/>
          <div >
             <div style={{fontSize:'14px'}}>Written by</div>
             <div style={{fontSize:'24px'}}>Shedrack Eze</div>
             <div style={{color:"#989898"}}>CEO Team App</div>
           </div>
          </div>
          <hr ></hr>
          </div>
          </div>
          <div style={{marginLeft:"382px", marginRight:"382px", marginBottom:"50px"}}>
            <div style={{color:" #6D7D8B4"}}>Join the conversation</div>
            <div style={{display:'flex', flexDirection:'row'}}>
            <img src={Pro2} alt="" style={{
            height: '45px',
            width: '45px',
            margin:'20px'
          }}/>
          <input type="text" style={{ width:"630px", height:"148px", borderColor:"#BBC8D4"}} />
          </div>
          </div>
          </div>
    <Footer/>
    </div>
  )
 }




 export default Products;