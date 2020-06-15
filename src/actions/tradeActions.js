import axios from 'axios';
import { GET_TRADES, ADD_TRADE, DELETE_TRADE, GET_TRADE_PROFITS, SELECT_TRADE, GET_TICKER_PRICES } from './types'

export const getTrades = () => dispatch => {
    axios
        .get('http://localhost:5000/api/trades')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_TRADES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addTrade = (ticker, quantity) => dispatch => {
    const tradeData = {
        ticker,
        quantity
    }
    axios
        .post('http://localhost:5000/api/trades', tradeData)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_TRADE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const deleteTrade = (tradeId) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/trades/${tradeId}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_TRADE,
                payload: tradeId
            })
        })
        .catch(err => console.log(err))
}

export const getTradeProfits = (tradeId) => dispatch => {
    axios
        .get(`http://localhost:5000/api/tradeProfits/${tradeId}`)
        .then(res => {
            // console.log(res)
            dispatch({
                type: GET_TRADE_PROFITS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const selectTrade = (tradeId) => {
    return {
        type: SELECT_TRADE,
        payload: tradeId
    }
}

export const getTickerPrices = () => dispatch => {
    axios
        .get('http://localhost:5000/api/tickerPrices')
        .then(res => {
            // console.log(res)
            dispatch({
                type: GET_TICKER_PRICES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}