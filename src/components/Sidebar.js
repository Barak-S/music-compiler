import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Coins',
        path: '/',
        icon: <BiIcons.BiCoinStack />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/',
        icon: <BiIcons.BiBookBookmark />,
        cName: 'nav-text'
    }
];
