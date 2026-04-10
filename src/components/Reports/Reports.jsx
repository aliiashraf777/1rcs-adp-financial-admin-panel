import './Reports.css';
import { reportData } from '../../data/data';
import { iconsImgs } from '../../utils/images';
 
const Reports = () => {
    return (
        <div className='grid-one-item grid-common grid-c3'>
            <div className="grid-c-title">
                <div className="grid-c-title-text">Report</div>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="addIcon" />
                </button>
            </div>

            <div className="grid-c3__content">
                <div className="grid-c3__content__chart">
                    <div className="grid-c3__content__chart-verti">
                        <span>100</span>
                        <span>75</span>
                        <span>50</span>
                        <span>25</span>
                        <span>0</span>
                    </div>

                    {
                        reportData.map((report) => (
                            <div
                                className={`grid-c3__content__chart-bar ${report.month === 'Feb' ? 'highlight' : ''}`}
                                key={report.id}
                            >
                                <div
                                    className="grid-c3__content__chart-bar-wrap"
                                >
                                    <div
                                        className="bar-item1"
                                        style={{ height: `${report.valMonth !== null ? '40%' : ''}` }}
                                    ></div>
                                    <div
                                        className="bar-item2"
                                        style={{ height: `${report.valReport !== null ? '60%' : ''}` }}
                                    ></div>
                                </div>

                                <span className="horizontal">
                                    {report.month}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reports
