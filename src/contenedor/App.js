import React, { useState, useEffect } from 'react';
import CardList from '../componentes/CardList';
import SearchBox from '../componentes/SearchBox'
import Scroll from '../componentes/Scroll';
import './App.css';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')
    const [count,setCount]= useState(0)


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(users=> setRobots(users))
    }, [count])

    const onSearchChange = (event) =>{
        setSearchfield(event.target.value)
    }

    // busqueda del robot
    const filteredRobots= robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length?
    <h1>Loading</h1>:
    (
        <div className='tc'>
            <h1 className='f1'>Robots Amigos</h1>
            <button onClick={()=>setCount(count+1)}>Click aqui!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    )   
}

export default App;