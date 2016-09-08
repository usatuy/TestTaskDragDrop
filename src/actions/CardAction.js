import * as types from '../constants/ActionTypes';
export function ChangeStatus(idCard,idStatus) {
    return {
        type:types.CHANGE_STATUS,
        idCard:idCard,
        idStatus:idStatus
    }
}
export function addCard(text,idStatus,idCard) {
    return {
        type:types.ADD_CARD,
        text:text,
        idStatus:idStatus,
        idCard:idCard
    }
}
export function addStatus(nameStatus,idStatus) {
    return {
        type:types.ADD_STATUS,
        nameStatus:nameStatus,
        idStatus:idStatus
    }
}
export function getData(data) {
    return {
        type:types.GET_DATA,
        data
    }
}