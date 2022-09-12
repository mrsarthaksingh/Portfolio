import "./intro.css"
import my from "../../img/my.png"
import videos from "../../video/vid.mp4"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left" >
                <div className="i-left-wrapper">
                    <h2 className="i-intro"> Hello, I'm  </h2>

                    <h1 className="i-name">Sarthak Singh</h1>

                    <div className="i-title">

                        <div className="i-title-wrapper">

                            <div className="i-title-item"> Web Devloper </div>
                            <div className="i-title-item"> Android Devloper </div>
                            <div className="i-title-item"> Content Creater </div>
                            <div className="i-title-item"> UX&UI </div>
                         </div>

                    </div>
                </div>
               
          
            </div>
            
            {/* right side */}


            <div className="i-right" >
                <div className="i-bg">



                    <video className="video" loop muted autoPlay="autoplay">
                        <source src={videos} type="video/mp4" />
                    </video>


                </div>
            </div>

        </div>

    )
}

export default Intro
