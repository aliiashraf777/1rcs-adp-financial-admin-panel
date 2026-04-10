import './FinancialAdvice.css';
import { iconsImgs } from '../../utils/images';
 
const FinancialAdvice = () => {
    return (
        <div className='main-content__grid-two__subgrid__item grid-common grid-c8'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Financial Advice</h3>

                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>

            <div className="grid-c8__content">
                <p className="text text-silver-v1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sint!
                </p>
            </div>
        </div>
    )
}

export default FinancialAdvice
