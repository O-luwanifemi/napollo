import Fade from 'react-reveal/Fade';

import './Hero.css';
import user from '../../images/woman.png';


function Hero() {
  return (
    <section id="hero_box">
      <div className="hero_box__content">
        <h1>
          More fans, More Gigs, Less Effort <br />
          Get better feedback, wider <br />
          exposure and deeper industry <br />
          access without ever switching <br />
          tabs.
        </h1>

        <Fade bottom>
          <p className="hero_box__content__btn">
            <a href="/" >Let's Get Started</a>
          </p>
        </Fade>
      </div>
      
      <img src={user} alt="user listening to songs on napollo" />
    </section>
  )
}

export default Hero;
