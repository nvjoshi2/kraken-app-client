import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTrade, deleteTrade, getTradeProfits } from '../actions/tradeActions';
import Select from 'react-select';
import moment from 'moment'
import './TradeList.css'
const TradeList = () => {
    const trades = useSelector(state => state.tradeReducer.trades)
    // const selectedTrade = useSelector(state => state.)
    const dispatch = useDispatch();

    const handleSelect = (tradeId) => {
        dispatch(selectTrade(tradeId))
        dispatch(getTradeProfits(tradeId))
    }
    
    const handleDelete = (tradeId) => {
        dispatch(deleteTrade(tradeId))
    }
    // dispatch()
    return(
        <div className = 'trade-list-container'>
            <ol className = 'trade-list'>
                <li className = 'trade-container'>
                    <div>Ticker</div>
                    <div>Bought Price</div>
                    <div>Bought Date</div>
                    <div>Quantity</div>
                    <div>Select Which To Show</div>
                    <div>Delete Trade</div>
                </li>
            {trades.map(({TradeId, Ticker, BoughtPrice, DateTime, Quantity}) => (
                <li className='trade'>
                    <div className = 'trade-container'>
                        <div>{Ticker}</div>
                        <div>{BoughtPrice}</div>
                        <div>{moment(DateTime).format('L')}</div>
                        <div>{Quantity}</div>
                        <button onClick = {() => handleSelect(TradeId)}>Show Graph</button>
                        <button onClick = {() => handleDelete(TradeId)}>x</button>
                    </div>
                </li>
            ))}
            </ol>
        </div>
    )
}

export default TradeList;