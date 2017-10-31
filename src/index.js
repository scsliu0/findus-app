import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import MatchedUsers from './components/MatchedUsers'

render(<MatchedUsers/>, document.querySelector('#main'));
