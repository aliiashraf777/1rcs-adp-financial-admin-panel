import './Savings.css'
import { iconsImgs, personsImgs } from '../../utils/images'
import { savings } from '../../data/data'
 
const Savings = () => {
    return (
        <div className='grid-two__subgrid-item grid-common grid-c6'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Savings</h3>

                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>

            <div className="grid-c6__content">
                <div className="grid-c6__content__savings">
                    {
                        savings.map((saving) => (
                            <div
                                className="grid-c6__content__savings-box"
                                key={saving.id}
                            >
                                <div
                                    className="grid-c6__content__savings-box__profile"
                                >
                                    <div
                                        className="grid-c6__content__savings-box__profile-text"
                                    >
                                        <div className="avatar img-fit-cover">
                                            <img src={personsImgs.person_one} alt="person" />
                                        </div>

                                        <div className="text text-silver-v1">
                                            {saving.title}
                                        </div>
                                    </div>

                                    <div
                                        className="grid-c6__content__savings-box__profile-amount"
                                    >
                                        $ {saving.savings_amount}
                                    </div>
                                </div>

                                <div
                                    className="grid-c6__content__savings-box__badges"
                                >
                                    <div
                                        className="grid-c6__content__savings-box__badges-box"
                                    >
                                        <span>
                                            Date taken {saving.date_taken}
                                        </span>
                                        <span>
                                            Amount Left $ {saving.amount_left}
                                        </span>
                                    </div>

                                    <div
                                        className="grid-c6__content__savings-box__badges-bar"
                                    >
                                        <div className="grid-c6__content__savings-box__badges-bar-fill"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Savings
