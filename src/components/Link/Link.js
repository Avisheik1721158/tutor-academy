import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Link = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-20'>
            <CustomLink to={link}>{name}</CustomLink>
        </li>
    );
};

export default Link;