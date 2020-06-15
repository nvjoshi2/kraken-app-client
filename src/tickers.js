const tickerMap = {
    'ADA': 'ADAUSD',
    'ALGO' : 'ALGOUSD',
    'ATOM' : 'ATOMUSD',
    'BAT' : 'BATUSD',
    'BCH' : 'BCHUSD',
    'DAI' : 'DAIUSD',
    'DASH' : 'DASHUSD',
    'GNO' : 'GNOUSD',
    'ICX' : 'ICXUSD',
    'LINK': 'LINKUSD',
    'LSK' : 'LSKUSD',
    'NANO' : 'NANOUSD',
    'OMG' : 'OMGUSD',
    'OXT':  'OXTUSD',
    'PAXG' : 'PAXGUSD',
    'QTUM' : 'QTUMUSD',
    'SC' : 'SCUSD',
    'TRX' : 'TRXUSD',
    'USDC': 'USDCUSD',
    'USDT' : 'USDTZUSD',
    'WAVE' : 'WAVESUSD',
    'XDG' : 'XDGUSD',
    'ETC' : 'XETCZUSD',
    'ETH' : 'XETHZUSD',
    'LTC' : 'XLTCZUSD',
    'MLN' : 'XMLNZUSD',
    'REP' : 'XREPZUSD',
    'XTZ' : 'XTZUSD',
    'BTC' : 'XXBTZUSD',
    'XLM' : 'XXLMZUSD',
    'XMR' : 'XXMRZUSD',
    'XRP' : 'XXRPZUSD',
    'ZEC' : 'XZECZUSD'
}
export const tickerSelectOptions = Object.keys(tickerMap).map(naturalTicker => ({value: tickerMap[naturalTicker], label: naturalTicker}))
const reverseMapping = o => Object.keys(o).reduce((r, k) =>
        Object.assign(r, { [o[k]]: (r[o[k]] || []).concat(k) }), {})

const tickerMapInverse = reverseMapping(tickerMap)
const krakenTickers = Object.values(tickerMap)
const naturalTickers = Object.keys(tickerMap)


