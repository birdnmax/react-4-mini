import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/' Component={TopicList}/>
        <Route exact path='/post/:id' Component={Post}/>
    </Switch>
);