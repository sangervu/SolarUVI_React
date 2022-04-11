import React, { Fragment, useState, useContext } from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';
import './NavMenu.css';
import { ReactComponent as AppsIcon } from '../images/apps.svg'
import { ReactComponent as ConsultationIcon } from '../images/consultation.svg'
import { ReactComponent as DashboardIcon } from '../images/dashboard.svg'


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
                            <ConsultationIcon />
                            <label className="nav-title d-none d-lg-block">Ulkop. kons.</label>
                        </NavItem>
                        <li className="nav-divider"></li>
                        <NavItem className="disabled">
                            <DashboardIcon />
                            <label className="nav-title d-none d-lg-block">Dashboard</label>
                        </NavItem>
                        <NavItem className="disabled">
                            <AppsIcon />
                            <label className="nav-title d-none d-lg-block">Palvelut</label>
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        </Fragment>
    );
}

export default NavMenu;