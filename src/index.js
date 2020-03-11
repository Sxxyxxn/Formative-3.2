import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import {Router} from '@reach/router';
import Garden from './Components/gardner';
import Watchman from './Components/watchman';
import Chef from './Components/chef';
import Cleaner from './Components/cleaner'


ReactDOM.render(<Router>

    <App path="/" />
    

 
    <Garden path="/gardner" />
    <Watchman path="/watchman" />
    <Chef path="/chef"/>
    <Cleaner path="/cleaner" />



    
</Router>, document.getElementById('root'));

