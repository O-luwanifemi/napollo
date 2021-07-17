import "./Package.css";
import brandLogo from '../../images/brandLogo.svg';

function Package() {
  return (
    <section id="packages">
      <h2>Choose Your Plan</h2>

      <div className="plans">
        <div className="lhs">
          <div className="brandBox">
            <img src={brandLogo} alt="brand logo" />
          </div>

          <h3 className="option">Free</h3>

          <span className="option__tagline">Enjoy unlimited online music</span>

          <h3 className="tariff"><span>$</span>7.99<span>/month</span></h3>

          <p className="cta">Start with one month free trial</p> <br />

          <span className="features">Features</span>

          <ul>
            <li><i className="fas fa-check"></i> Offline Mode</li>
            <li><i className="fas fa-check"></i> Online listening</li>
            <li><i className="fas fa-check"></i> No Ads</li>
            <li><i className="fas fa-check"></i> Regular Audio</li>
            <li><i className="fas fa-check"></i> Offline Mode</li>
            <li><i className="fas fa-check"></i> 30 Skips Per Day</li>
            <li><i className="fas fa-check"></i> With Ads</li>
          </ul>

          <p className="activateBtn"><a href="/">Activate</a></p>
        </div>

        <div className="rhs">
          <div className="brandBox">
            <img src={brandLogo} alt="brand logo" />
          </div>
          
          <h3 className="option">Premium</h3>

          <span className="option__tagline">Napollo premium makes sounds better</span>

          <h3 className="tariff"><span>$</span>7.99<span>/month</span></h3>

          <p className="cta">Start with one month free trial</p> <br />

          <span className="features">Features</span>

          <ul>
            <li><i className="fas fa-check"></i> Offline Mode</li>
            <li><i className="fas fa-check"></i> High Qulaity Audio</li>
            <li><i className="fas fa-check"></i> No Ads</li>
            <li><i className="fas fa-check"></i> Unlimited Skips</li>
            <li><i className="fas fa-check"></i> Offline Mode</li>
            <li><i className="fas fa-check"></i> High Qulaity Audio</li>
            <li><i className="fas fa-check"></i> No Ads</li>
            <li><i className="fas fa-check"></i> Unlimited Skips</li>
          </ul>

          <p className="activateBtn"><a href="/">Activate</a></p>
        </div>
      </div>
    </section>
  )
}

export default Package
