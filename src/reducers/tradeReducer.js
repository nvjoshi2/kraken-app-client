import { GET_TRADES, ADD_TRADE, DELETE_TRADE, GET_TRADE_PROFITS, SELECT_TRADE, GET_TICKER_PRICES } from '../actions/types';

const initialState = {
    trades: [],
    tradeProfits: [],
    selectedTrade: {},
    tickerPrices: {}
}

export const tradeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TRADES:
            return {
                ...state,
                trades: action.payload
            }

        case ADD_TRADE:
            console.log(action.payload)
            return {
                ...state,
                trades: [action.payload, ...state.trades] //not sure if im giving the trade as a payload on the server side
            }
        case DELETE_TRADE:
            return {
                ...state,
                trades: state.trades.filter((trade) => trade.TradeId != action.payload)
            }

        case GET_TRADE_PROFITS:
            return {
                ...state,
                tradeProfits: action.payload
            }

        case SELECT_TRADE:
            return {
                ...state,
                selectedTrade: state.trades.filter(trade => trade.TradeId == action.payload)[0]
            }
        case GET_TICKER_PRICES:
            return {
                ...state,
                tickerPrices: action.payload
            }
        default:
            return {...state}
    }
}