import React, { Fragment, useState, useContext } from 'react';
import { Alert, Nav, Navbar, NavItem } from 'reactstrap';
import './NavMenu.css';
import { ReactComponent as UviIcon } from '../images/uvi.svg'
import { ReactComponent as SolarPowerIcon } from '../images/sun-power.svg'
import { ReactComponent as SunSetIcon } from '../images/sun-set.svg'
import { ReactComponent as SolarPositionIcon } from '../images/sun-position.svg'
import { ReactComponent as CalendarIcon } from '../images/calendar.svg'
import { ReactComponent as TuneIcon } from '../images/tune.svg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ReactComponent as HelpIcon } from '../images/help.svg'
import pdf from '../documents/Instructions.pdf';

const NavMenu = () => {
    const [alarmOnClickTime, setAlarmOnClickTime] = useState(new Date());
    const [queueAlarmOnClickTime, setQueueAlarmOnClickTime] = useState(new Date());
    const [modalComponent, setModalComponent] = useState();
    const [modalWidth, setModalWidth] = useState();
    const [modalHeigth, setModalHeigth] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openHistory, setOpenHistory] = useState(false);
    const [openNotificationMessage, setOpenNotificationMessage] = useState(false);
    const [error, setError] = useState();

    const openModal = (component, modalWidth, modalHeigth) => {
        setModalComponent(component);
        setModalWidth(modalWidth);
        setModalHeigth(modalHeigth)
        toggleModal();
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
                        <NavItem className="disabled">
                            <CalendarIcon />
                            <label className="nav-title d-none d-lg-block">Calendar</label>
                        </NavItem>
                        <NavItem className="disabled">
                            <SolarPowerIcon />
                            <label className="nav-title d-none d-lg-block">SolarPower</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem className="disabled">
                            <UviIcon />
                            <label className="nav-title d-none d-lg-block">UVI</label>
                        </NavItem>
                        <NavItem className="disabled">
                            <SunSetIcon />
                            <label className="nav-title d-none d-lg-block">SunRize&Set</label>
                        </NavItem>
                        <NavItem className="disabled">
                            <SolarPositionIcon />
                            <label className="nav-title d-none d-lg-block">SolarPosition</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem className="small_navItem" onClick={() => openModal(<HelpModal toggleModal={toggleModal} />, 300, '90%')}>
                            <HelpIcon className="small_link_image" />
                        </NavItem>
                        {/* <NavItem className="small_navItem" onClick={() => openModal(<SettingsModal toggleModal={toggleModal} />, '90%', '90%')}>
                            <TuneIcon className="small_link_image" />
                        </NavItem> */}
                    </Nav>
                </Navbar>
            </header>
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
            <ModalHeader toggle={toggleModal}>Merlot Medi Web Office</ModalHeader>
            <ModalBody>
                <div>
                    <table className="version_table">
                        <tbody>
                            <tr>
                                <td style={{ width: '150px' }}>
                                    Versio 4.0.1.0<br />
                                    Copyright © CGI {new Date().getFullYear()}
                                </td>
                                <td style={{ width: '150px' }}>
                                    CGI Suomi Oy<br />
                                    PO BOX 38<br />
                                    Karvaamokuja 2<br />
                                    FI-00381 HELSINKI<br />
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