import React from 'react';
import profileImage from '../../../resources/JoeGuckian.jpg';
import Navitem from './Navitem';
import {Navbar} from 'react-bootstrap'

const Sidebar = (props) => {
    const {sections} = props;
    return (
        <Navbar className="fixed-top" bg="light" expand="lg" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none header-text">Joe Guckian</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="profileImage" data-testid="profileImage" />
                </span>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav">
                    <Navitem title="About" identifier="about" />
                    {sections.map((section, i) => (
                        <Navitem key={i} title={section.title} identifier={section.identifier} />
                    ))}
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Sidebar;