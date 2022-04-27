import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BaiTapBookingTicketAction'

class ThongTinDatGhe extends Component {
    renderThongTinGhe = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return <tr style={{ fontSize: '18px' }} className=' text-success' key={index}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia.toLocaleString()}</td>
                <td><button onClick={() => { this.props.huyGhe(ghe.soGhe) }} className='btn btn-danger'>Hủy</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div style={{ fontSize: "20px" }} className='mt-5'>
                    <button className='gheDuocChon'></button><span className='text-light ml-3'>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button><span className='text-light ml-3'>Ghế đang chọn</span>
                    <br />
                    <button className='ghe ml-0'></button><span className='text-light ml-3'>Ghế chưa đặt</span>
                </div>

                <div className='mt-5'>
                    <table className="table">
                        <thead>
                            <tr className="text-light" style={{ fontSize: 24 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Tác Vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderThongTinGhe()}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning" style={{ fontSize: 20 }}>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.gia
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapBookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch(huyGheAction(soGhe))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)