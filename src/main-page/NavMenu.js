import React, { Fragment, useState, useContext } from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';
import './NavMenu.css';
import { ReactComponent as UviIcon } from '../images/uvi.svg'
import { ReactComponent as SolarPowerIcon } from '../images/sun-power.svg'
import { ReactComponent as SunSetIcon } from '../images/sun-set.svg'
import { ReactComponent as SolarPositionIcon } from '../images/sun-position.svg'
import { ReactComponent as CalendarIcon } from '../images/calendar.svg'


const NavMenu = () => {
    const [alarmOnClickTime, setAlarmOnClickTime] = useState(new Date());
    const [queueAlarmOnClickTime, setQueueAlarmOnClickTime] = useState(new Date());
    const [modalComponent, setModalComponent] = useState();
    const [modalWidth, setModalWidth] = useState();
    const [modalHeigth, setModalHeigth] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openHistory, setOpenHistory] = useState(false);
    const [openNotificationMessage, setOpenNotificationMessage] = useState(false);

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
                    </Nav>
                </Navbar>
            </header>
        </Fragment>
    );
}

export default NavMenu;