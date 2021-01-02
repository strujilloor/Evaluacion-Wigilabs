import React from 'react';
import Message from './components/Message';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
    render() {
        return (
            <div className="container">
                <Message />
            </div>
        );
    }
}
