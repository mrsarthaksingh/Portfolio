import "./contact.css";
import insta from"../../img/insta.jpg";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import{useRef,useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef()
  const [done,setDone] = useState(false)

  const handleSubmit = (e)=>{
      e.preventDefault();
      emailjs.sendForm(
          "service_tvnpyka",
           "template_r54rz9g",
            formRef.current, "user_ONEQGwfmNmoOd2hx6sFj3"
            )
          .then((result) => {
              console.log(result.text);
              setDone(true)
            
          }, (error) => {
              console.log(error.text);
              alert("Somthing Went Wrong...")
          });
  }
   
        return (
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <a href="https://www.instagram.com/mr_sarthak_singh/">  <img src={insta} alt="" className="c-icon" id="inst" /> </a>
                              
                                
                            </div>
                            <div className="c-info-item">
                                <a href="https://github.com/lordsarthak"><img className="c-icon" id="git" src={github} alt="" /></a>
                          
                            </div>
                            <div className="c-info-item">
                                <a href="https://www.linkedin.com/in/sarthak-singh-046316192"  ><img className="c-icon" id="link" src={linkedin}alt="" /> </a>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="c-right">
        
                        <p className="c-desc">
                            <b>Over here..</b>. 
                        </p>
        
                        <form ref ={formRef} onSubmit={handleSubmit}>
                            <input  type="text" placeholder="Name" name="user_name" />
                            <input  type="text" placeholder="Subject" name="user_subject" />
                            <input  type="text" placeholder="Email" name="user_email" />
                            <textarea  rows="4" placeholder="Message" name="message" />
                            <button>Submit</button>
                           {done && "Thank You..."}
                         
                        </form>
                    </div>
                </div>
            </div>
        );
        };
       

export default Contact



