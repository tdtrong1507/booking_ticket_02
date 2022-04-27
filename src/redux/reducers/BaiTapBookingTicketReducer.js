import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTicketType"

const initialState = {
    danhSachGheDangDat: [

    ]
}

const BaiTapBookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatCapNhat.findIndex(gheDangDat => gheDangDat.soGhe === action.data.ghe.soGhe)

            if (index !== -1) {
                // ghế đang bấm đã có trong mảng
                danhSachGheDangDatCapNhat.splice(index, 1)
            } else {
                // ghế đang bấm chưa có trong mảng
                danhSachGheDangDatCapNhat.push(action.data.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
            return { ...state }
        }
            break;
        case HUY_GHE: {
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatCapNhat.findIndex((ghe) => {
                return ghe.soGhe === action.data.soGhe
            })
            console.log('index', index)

            if (index !== -1) {
                danhSachGheDangDatCapNhat.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatCapNhat

            return { ...state }
        }
        default:
            return { ...state }

            break;
    }


}

export default BaiTapBookingTicketReducer;