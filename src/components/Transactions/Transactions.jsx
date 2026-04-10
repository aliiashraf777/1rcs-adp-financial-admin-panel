import './Transactions.css';
import { iconsImgs } from '../../utils/images';
import { transactions } from '../../data/data';

const Transactions = () => {
    return (
        <div className='grid-one-item grid-common grid-c2'>
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">All Transactions</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="addIcon" />
                </button>
            </div>


            <div className="grid-c2__content">
                <div className="grid-c2__content-boxes">
                    {transactions.map((transaction) => (
                        <div
                            className="grid-c2__content-boxes__transaction"
                            key={transaction.id}
                        >
                            <div
                                className="grid-c2__content-boxes__transaction-profile"
                            >
                                <div className="avatar img-fit-cover">
                                    <img src={transaction.image} alt="avatar" />
                                </div>

                                <div>
                                    <p className="text">{transaction.name}</p>
                                    <p className='t-date'>{transaction.date}</p>
                                </div>
                            </div>

                            <div className="grid-c2__content-boxes__transaction-amount">
                                <p className="text-scarlet">
                                    $ {transaction.amount}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions
