import './Subscriptions.css'
import { iconsImgs } from '../../utils/images'
import { subscriptions } from '../../data/data'

const Subscriptions = () => {
    return (
        <div className='grid-two__subgrid-item grid-common grid-c5'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Subscriptions</h3>

                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>

            <div className="grid-c5__content">
                <div className="grid-c5__content__subscriptions">
                    {
                        subscriptions.map((subscription) => (
                            <div
                                className="grid-c5__content__subscriptions-box"
                                key={subscription.id}
                            >
                                <div className="grid-c5__content__subscriptions-box__text">
                                    <div className="icon">
                                        <img src={iconsImgs.alert} alt="alert" />
                                    </div>

                                    <div className="text text-silver-v1">
                                        {subscription.title} <span>due {subscription.due_date}</span>
                                    </div>
                                </div>

                                <div className="grid-c5__content__subscriptions-box__price text text-silver-v1">
                                    $ {subscription.amount}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Subscriptions
