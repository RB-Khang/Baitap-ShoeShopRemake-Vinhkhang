import React from 'react'
import ShoeItem from './ShoeItem'

const ShoeList = ({shoeList}) => {
    // console.log(shoeList);
  return (
    <div className='row mt-5'>
        {shoeList.map(shoe =>{
            return <ShoeItem key={shoe.id} shoe={shoe}></ShoeItem>
        })
        }
      
    </div>
  )
}

export default ShoeList
