import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';

import { Card } from './Card';

export const Menu = ({ menuTitle, ...props }) => (
    <div
        className="menu"
        {...props}
    >
        <div className='menuTitle'>
            <h1>{menuTitle}</h1>
        </div>
        <div className='scroll'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);

Menu.propTypes = {
    menuTitle: PropTypes.string.isRequired,
};

Menu.defaultProps = {
    menuTitle: "Mi menú personalizado",
};
