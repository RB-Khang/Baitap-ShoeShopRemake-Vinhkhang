import React from 'react'
import { useSelector } from 'react-redux'



const ModalDetail = () => {
    const { productDetail } = useSelector(state => state.BtShoeReducer)
    // console.log(productDetail);
    return (
        <div>
            <div className="modal fade" id="detailModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông tin sản phẩm</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body row">
                            <div className="col-4">
                                <img src={productDetail.image} alt="" style={{
                                    width:250,
                                }} />
                            </div>
                            <div className="col-8">
                                <table className="table">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Sản phẩm:</td>
                                            <td>{productDetail.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại:</td>
                                            <td>{productDetail.alias}</td>
                                        </tr>
                                        <tr>
                                            <td>Mô tả:</td>
                                            <td>{productDetail.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Giá:</td>
                                            <td>{productDetail.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalDetail
