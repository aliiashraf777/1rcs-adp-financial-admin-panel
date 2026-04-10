import './Budget.css';
import { iconsImgs } from '../../utils/images';
import { budget } from '../../data/data';
 
const Budget = () => {
    return (
        <div className='grid-two__item grid-common grid-c4'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Budget</h3>

                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>

            <div className="grid-c4-top text-sliver-v1">
                <h2 className="lg-value">Cash</h2>
                <span className="lg-value">$ 100, 000</span>
            </div>

            <div className="grid-c4__content bg-jet">
                <div className="grid-c4__content__budgets">
                    {
                        budget.map((budget) => (
                            <div className="grid-c4__content__budgets-box" key={budget.id}>
                                <div className="grid-c4__content__budgets-box__left">
                                    <div className="bb__icon">
                                        <img src={iconsImgs.check} alt="check" />
                                    </div>
                                    <div className="bb__text">
                                        <p className="text  text-silver-v1">
                                            {budget.title}
                                        </p>
                                        <p>{budget.type}</p>
                                    </div>
                                </div>

                                <div className="grid-c4__content__budget-box__right">
                                    <p className="text-silver-v1">
                                        $ {budget.amount}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Budget
