import './Cards.css';
import { iconsImgs } from '../../utils/images'

const Cards = () => {
    return (
        <div className='grid-one-item grid-common grid-c1'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Cards</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="addIcon" />
                </button>
            </div>

            <div className="grid-c1__content">
                <p>Balance</p>
                <div className="lg-value">$22, 000</div>

                <div className="grid-c1__content__pin">
                    <span className="grid-c1__content__pin-hidden">
                        **** **** ****
                    </span>
                    <span>1234</span>
                </div>

                <div className="grid-c1__content__expiry">
                    <div>
                        <p className="text text-silver-v1 grid-c1__content__expiry-text">
                            Expires
                        </p>
                        <p className="text text-sm text-white ">
                            12/22
                        </p>
                    </div>

                    <div className="grid-c1__content__expiry-logo">
                        <div className="logo-shape1"></div>
                        <div className="logo-shape2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
