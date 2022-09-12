import "./about.css";
import man from "../../img/man.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                     <img
                        src={man}
                        alt=""
                        className="a-img"
                    /> 
                     {/* <video className="video" src={man} autoPlay loop controls></video> */} */}
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title" >About Me</h1>
                <p className="a-sub">
                    I'm trying my Best to achive every possible things that i can't do....
                
                </p>
                <p className="a-desc">
                    My portfolio reflects everything I've learned and done during my time as a BCA student,and I'm  currently pursuing my MCA at a prestigious University, Savitribai Phule Pune University
                    <br/>
                    I enjoy building websites, Android applications, UX & UI, and trying to acquiring  new skills in my arsenal, and I am looking for freelance coding opportunities.
                </p>
           
            </div>
        </div>
    );
};

export default About;