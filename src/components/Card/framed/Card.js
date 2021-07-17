import './Card.css';
import brandLogo from '../../../images/brandLogo.svg';

function FrCard({ song_title, artiste, likes, img, icon_class, likes_class, show_class }) {
  return (
    <section className="fr_song_card">
      <div className="fr_song_card_img">
        <img src={img} alt={song_title} />

        <div className={show_class}>
          <img src={brandLogo} alt="brand logo" />
        </div>
      </div>

      <div className="fr_song_card_title_row">
        <p>{song_title}</p>
        <i className="far fa-heart"></i>
      </div>

      <div className="fr_song_card_artiste_row">
        <p>{artiste}</p>
        <h4 className={likes_class}>{likes}</h4>
      </div>
    </section>
  )
}

export default FrCard;