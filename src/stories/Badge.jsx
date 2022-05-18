import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';

export const Badge = ({ groupTag, color, ...props }) => (
    <div className={['badge', `badge--${color}`].join(' ')} {...props}>
        {groupTag}
    </div>
);

Badge.propTypes = {
    groupTag: PropTypes.string,
    color: PropTypes.string,
};

Badge.defaultProps = {
    groupTag: 'Tag name',
    color: 'green',
};
