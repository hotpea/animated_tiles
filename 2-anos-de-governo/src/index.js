import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/scss/pace.scss';
import './assets/scss/styles.scss';
import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
