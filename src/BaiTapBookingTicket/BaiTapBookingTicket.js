import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div className='text-left' key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }


    render() {
        return (
            <div className='bookingMovie' style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', height: "100%", width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 text-center'>
                            <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM</div>
                            <div className="mt-2 text-light" style={{ fontSize: '30px' }}>Màn hình</div>
                            <div className="d-flex flex-row justify-content-center mt-2 " >
                                <div className="screen"></div>
                            </div>
                            {this.renderHangGhe()}
                        </div>

                        <div className='col-4'>
                            <div style={{ fontSize: '24px' }} className='text-light text-center mt-2'>DANH SÁCH GHẾ ĐANG CHỌN</div>
                            <ThongTinDatGhe />
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
