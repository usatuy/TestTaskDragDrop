import React, { Component } from 'react'

export default class Card extends Component {
    addCard(event){
        event.preventDefault()
        if (Object.keys(this.formvalue.valueOf()).length != 0){
            this.props.addCard(this.formvalue.valueOf())
        }
        console.log('add',this.formvalue.valueOf());
        this.refs.form.reset();
    }
    handleChange(event){
        this.formvalue.textCard =  event.target.value;
    }
    render(){
        this.formvalue = {};
        return(
            <form ref="form" className="form-inline" onSubmit={this.addCard.bind(this)}>
                <div className="form-group">
                    <label >Text Card</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Text Card"
                           onChange={this.handleChange.bind(this)}
                    />
                </div>
                <button type="submit" className="btn btn-default">Add Card</button>
            </form>
        )
    }
}