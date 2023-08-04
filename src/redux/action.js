import { DECREASE_ITEM, HANDLE_CART, HANDLE_PRODUCTDETAIL, INCREASE_ITEM, CLEAR_CART ,DELETE_CART} from './actionType'


export const BTShoeAction = {
    handleDetailShoe: (payload) => {
        return {
            type: HANDLE_PRODUCTDETAIL,
            payload
        }
    },
    handleCart: (payload) => {
        return {
            type: HANDLE_CART,
            payload
        }
    },
    increaseItem: (payload) => {
        return {
            type: INCREASE_ITEM,
            payload
        }
    },
    decreaseItem: (payload) => {
        return {
            type: DECREASE_ITEM,
            payload
        }
    },
    clearCart: (payload) => {
        return {
            type: CLEAR_CART,
            payload
        }
    },
    deleteCart: (payload) => {
        return {
            type: DELETE_CART,
            payload
        }
    }



}