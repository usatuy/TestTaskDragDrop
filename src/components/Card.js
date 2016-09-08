import React, { Component } from 'react'

export default class Card extends Component {
    dragStart(data,event){
        event.persist();
        console.log('dragStart',event);
        event.dataTransfer.card = data;
        event.dataTransfer.setData('card', JSON.stringify(data));
    }
    render(){
        const {data} = this.props;
        const style = {
            width:'100px',
            height:'100px',
            display:'table',
            float:'left',
            verticalAlign:'middle',
            textAlign:'center'
        };
        return (
            <div draggable='true' onDragStart={this.dragStart.bind(this,data)} className="table card" style={style}>
                <div className="table-cell">{data.text}</div>
            </div>
        );
    }
}