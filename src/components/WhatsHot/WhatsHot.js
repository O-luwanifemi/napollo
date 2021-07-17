import './WhatsHot.css';
import CardsFrame from '../CardsFrame/unframed/CardsFrame';
import FrCardsFrame from '../CardsFrame/framed/FrCardsFrame';

function WhatsHot() {
  return (
    <section id="whatsHot">
      <div className="lhs">
        <h2 className="lhs_title">What's Hot!</h2>

        <CardsFrame title="Albums" />

        <div className="next">
          <i className="fas fa-chevron-right"></i>
        </div>

        <FrCardsFrame title="Singles & EPs" />
      </div>
    </section>
  )
}

export default WhatsHot;
