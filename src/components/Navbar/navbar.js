import logo from '../../images/brandLogo.svg';
import playStore_logo from '../../images/playstore.svg';
import upload_logo from '../../images/upload_.svg';
import './navbar.css';


function Navbar() {
  return (
    <header id="header">
      <div className="lhs">
        <i className="fas fa-bars"></i>
        <img src={logo} alt="brand logo" width="35" height="35" />
      </div>

      <div className="searchbar_box">
        <input type="search" name="search" placeholder="search for artistes, songs, albums" />
        <i className="fas fa-search"></i>
      </div>

      <section className="rhs">
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

        <div className="logRegUpload_box">
          <a href="/" className="lh_btns">
            <p>SignUp/Login</p>
          </a>

          <a href="/" className="rh_btns">
            <p><img src={upload_logo} alt="upload button icon" width="18" height="18" /> Upload</p>
          </a>
        </div>
      </section>
    </header>
  )
}

export default Navbar;
