import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                123
                {this.msg}
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
