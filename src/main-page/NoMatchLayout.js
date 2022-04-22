import React from 'react';
import Layout from './Layout';
import { Row } from 'reactstrap';

const NoMatchLayout = () => {
    const alarmsState =
    {
        queueAlarmCount: 0,
        alarmCount: 0,
        latestQueueAlarmTime: new Date().toString(),
        latestAlarmTime: new Date().toString()
    };

    const navState = {
        unitsSelected: false,
        alarmsSelected: false,
        queueAlarmsSelected: false,
        disableAll: true
    };

    const setNavState = () => { };

    return (
        <Layout>
            <Row>
                <h3 style={{ paddingTop: '20px' }} className="ml-auto mr-auto">
                    Ei löytynyt
                </h3>
            </Row>
        </Layout>
    );
}

export default NoMatchLayout;