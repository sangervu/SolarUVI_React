import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import NavMenu from './NavMenu';
import Clock from './Clock.js';
import { useState } from 'react'

const Layout = props => {

    return (
        <Fragment>
            <NavMenu />

            <div className="medi-container">
                {props.children}
            </div>

            <footer className="footer">
                <Row className="justify-content-end mr-2 mt-1">
                    <Col className="col-sm-auto">
                    </Col>
                    <Col className="col-sm-auto">
                        <Clock />
                    </Col>
                </Row>
            </footer>
        </Fragment>
    );
}

export default Layout;