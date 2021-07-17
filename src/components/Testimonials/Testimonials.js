import './Testimonials.css';
import user from '../../images/Alan Walker.jpg';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <div className="cards">
        <div className="card_one">
          <h3>
            Being an artiste on Napollo has been a real game changer.
          </h3>

          <div className="details">
            <p className="name">
              Hanna Gosley
            </p>

            <p className="role">
              Pop Artiste
            </p>

            <div className="imgBlock">
              <img src={user} alt="testifier" />
            </div>
          </div>
        </div>

        <div className="card_two">
          <h3>
            Being an artiste on Napollo has been a real game changer.
          </h3>

          <div className="details">
            <p className="name">
              Jerome Alice
            </p>

            <p className="role">
              R&B/Soul
            </p>

            <div className="imgBlock">
              <img src={user} alt="testifier" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
