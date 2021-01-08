import React from 'react';
import { Link } from 'react-router-dom';

const Linked = (props) => {
    return <Link to={ props.path }>{ props.text }</Link>;
};

export default Linked;