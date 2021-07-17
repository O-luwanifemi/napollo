import Fade from 'react-reveal/Fade';

import './Expansion.css';
import pic from '../../images/Alan Walker.jpg';

function Expansion() {
  return (
    <section id="expansionBox">
      <div className="expansionBox__content">
        <div className="content__head">
          <h2 className="content__headTitle">Expansion Page</h2>
          <p className="content__headParagraph">
            Discover artistes all around the world by <br />
            their location via the expansion page. Also, <br />
            get to know the top artistes in any location <br />
            on the globe.
          </p>
        </div>

        <Fade left cascade>
          <div className="content__body">
            <div className="content__body__firstRow">
              <div className="content__body_lhs">
                <h3>01</h3>
                
                <div className="image_box">
                  <img src={pic} alt="" />
                </div>
                
                <div className="details">
                  <p>Lights Out</p>
                  <p>ColdPlay</p>
                </div>
              </div>

              <i className="fas fa-heart"></i>
            </div>

            <div className="content__body__secondRow">
              <div className="content__body_lhs">
                <h3>02</h3>

                <div className="image_box">
                  <img src={pic} alt="" />
                </div>

                <p>Green Tuska</p>
              </div>

              <i className="fas fa-heart"></i>
            </div>

            <div className="content__body__thirdRow">
              <div className="content__body_lhs">
                <h3>03</h3>

                <div className="image_box">
                  <img src={pic} alt="" />
                </div>

                <p>Bruno Mars</p>
              </div>

              <i className="fas fa-heart"></i>
            </div>

            <div className="content__body__fourthRow">
              <div className="content__body_lhs">
                <h3>04</h3>

                <div className="image_box">
                  <img src={pic} alt="" />
                </div>

                <p>Cardi</p>
              </div>

              <i className="fas fa-heart"></i>
            </div>
          </div>
        </Fade>
      </div>

      
    </section>
  )
}

export default Expansion;