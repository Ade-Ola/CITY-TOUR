import React, { Component } from 'react'
import '../../App.scss';

export class cityDisplay extends Component {
    constructor(props){
        super(props)

        this.state = {
            isBool: false
        }
    }
   

    changeDisplay = () => {
        this.setState({
            isBool: !this.state.isBool
        })
    }

   
    render() {
        const {id,city,img,name,info} = this.props.data;
        const {del} = this.props;
    
        return (
            <article className='info-container'>
                <div className="image-wrap">
                    <img src={img} alt='images'/>
                        <span  onClick={()=>del(id)} className="close">
                            <i className="far fa-window-close"></i>
                        </span>
                </div>
              
              <div className='tour'>
              <h2>{city}</h2>
                <h4>{name}</h4>
                <h3>Info 
                    <span onClick={this.changeDisplay} className='dropdown'><i className="fas fa-caret-square-down"></i>
                    </span></h3>
                    {this.state.isBool ? <p>{info}</p> : null}
              </div>
                
            </article>
        )
}
}
export default cityDisplay;

    
