import React from 'react';

const Navitem = (props) => {
    const {title, identifier} = props;
    return(
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={`#${identifier}`} data-testid={`link-${identifier}`}>{title}</a>
        </li>
    )
};

export default Navitem;