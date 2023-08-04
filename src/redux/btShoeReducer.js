import { DECREASE_ITEM, HANDLE_CART, HANDLE_PRODUCTDETAIL, INCREASE_ITEM, CLEAR_CART, DELETE_CART } from "./actionType";

const initialState = {
    productDetail: {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    cartList: [],
}




export const BtShoeReducer = ((state = initialState, action) => {
    switch (action.type) {
        case HANDLE_PRODUCTDETAIL:
            {
                let newProductDetail = { ...action.payload }
                return { ...state, productDetail: newProductDetail }
            }
        case HANDLE_CART:
            {
                let pushItem = { ...action.payload }
                let trung = state.cartList.findIndex((item) => {
                    return item.id === pushItem.id
                })
                if (trung === -1) {
                    let newPushItem = { ...pushItem, soLuong: 1 }
                    state.cartList.push(newPushItem)
                }
                else {
                    state.cartList[trung].soLuong += 1
                }
                return { ...state }
            }
        case INCREASE_ITEM: {
            let increaseItem = { ...action.payload }
            let trung = state.cartList.findIndex((item) => {
                return item.id === increaseItem.id
            })
            state.cartList[trung].soLuong += 1
            return { ...state }
        }
        case DECREASE_ITEM: {
            let decreaseItem = { ...action.payload }
            let trung = state.cartList.findIndex((item) => {
                return item.id === decreaseItem.id
            })
            state.cartList[trung].soLuong = state.cartList[trung].soLuong - 1 || 1
            return { ...state }
        }
        case DELETE_CART: {
            let deleteItem = {...action.payload}
            let idDelete = state.cartList.findIndex(item =>item.id ===deleteItem.id)
            state.cartList.splice(idDelete,1)
            return { ...state }
        }
        case CLEAR_CART: {
            let clearCart = []
            state.cartList = clearCart
            return { ...state }
        }
        default:
            return state
            break;
    }
    return state
})