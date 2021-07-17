import EllieGoulding from '../../../images/Ellie Goulding.jfif';
import AlanWalker from '../../../images/Alan Walker.jpg';
import Powerful from '../../../images/Powerful.jpg';
import './CardsFrame.css';
import Card from '../../Card/unframed/Card';

function CardsFrame({ title }) {
  return (
    <section className="cardsFrame">
      <div className="top_row">
        <h4>{title}</h4>

        <span>View all <i className="fas fa-chevron-right"></i></span>
      </div>

      <div className="bottom_row">
        <Card 
          song_title="Death Bed" 
          artiste="Powerful" 
          likes="1.3k" 
          img={Powerful}
          icon_class="far fa-heart"
          likes_class="white"
        />
        <Card 
          song_title="Faded" 
          artiste="Alan Walker" 
          likes="1.4k" 
          img={AlanWalker} 
          icon_class="far fa-heart"
          likes_class="white"
        />
        <Card 
          song_title="Hate Me" 
          artiste="Ellie Goulding" 
          likes="1.6k" 
          img={EllieGoulding} 
          icon_class="fas fa-heart"
          likes_class="colored"
        />
      </div>
    </section>
  )
}

export default CardsFrame;