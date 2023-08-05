import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BTShoeAction } from '../redux/action'

const Cart = () => {
    const { cartList } = useSelector(state => state.BtShoeReducer)
    let sumMoney = 0
    const dispatch = useDispatch()
    return (
        <div>
            <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <img className='col-4' src="" alt="" />
                                <table className='table col-8'>
                                    <thead>
                                        <tr className='fw-bold'>
                                            <td className='text-center'>STT</td>
                                            <td>Tên</td>
                                            <td>Ảnh</td>
                                            {/* <td>Mô tả</td> */}
                                            <td className='text-center'>Giá tiền</td>
                                            <td className='text-center'>Số lượng</td>
                                            <td className='text-center'>Thành tiền</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartList.map((item, index) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td ><img src={item.image} style={{
                                                            width: 70,
                                                        }}></img></td>
                                                        {/* <td>{item.shortDescription}</td> */}
                                                        <td className='text-center'>{item.price}</td>
                                                        <td><button className='btn btn-outline-dark small-button' onClick={() => {
                                                            dispatch(BTShoeAction.increaseItem(item))
                                                        }}>+</button>  {item.soLuong}  <button className='btn btn-outline-dark small-button' onClick={() => {
                                                            dispatch(BTShoeAction.decreaseItem(item))
                                                        }}>-</button></td>
                                                        <td className='text-center'>$ {item.soLuong * item.price}</td>
                                                        <td className='text-center'><button className='btn btn-danger small-button' onClick={() => {
                                                            dispatch(BTShoeAction.deleteCart(item))
                                                        }}>x</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tr>
                                        <td></td>
                                        <td>Tổng tiền</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className='fw-bold text-center'>$ {
                                            cartList.reduce((total, currentValue) => {
                                                return total + currentValue.soLuong * currentValue.price
                                            }, 0)
                                        }</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                dispatch(BTShoeAction.clearCart())
                            }}>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
