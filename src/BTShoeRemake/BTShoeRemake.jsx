import React from 'react'
import shoeList from './data.json'
import ShoeList from './ShoeList'
import Cart from './Cart'
import ModalDetail from './ModalDetail'


const BTShoeRemake = () => {
  return (
    <div className='container'>
        <h1 className='text-center mt-3'>Bài tập Shoe-Shop Remake</h1>
      <ShoeList shoeList={shoeList}></ShoeList>
      <Cart></Cart>
      <ModalDetail></ModalDetail>
    </div>
  )
}

export default BTShoeRemake
