import React from 'react'
import { BTShoeAction } from '../redux/action'
import { useDispatch } from 'react-redux'


const ShoeItem = (props) => {
    const { shoe } = props
    const dispatch = useDispatch()
    return (
        <div className='col-4'>
            <div className="card mb-4 " >
                <img src={shoe.image} alt="" style={{
                    width:270,
                }} />
                <div className="card-body" style={{
                height:160,
            }}>
                    <h4>{shoe.name}</h4>
                    <p>{shoe.description}</p>
                </div>
                <div className="card-foot d-flex justify-content-between">
                    <button className='btn btn-outline-dark' data-bs-toggle="modal" data-bs-target="#cartModal" onClick={()=>{
                        dispatch(BTShoeAction.handleCart(shoe))
                    }}>Add to cart</button>
                    <button className='btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#detailModal" onClick={()=>{
                        dispatch(BTShoeAction.handleDetailShoe(shoe))
                    }}>Detail</button>
                </div>
            </div>
        </div>
    )
}

export default ShoeItem
