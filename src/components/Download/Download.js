import './Download.css';
import handPhone from '../../images/handHeld.png';
import brandLogo from '../../images/brandLogo.svg';
import playStore_logo from '../../images/playstore.svg';

function Download() {
  return (
    <section id="download">
      <div className="lhs">
        <img src={handPhone} alt="napollo on mobile phone" />
        <img src={brandLogo} alt="brand logo on phone" />
      </div>

      <div className="rhs">
        <h2>
          Download our iOS <br />
          and Android apps <br />
          <span>for Free</span>
        </h2>

        <p>
          Downloaded over 10 million times in less than six <br />
          months, our cross-platform app allows you to listen to, <br />
          discover, favorite, and share music on the go.
        </p>

        <div className="downloadApp_box">
          <a className="lhsBtn_box" href="/">
            <i className="fab fa-apple"></i>

            <div className="btn_content">
              <span>Download on the</span>
              <p>App Store</p>
            </div>
          </a>

          <a className="rhsBtn_box" href="/">
            <img src={playStore_logo} alt="google playstore icon" />

            <div className="btn_content">
              <span>GET IT ON</span>
              <p>Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Download;
