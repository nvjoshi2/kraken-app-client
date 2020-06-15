import { useDispatch } from 'react-redux';
import { getTickerPrices } from './actions/tradeActions';
const dispatch = useDispatch();

export const checkPrices = () => {
    setInterval(() => {
        console.log('getTickerPrices dispatched')
        dispatch(getTickerPrices())
    }, 5000)
}