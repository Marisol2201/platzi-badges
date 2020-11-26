import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew_hero">
                <img className="img-fluid" src={header} alt="Logo" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                        firstName="Marisol"
                        lastName="Ramírez"
                        twitter="MarisolRHe"
                        jobTitle="Frontend Engineer"
                        avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9PS2RWru89tPwTmj35yXOKAGhUjjsbyuON8YQtNg=s83-c-mo"
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BadgeNew;