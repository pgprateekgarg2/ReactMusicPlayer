import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player'

class App extends React.Component{
    render(){
        return(
            <Player/>
        )
    }
}



ReactDOM.render(<App/>,document.getElementById('root'))