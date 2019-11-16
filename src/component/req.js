import React, { Component } from 'react'

import axios from '../helpers/axios.instance';

class Req extends Component{
    componentDidMount(){
        axios.get('/some-url')
            .then( res => {
                console.log('res', res);
            })
    }

    render = () => {
        return(
            <h1> Req component </h1>
        )
    }
}

export default Req;