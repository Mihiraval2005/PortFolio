import "./style.css";
import Men_char from "../../assets/home_men_char.png";
import Click_menu from "../../assets/main-home-section.png";
const index = () => {
  return (
    <div className="contain">
      <div className="flex">
        <div className="left" title="Mihir Raval">
          <h2>
            I'am a <span className="highlight">Mihir Raval</span>{" "}
          </h2>

          <h1>
            My Proffesion is
            <span className="highlight"> Frontend Developer</span>{" "}
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
            <img src={Men_char} alt="" />
          </div>
        </div>
      </div>
      <div className="main-section-link">
        <img src={Click_menu} alt="" />
      </div>
    </div>
  );
};

export default index;
