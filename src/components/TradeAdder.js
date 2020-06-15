import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { selectTrade, getTickerPrices, addTrade } from '../actions/tradeActions';
import './TradeAdder.css';
import { tickerSelectOptions } from '../tickers';
const TradeAdder = () => {
    const [tradeTicker, setTradeTicker] = useState('');
    const [tradeQuantity, setTradeQuantity] = useState(1)
    const [started, setStarted] = useState(false)
    const dispatch = useDispatch();
    // dispatch(getTickerPrices())

    const tickerPrices = useSelector(state => state.tradeReducer.tickerPrices)
    
    // const checkPrices = () => {
    //     dispatch(getTickerPrices())
    //     setInterval(() => {
    //         console.log('getTickerPrices dispatched')
    //         dispatch(getTickerPrices())
    //     }, 5000)
    // }

    useEffect(() => {
        if (!started) {
            console.log('getTickerPrices dispatched outside interval')
            dispatch(getTickerPrices());
            setStarted(true);
        }
        const interval = setInterval(() => {
            console.log('getTickerPrices dispatched')
            dispatch(getTickerPrices())
        }, 10000);
        return () => clearInterval(interval)
    })




    // console.log(tickerPrices)

    const onTickerChange = ({value}, {action}) => {
        console.log(value)
        setTradeTicker(value)
    }

    const onQuantityChange = (event) => {
        setTradeQuantity(event.target.value)
    }

    const onSubmit = (event) => {
        dispatch(addTrade(tradeTicker, tradeQuantity))
    }

    const selectedTickerPrice = () => {
        if (tradeTicker) {
            return '$'+ tickerPrices[tradeTicker]
        } else {
            return ''
        }
    }

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            width: '18rem',
            
        })
    }
    
    return(
        <div className = 'trade-adder-container'>
            <div className = 'select-container'><Select options = {tickerSelectOptions} styles = {selectStyles}  onChange = {onTickerChange}/></div>
            <input type="text" pattern="[0-9]*" value = {tradeQuantity} onChange = {onQuantityChange}/>
            <div>{'buy price: ' + selectedTickerPrice()}</div>
            <button onClick = {onSubmit}>Buy</button>
        </div>
    )

}

export default TradeAdder