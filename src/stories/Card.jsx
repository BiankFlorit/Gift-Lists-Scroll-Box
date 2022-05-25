import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

import { Badge } from './Badge';

function actionPlaceholder(e) {
    e.preventDefault();
    console.log('click!');
}

export const Card = ({ onClick, groupName, ...props }) => (

    <div
        className="card"
        onClick={actionPlaceholder}
        {...props}
    >
        <h1>{groupName}</h1>
        <p>Lista de regalos para el grupo "{groupName}"</p>
        <Badge />
    </div>
);

Card.propTypes = {
    groupName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    groupName: "Nombre del grupo",
    onClick: actionPlaceholder,
};
