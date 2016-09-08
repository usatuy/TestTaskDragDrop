import React, { Component } from 'react'
import Card from './Card';
import AddCard from './AddCard';

export default class List extends Component {
    drop(event){

        event.preventDefault();
        var data;
        try {
            data = JSON.parse(event.dataTransfer.getData('card'));
        } catch (e) {
            return;
        }
        this.props.onMoveCard(data);
    }
    ondragover(event){
        event.preventDefault();
        return false;
    }
    render() {
        const {cards, status } = this.props;
        var cardlist = cards.map(function (item) {
            return (
                <Card key={item.id} data={item}/>
            );
        });
        return (
            <div className='col-md-3 list-item'>
                <div className=' panel panel-default'>
                    <div className="panel-heading">
                        {status.title}
                    </div>
                    <div onDragOver={this.ondragover} onDrop={this.drop.bind(this)}  className="panel-body panel-drop">
                        {cardlist}
                    </div>
                    <div className="panel-footer">
                        <AddCard addCard={this.props.addCard}></AddCard>

                    </div>
                </div>
            </div>

        )
    }
}