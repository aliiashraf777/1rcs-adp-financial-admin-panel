import './ContentMain.css'
import Cards from '../Cards/Cards'
import Transactions from '../Transactions/Transactions'
import Reports from '../Reports/Reports'
import Budget from '../Budget/Budget'
import Subscriptions from '../Subscriptions/Subscriptions'
import Savings from '../Savings/Savings'
import Loans from '../Loans/Loans'
import FinancialAdvice from '../FinancialAdvice/FinancialAdvice'

const ContentMain = () => {
    return (
        <div className='main-content'>
            <div className="main-content__grid-one">
                <Cards />

                <Transactions />

                <Reports />
            </div>

            <div className="main-content__grid-two">
                <div className="grid-two-item">
                    <Budget />
                </div>

                <div className="grid-two-item">
                    <div
                        className="main-content__grid-two__subgrid"
                    >
                        <Subscriptions />

                        <Savings />
                    </div>
                </div>

                <div className="grid-two-item">
                    <div
                        className="main-content__grid-two__subgrid"
                    >
                        <Loans />

                        <FinancialAdvice />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContentMain
