import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getTrades, getTradeProfits, deleteTrade } from './actions/tradeActions';
import { useSelector, useDispatch } from 'react-redux';
import TimeSeriesChart from './components/TimeSeriesChart';
import TradeList from './components/TradeList';
import TradeAdder from './components/TradeAdder';
function App() {

  const dispatch = useDispatch();
  dispatch(getTrades())
  return (
    <div>
      <h1>KRAKEN APP</h1>
      {/* <button onClick = {() => dispatch(getTrades())}>get trades</button> */}
      {/* <button onClick = {() => dispatch(getTradeProfits(1))}>get trade profits</button> */}
      {/* <button onClick = {() => dispatch(deleteTrade(8))}>Delete trade 8</button> */}
      <TradeList/>
      <h2>Add Trade</h2>
      <TradeAdder/>
      <h2>Trade Profits</h2>
      <TimeSeriesChart/>

    </div>
  );
}

export default App;
