import Fade from 'react-reveal/Fade';

import './CassetteBox.css';
import CassetteImg from '../../images/cassette.png';

function CassetteBox() {
  return (
    <section id="cassetteBox">
      <div className="lhs">
        <img src={CassetteImg} alt="audio cassette" />
      </div>

      <div className="rhs">
        <h2>
          Listen and enjoy <br />
          all trending music
        </h2>

        <Fade top cascade>
          <ul>
            <li>What's hot</li>
            <li>By genre</li>
            <li>By location</li>
            <li>Lots more...</li>
          </ul>
        </Fade>

        <Fade bottom>
          <p><a href="/">Start listening</a></p>
        </Fade>
      </div>
    </section>
  )
}

export default CassetteBox;
