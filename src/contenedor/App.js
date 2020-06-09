import React, { Component, Fragment } from 'react';
import CardList from '../componentes/CardList';
import SearchBox from '../componentes/SearchBox'
import Scroll from '../componentes/Scroll';
import ErrorBoundy from '../componentes/ErrorBoundy'
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        // busqueda del robot
        const {robots, searchfield} = this.state;
        const filteredRobots= robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return(
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>Robots Friends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundy>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundy>
                        </Scroll>
                    </div>
                </Fragment>
            )
        }
    }
}

export default App;