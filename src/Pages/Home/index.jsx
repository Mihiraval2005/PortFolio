import "./style.css";
import Men_char from "../../assets/home_men_char.png";
import Click_menu from "../../assets/main-home-section.png";
// import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const index = () => {
  
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="contain">
      <div className="flex">
        <div className="left" title="Mihir Raval">
          <h2>
            I'am a <span className="highlight">Mihir Raval</span>
          </h2>

          <h1>
            My Proffesion is
            <span className="highlight"> Frontend Developer</span>
          </h1>
          <p>
            As a skilled frontend developer, I specialize in creating
            responsive, user-friendly websites using HTML, CSS, JavaScript, and
            React. I focus on clean, optimized code and seamless user
            experiences across devices, leveraging modern technologies and
            frameworks to bring creative ideas to life.
          </p>
          <button className="home-section1-btn">Know More</button>
        </div>
        <div className="right">
          <div className="img">
            <img src={Men_char} alt="character" />
          </div>
        </div>
        <div className="main-section-link" onClick={handleScroll}>
          <img src={Click_menu} alt="scroll" />
        </div>
      </div>
      <div className="flex" style={{ marginTop: "50px" }}>
        <div className="section" ref={sectionRef}>
          <h1>Why Work With Me ?</h1>
          <p>
            As a dedicated frontend developer with a strong foundation in HTML,
            CSS, JavaScript, and React, I am committed to delivering responsive
            and user-friendly web applications. My recent projects have honed my
            ability to translate design concepts into interactive, accessible,
            and performance-optimized digital experiences. I am passionate about
            continuous learning and staying updated with the latest industry
            trends, ensuring that I bring innovative solutions to every project.
            My collaborative approach and effective communication skills make me
            a valuable team player, ready to contribute to your organization's
            success.
          </p>
        </div>
        {/* <div className="right">
          <div className="img">
            <img src={Men_char} alt="character" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default index;
