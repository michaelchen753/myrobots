import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots : [],
            searchfield : ''
        }
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
        
        
        
    }

    onSearchChange = (event) => {
        //This is a function here.
        this.setState({ searchfield: event.target.value })
     
        
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length? 
            <h1>Loading...</h1> :
            <div className = 'tc pa4'>
                <img src= 'https://fontmeme.com/permalink/210216/1f0855ce4d7d39fbd1379d31811074f8.png' 
                alt ='robofriendslogo' />
                    <SearchBox searchChange = {this.onSearchChange} />
                    {/* 为什么不使用<input type = 'search' onsearch = 'myFunction'/> */}
                        <Scroll>
                            <ErrorBoundry>
                            {/* <h2>Happy new year!</h2> */}
                            <CardList robots = {filteredRobots} />
                            </ErrorBoundry>
                        </Scroll>
            </div>
            }
       
    }
    
export default App;