import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import CreateListForm from '../components/CreateList';
import * as CardAction from '../actions/CardAction';
import GetRequest from '../helper/GetRequest';


class App extends Component {
    OnMoveCard(idStatus,data){
        const {ChangeStatus} =  this.props.CardAction;
        GetRequest('PATCH','cards/'+data.id,{card:{list_id:idStatus}},function () {
            ChangeStatus(data.id,idStatus);
        })
    }
    AddCard(idStatus,text){
        const {addCard} =  this.props.CardAction;
        GetRequest('POST','cards',{card:{name:text.textCard,list_id:idStatus}},function (data) {
            addCard(text.textCard, idStatus, data.card.id);
        })

    }
    AddList(data){
        const {addStatus} =  this.props.CardAction;
        GetRequest('POST','lists',{list:{name:data.nameStatus}},function (response) {
            console.log('AddList',data);
            addStatus(data.nameStatus, response.list.id);
        })
    }
    componentWillMount(){
        console.log('exampleComponent mounted');
        const {getData} =  this.props.CardAction;
        GetRequest('GET','lists', '', function (dataLists) {
            GetRequest('GET','cards', '', function (dataCards) {
                console.log('GetRequest',dataLists,dataCards);
                getData({
                    statuses:dataLists.lists.map(function (item) {
                       return {
                           title:item.name,
                           id:item.id
                       };
                    }),
                    cards:dataCards.cards.map(function (item) {
                        return {
                            text:item.name,
                            id:item.id,
                            status:item.list_id
                        };
                    })
                });
            });
        });

    }
    render() {
        var _this = this;
        var cards = this.props.cards;
        console.log('render app',this.props.statuses);
        var Lists = this.props.statuses.map(function (item) {
            var statusCards = [];
            cards.forEach(function (card) {
                if(card.status == item.id){
                    statusCards.push(card);
                }
            });
            return(
                <List key={item.id} cards={statusCards} status={item} onMoveCard={_this.OnMoveCard.bind(_this,item.id)} addCard={_this.AddCard.bind(_this,item.id)}/>

            );
        });

        return (
            <div >
                <div className="container-offset">
                    <div className="container-lists">
                        <div className='row col-md-offset-1'>
                            {Lists}
                        </div>
                    </div>
                </div>
                <div className="container-lists footer">
                    <CreateListForm addList={this.AddList.bind(this)}></CreateListForm>

                </div>


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        statuses: state.statuses,
        cards:state.cards
    }
}
function mapDispatchToProps(dispatch) {
    return {
        CardAction: bindActionCreators(CardAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)