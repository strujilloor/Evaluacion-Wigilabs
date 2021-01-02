import React, {Component} from 'react';

class Message extends Component {
    state = { background: '#58915b' };

    componentDidMount() {
        const colors = ['#cfa340', '#c13829', '#58915b'];
        let index = -1;
        this.interval = setInterval(() => {
            ++index;
            if ( index >= colors.length ) index = 0;
            console.log('colors: ', colors[index], index);
            this.setState( { background: colors[index] } );
        }, 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
      return (
        <div className='card'>
            <div className="header" style={this.state}></div>
             <div className="body">
                 <input placeholder="Message to Update"/>
             </div>
        </div>
      )
    }
}

export default Message;
