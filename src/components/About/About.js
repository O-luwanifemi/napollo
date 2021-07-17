import Fade from 'react-reveal/Fade';

import './About.css';
import brandLogo from '../../images/brandLogo.svg';

function About() {
  return (
    <section id="about_box">
      <div className="lhs">
        <h2 className="lhs_title">About Napollo</h2>

        <div className="lhs_body">
          <Fade top>
            <p>
              Napollo is a music streaming service that <br />
              connects artistes to listeners in a way that <br />
              has never been done before.
            </p>
          </Fade>

          <Fade top>
            <p>
              Artists, musicians, music lovers, producers, <br />
              no matter your taste or skills are, we are <br />
              here to serve you the best all around the <br />
              world.
            </p>
          </Fade>
        </div>
      </div>

      <div className="rhs">
        <img src={brandLogo} alt="brand logo" />
      </div>
    </section>
  )
}

export default About;
