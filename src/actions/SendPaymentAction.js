import axios from 'axios';
import {BIDGONG_SERVICE_MAIN_ADDRESS} from '../config/Config';
export const SEND_PAYMENT = 'SEND_PAYMENT';

export function sendPayment(paymentInfo){
	return {
		type: SEND_PAYMENT,
		payload: new Promise((resolve, reject) => {
            resolve(axios.post(`${BIDGONG_SERVICE_MAIN_ADDRESS}/api/Payment/MakePayment`,paymentInfo)				
            .then(res => res.data)
            )
        })
	}
}
