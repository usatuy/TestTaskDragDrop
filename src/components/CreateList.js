import React, { Component } from 'react';
export default class CreateListForm extends Component{
    addList(event){
        event.preventDefault();
        if (Object.keys(this.formvalue.valueOf()).length != 0){
            this.props.addList(this.formvalue.valueOf())

        }
        this.refs.form.reset();
    }
    handleChange(event){
        this.formvalue.nameStatus =  event.target.value;
    }
    render(){
        this.formvalue = {};
        return(
            <form ref="form" action="" className="form-inline" onSubmit={this.addList.bind(this)}>
                <div className="form-group">
                    <label >Name Status</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Status"
                           onChange={this.handleChange.bind(this)}
                    />
                </div>
                <button type="submit" className="btn btn-default">Add Status</button>
            </form>
        )
    }
}