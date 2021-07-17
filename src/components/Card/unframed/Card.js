import './Card.css';
import brandLogo from '../../../images/brandLogo.svg';

function Card({ song_title, artiste, likes, img, icon_class, likes_class }) {
  return (
    <section className="song_card">
      <div className="song_card_img">
        <img src={img} alt={song_title} />

        <div className="brand_logo">
          <img src={brandLogo} alt="brand logo" />
        </div>
      </div>

      <div className="song_card_title_row">
        <p>{song_title}</p>
        <i className={icon_class}></i>
      </div>

      <div className="song_card_artiste_row">
        <p>{artiste}</p>
        <h4 className={likes_class}>{likes}</h4>
      </div>
    </section>
  )
}

export default Card;