import './Footer.css';
import brandLogo from '../../images/brandLogo.svg';
import playStore_logo from '../../images/playstore.svg';


function Footer() {
  return (
    <footer id="foot">
      <div className="lhs">
        <img src={brandLogo} alt="brand logo" />

        <p className="copyright">
          © 2021 O-luwanifemi
        </p>

        <ul>
          <li><a href="/">Legal</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Cookies</a></li>
        </ul>
      </div>

      <div className="mds">
        <ul>
          <li><a href="/">Napollo</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Sign Up</a></li>
          <li><a href="/">Forgot password</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        <ul>
          <li><a href="/">Artist Membership</a></li>
          <li><a href="/">Overview</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Opportunies</a></li>
          <li><a href="/">Shows</a></li>
          <li><a href="/">Help</a></li>
        </ul>

        <ul>
          <li><a href="/">Listener</a></li>
          <li><a href="/">Overview</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Suggested Playlists</a></li>
          <li><a href="/">Discover</a></li>
          <li><a href="/">Reviews</a></li>
        </ul>

        <ul>
          <li><a href="/">Listener</a></li>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Copyright policy</a></li>
          <li><a href="/">Cookies</a></li>
          <li><a href="/">Trademark</a></li>
        </ul>
      </div>

      <div className="rhs">
        <p>Follow us</p>

        <div className="sm">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>

        <p>Download App</p>

        <div className="downloadApp_box">
          <a className="lhsBtn_box" href="/">
            <i className="fab fa-apple"></i>

            <div className="btn_content">
              <span>Download on the</span>
              <p>App Store</p>
            </div>
          </a>

          <a className="rhsBtn_box" href="/">
            <img src={playStore_logo} alt="google playstore icon" width="17" height="17" />

            <div className="btn_content">
              <span>GET IT ON</span>
              <p>Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
