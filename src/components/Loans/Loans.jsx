import './Loans.css';
import { iconsImgs } from '../../utils/images';
 
const Loans = () => {
    return (
        <div className='main-content__grid-two__subgrid__item grid-common grid-c7'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Loans</h3>

                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>

            <div className="grid-c7__content">
                <div className="grid-c7__content__progress-bar">
                    <div className="grid-c7__content__progress-bar__percent">
                        <svg>
                            <circle cx={105} cy={105} r='50'></circle>

                            <circle cx={105} cy='105' r='50' style={{ '--percent': '50' }}></circle>
                        </svg>

                        <div className="grid-c7__content__progress-bar__number">
                            <h3>50<span>%</span></h3>
                        </div>
                    </div>
                </div>

                <ul className="grid-c7__content__data-list">
                    <li className="grid-c7__content__data-list-item text-silver-v1">
                        <span className="data-list-item__text">
                            Savings
                        </span>
                        <span className="data-list-item__value">
                            $ 500,000
                        </span>
                    </li>

                    <li className="grid-c7__content__data-list-item text-silver-v1">
                        <span className="data-list-item__text">
                            Target Reached
                        </span>
                        <span className="data-list-item__value">
                            $ 250,000
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Loans
