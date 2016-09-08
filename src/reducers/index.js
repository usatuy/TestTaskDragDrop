import * as types from '../constants/ActionTypes';

var initialState = {
    statuses:[

    ],
    cards:[

    ]
};

export default function cardstate(state = initialState,action) {

    switch (action.type){
        case types.GET_DATA:
            return Object.assign({}, state, {
                statuses:action.data.statuses,
                cards:action.data.cards
            });
        case types.CHANGE_STATUS:
            return Object.assign({}, state, {
               cards:state.cards.map((card)=>{
                   if (card.id == action.idCard){
                        return Object.assign({},card,{
                            status:action.idStatus
                        })
                   }
                   return card;
               })
            });
        case types.ADD_CARD:
            return Object.assign({}, state, {
                cards:[
                    ...state.cards,
                    {
                        id: action.idCard,
                        text: action.text,
                        status: action.idStatus
                    }
                ]
            });
        case types.ADD_STATUS:
            return Object.assign({}, state, {
                statuses:[
                    ...state.statuses,
                    {
                        id: action.idStatus,
                        title: action.nameStatus
                    }
                ]
            });
        default:
            return state;

    }
}