import React from 'react';
import {Link} from 'react-router-dom'
import Dashboard from './CommunityDashboard';
import WeMeets from './WeMeets';

const Sidebar = (props) => {

    return (    
        <div className="dash_container">
            <div className="sidebar">
                <div className="top-part-sidebar">
                    <div className="name_img"></div>
                    <p className="header_Name">User Name</p>
                    <p className="header_Description">You are an Admin</p>
                </div>
                <nav className="clearfix s-navbar">
                    <ul className="no_style">
                        <li>
                            <Link className="sidebar_links" to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link className="sidebar_links" to="/wemeets">WeMeets</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="dash_content">
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar;

