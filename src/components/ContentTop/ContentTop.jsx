import './ContentTop.css';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import { iconsImgs } from '../../utils/images';

const ContentTop = () => {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <div className='content-top'>
            <div className="content-top__left">
                <button
                    type='button'
                    className='content-top__left__sidebar-toggle'
                    onClick={() => toggleSidebar()}
                >
                    <img src={iconsImgs.menu} alt="menuImg" />
                </button>

                <h3 className="content-top__title">Home</h3>
            </div>

            <div className="content-top__right">
                <button
                    type='button'
                    className='content-top__right__btn content-top__right__btn-search'
                >
                    <img src={iconsImgs.search} alt="serch" />
                </button>
                <button
                    type='button'
                    className='content-top__right__btn content-top__right__btn-notification'
                >
                    <img src={iconsImgs.bell} alt="bell" />

                    <span className='content-top__right__btn-dot'></span>
                </button>
            </div>
        </div>
    )
}

export default ContentTop
