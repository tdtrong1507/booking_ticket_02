import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTicketType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        data: {
            ghe
        }
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type: HUY_GHE,
        data: {
            soGhe
        }
    }
}