import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';
//import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);

/* ReactDOM.render(<Badge
    firstName="Marisol"
    lastName="Ramírez Henao"
    avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9PS2RWru89tPwTmj35yXOKAGhUjjsbyuON8YQtNg=s83-c-mo"
    jobTitle="Frontend engineer"
    twitter="MarisolRHe"
    />,
    container); */