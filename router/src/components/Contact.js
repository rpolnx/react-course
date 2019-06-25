import React from 'react';
import { Link } from 'react-router-dom';

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <p>Contact</p>
                <Link to={{
                    pathname: this.props.match.url + "/relative"
                }}>Relative</Link>
            </div>
        );
    }
}

export default Contact;