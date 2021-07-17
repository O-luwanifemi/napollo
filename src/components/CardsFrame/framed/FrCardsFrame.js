import EllieGoulding from '../../../images/Ellie Goulding.jfif';
import AlanWalker from '../../../images/Alan Walker.jpg';
import Powerful from '../../../images/Powerful.jpg';
import './FrCardsFrame.css';
import FrCard from '../../Card/framed/Card';


function FrCardsFrame({ title }) {
  return (
    <section className="fr_cardsFrame">
      <div className="fr_top_row">
        <h4>{title}</h4>

        <span>View all <i className="fas fa-chevron-right"></i></span>
      </div>

      <div className="fr_bottom_row">
        <FrCard 
          song_title="Let's Dance" 
          artiste="Bowie"
          likes="1.3k" 
          img={Powerful}
          likes_class="white"
          show_class="fr_brand_logo"
        />
        <FrCard 
          song_title="Bad Romance" 
          artiste="Rihanna"
          likes="1.3k" 
          img={AlanWalker}
          likes_class="white"
          show_class="hide"
        />
        <FrCard 
          song_title="Fly" 
          artiste="Coldplay"
          likes="1.3k"
          img={EllieGoulding}
          likes_class="white"
          show_class="hide"
        />
      </div>
    </section>
  )
}

export default FrCardsFrame;