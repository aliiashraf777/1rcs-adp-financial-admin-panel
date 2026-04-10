import './Sidebar.css';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../context/sidebarContext';


const Sidebar = () => {

    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState('');
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)
    // This grabs(destructures) the isSidebarOpen value from context (no prop drilling!).
    console.log(isSidebarOpen)

    // The useEffect listens for changes to isSidebarOpen and applies a class:

    useEffect(() => {
        if (isSidebarOpen) {
            // setSidebarClass('sidebar--toggle');
            setSidebarClass('');
        } else {
            setSidebarClass('');
            setSidebarClass('sidebar--toggle');
        }
    }, [isSidebarOpen])

    // useEffect(() => {
    //     !isSidebarOpen && (setSidebarClass('sidebar--toggle'));
    // }, [isSidebarOpen])
    // but its not removing class from ${sidebarClass}


    return (
        <div className={`sidebar ${sidebarClass} `}>

            {/* <button
                className="sidebar__close-btn"
                onClick={() => {
                    toggleSidebar()
                    // console.log('Toggling sidebar', isSidebarOpen)
                }}
            >
                X
            </button> */}

            {/* profile */}
            <div className="sidebar__user">
                <div className="sidebar__user-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="profile-img" />
                </div>

                <span className="sidebar__user-name">alice-doe</span>
            </div>

            {/* navigation */}
            <div className="sidebar__navigation">
                <ul className="sidebar__navigation__list">
                    {
                        navigationLinks.map((navigationLink) => {
                            return (
                                <li
                                    className='sidebar__navigation__list-item'
                                    key={navigationLink.id}
                                >
                                    <a href="#"
                                        className={`sidebar__navigation__list-link ${navigationLink.id === activeLinkIdx ? 'active' : null} `}
                                    >
                                        <img
                                            src={navigationLink.image}
                                            alt={navigationLink.title}
                                        />

                                        <span className='sidebar__navigation__list-title'>
                                            {navigationLink.title}
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
