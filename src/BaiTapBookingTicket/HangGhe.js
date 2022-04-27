import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../redux/actions/BaiTapBookingTicketAction';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false
            // trạng thái ghế đã có người đặt
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true
            }

            // Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)

            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon"
            }



            return <button onClick={() => { this.props.datGhe(ghe) }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber" key={index}>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-5 pl-4">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div className='ml-5'>
                <span>{this.props.hangGhe.hang}</span> {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div style={{ fontSize: "28px" }} className='text-light ml-5'>
                {this.renderHangGhe()}
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
        datGhe: (ghe) => {
            let action = datGheAction(ghe)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)