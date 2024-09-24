import meter1 from "../assest/img/meter1.svg";
import meter2 from "../assest/img/meter2.svg";
import meter3 from "../assest/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assest/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><b>Programming Languages:</b>Java, C, and C++<br />
                        <b>Web Technologies:</b> HTML, CSS, JavaScript, react, Node.js, bootstrap<br />
                        <b>Developer Tools:</b> Git and GitHub <br />
                        <b>Database Management:</b>SQL, MySQL, mondoDB </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Img" />
                                <h5>Web Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Img" />  
                                <h5>Front-End Development
                                </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Img" />
                                <h5>Java Application Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Img" />
                                <h5>Git Hub</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Img" />
                                <h5>E-Commerce website design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  )
}