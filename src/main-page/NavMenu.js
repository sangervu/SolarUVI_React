import React, { Fragment, useState, useContext } from 'react';
import { Alert, Nav, Navbar, NavItem } from 'reactstrap';
import './NavMenu.css';
import { ReactComponent as UviIcon } from '../images/uvi.svg'
import { ReactComponent as SolarPowerIcon } from '../images/sun-power.svg'
import { ReactComponent as SunSetIcon } from '../images/sun-set.svg'
import { ReactComponent as SolarPositionIcon } from '../images/sun-position.svg'
import { ReactComponent as CalendarIcon } from '../images/calendar.svg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ReactComponent as HelpIcon } from '../images/help.svg'
import pdf from '../documents/Instructions.pdf';
import AppCalendar from '../input-calendar/AppCalendar';
import MainContext from '../context/MainContext';
import InputLocation from '../input-locations/InputLocation';

const NavMenu = () => {
    const [modalComponent, setModalComponent] = useState();
    const [modalWidth, setModalWidth] = useState();
    const [modalHeigth, setModalHeigth] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState();

    const { navState, setNavState } = useContext(MainContext);

    const openModal = (component, modalWidth, modalHeigth) => {
        setModalComponent(component);
        setModalWidth(modalWidth);
        setModalHeigth(modalHeigth)
        toggleModal();
    }

    const uviOnClick = () => {
        setNavState(prevState => ({ ...prevState, uviSelected: !prevState.uviSelected }));
    }
    const powerOnClick = () => {
        setNavState(prevState => ({ ...prevState, powerSelected: !prevState.powerSelected }));
    }

    const sunsetOnClick = () => {
        setNavState(prevState => ({ ...prevState, sunsetSelected: !prevState.sunsetSelected }));
    }

    const positionOnClick = () => {
        setNavState(prevState => ({ ...prevState, positionSelected: !prevState.positionSelected }));
    }

    const getClassName = (selected) => {
        let names = [];
        if (navState.disableAll) {
            names.push('disabled');
        }

        if (selected) {
            names.push('active');
        }

        return names.join(' ');
    }

    const toggleModal = () => {
        setIsModalOpen((isModalOpen) => !isModalOpen);
    }

    return (
        <Fragment>
            <Alert
                style={{ position: 'absolute', right: 0, zIndex: 1000 }}
                color='danger'
                isOpen={error != null}
                toggle={() => setError(null)}
                fade={false}>
                {error}
            </Alert>
            <header className="header">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} fill>
                        <NavItem onClick={() => openModal(<AppCalendar toggleModal={toggleModal} />, 500, '90%')}>
                            <CalendarIcon />
                            <label className="nav-title d-none d-lg-block">Calendar</label>
                        </NavItem>
                        <NavItem onClick={() => openModal(<InputLocation toggleModal={toggleModal} />, 500, '90%')}>
                            <CalendarIcon />
                            <label className="nav-title d-none d-lg-block">Location & TimeZone</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem onClick={uviOnClick} className={getClassName(navState.uviSelected)}>
                            <UviIcon />
                            <label className="nav-title d-none d-lg-block">UVI</label>
                        </NavItem>
                        <NavItem onClick={powerOnClick} className={getClassName(navState.powerSelected)}>
                            <SolarPowerIcon />
                            <label className="nav-title d-none d-lg-block">SolarPower</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem onClick={sunsetOnClick} className={getClassName(navState.sunsetSelected)}>
                            <SunSetIcon />
                            <label className="nav-title d-none d-lg-block">SunRizeSet</label>
                        </NavItem>
                        <NavItem onClick={positionOnClick} className={getClassName(navState.positionSelected)}>
                            <SolarPositionIcon />
                            <label className="nav-title d-none d-lg-block">SolarPosition</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem className="small_navItem" onClick={() => openModal(<HelpModal toggleModal={toggleModal} />, 300, '90%')}>
                            <HelpIcon className="small_link_image" />
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
            <Modal style={{ maxWidth: modalWidth, maxHeight: modalHeigth }} isOpen={isModalOpen}>
                {modalComponent}
            </Modal>

        </Fragment>
    );
}

export default NavMenu;

const HelpModal = ({ toggleModal }) => {
    const openHelp = () => {
        window.open(pdf, '_blank').focus();
    }

    return (
        <>
            <ModalHeader toggle={toggleModal}>Solar Solutions</ModalHeader>
            <ModalBody>
                <div>
                    <table className="version_table">
                        <tbody>
                            <tr>
                                <td style={{ width: '150px' }}>
                                    Versio 0.1<br />
                                    Copyright ©  {new Date().getFullYear()}
                                </td>
                                <td style={{ width: '150px' }}>
                                    Insinöörityö<br />
                                    Silja Angervuori<br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={openHelp}>Ohje</Button>
                <Button onClick={toggleModal}>Sulje</Button>
            </ModalFooter>
        </>
    )
}