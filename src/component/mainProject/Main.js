import React, { Component } from 'react';
import TheDisplay from './cityDisplay';
import ListData from '../../tourData';

export class Main extends Component {
    state = {
        City: ListData
    }

    delete = (id) => {
    
        const sort = this.state.City.filter(item => item.id !== id)
        // //since sortedbook is d remaining new array
        this.setState({
            City: sort
        }) 
    };

    render() {
        const {City} = this.state;
        return (
            <div>
                {
                    City.map((item) =>(        
                        <TheDisplay key={item.id} data={item} del={this.delete}/>
                    ))
                }
               
            </div>
        )
    }
}

export default Main;
