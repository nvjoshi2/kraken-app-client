import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { LineChart, XAxis, YAxis, ScatterChart, Scatter, ResponsiveContainer, Tooltip, Legend, Line } from 'recharts';
import moment from 'moment'
import { getTradeProfits } from '../actions/tradeActions';
// import 
const TimeSeriesChart = () => {
    const selectedTrade = useSelector(state => state.tradeReducer.selectedTrade);
    console.log(selectedTrade)
    const profits = useSelector(state => state.tradeReducer.tradeProfits)
    const dispatch = useDispatch()
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('getTradeProfits dispatched')
            dispatch(getTradeProfits(selectedTrade.TradeId))
        }, 30000);
        return () => clearInterval(interval)
    })
    return (
        <div className = 'chart'>
            {/* <ResponsiveContainer width = '95%' height = {500}> */}
                <LineChart width={730} height={250} data={profits}>
                    <XAxis 
                        dataKey = "DateTime"
                        domain = {['auto', 'auto']}
                        name = 'Time'
                        tickFormatter = {(unixTime) => moment(unixTime).format('L')}
                        type = 'number'
                    />
                    <YAxis name='Profit'/>
                    <Tooltip labelFormatter = {(label) => moment(label).format('MMMM Do YYYY, h:mm:ss a')}/>
                    <Legend/>

                    {/* <Scatter
                        data = {profits}
                        line = {{stroke: '#eee'}}
                        // lineJointType = 'monotoneX'
                        lineType = 'joint'
                        name = 'Profit Graph'
                        
                    /> */}
                    <Line
                        type ='linear'
                        dataKey = 'Profit'
                        stroke = '#5741D9'
                        dot= {false}
                    />

                </LineChart>
            {/* </ResponsiveContainer> */}

        </div>
    )
}

export default TimeSeriesChart;