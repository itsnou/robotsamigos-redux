import React, {Component} from 'react';

class ErrorBoundy extends Component{
    constructor(props){
        super(props)
        this.state= {
            hasError: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({
            hasError:true
        })
    }

    render(){
        if (this.state.hasError){
            return <h1>Ups! Esto no es bueno</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundy;