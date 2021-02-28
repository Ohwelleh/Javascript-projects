import React from 'react';
import {Link} from 'react-router-dom';
import * as IoIcons from 'react-icons/io';

const headerLinks = [

    {
        title: 'About',
        path: '/',
        icon: <IoIcons.IoIosPaper />
        
    },
    {
        title: 'Events',
        path: '/events',
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: 'Health & Dental',
        path: '/health-dental',
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: 'Services',
        path: '/services',
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: 'Jobs',
        path: '/jobs',
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: 'Search',
        path: '/search',
        icon: <IoIcons.IoIosPaper />
    }

];


export default function HeaderBar (){

    return(
        <nav className="site-header">
            <span className="header-span">UVSS</span>
            <ul>
                { headerLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <span className="side-span" >
            { headerLinks.map((link, index) => (
                    <li key={index}>
                        {link.icon}
                    </li>
            ))}
            </span>
        </nav>
    );
}