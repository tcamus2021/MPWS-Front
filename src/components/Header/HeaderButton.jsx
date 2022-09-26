import React from "react";
import PropTypes from 'prop-types';

const HeaderButton = ({ name, link }) => {
    return (<a className="header-button" href={link}>{name}</a>)
};

HeaderButton.propTypes = { name: PropTypes.string.isRequired, link: PropTypes.string.isRequired };

export default HeaderButton;