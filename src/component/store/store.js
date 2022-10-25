import produce from 'immer';
import { createStore, applyMiddleware } from 'redux'

const state = {

    
    member:{

    }
};

const reducer = produce((state, action) => {
    
    switch (action.type) {

       
        // case 'DELETE_ITEM':
        //     state.basket.forEach(element => {
        //         debugger;
        //         if (element.url == action.payload.url) {
        //             element.count = action.payload.del;

        //         }
        //         if (action.payload.del == 0) {
        //            let newBasket= state.basket.filter(del => del.count !== 0);
        //            state.basket=newBasket;
        //         }

        //     })
        //     break
            case 'UPDATE_MEMBER':{
                debugger
                state.member={...action.payload}
                break
            }
            case 'ADD_MEMBER':{
                debugger
                state.member={...action.payload}
                break
            }
            case  'DELETE_MEMBER':{
                debugger
                state.member={...action.payload}
                break
            }
           
    }
}, state);

const store = createStore(reducer);
window.store = store;
export default store;




