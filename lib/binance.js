export function connectCrypto(symbols, callback) {
  const streams = symbols.map(s => `${s}@trade`).join("/");

  const socket = new WebSocket(
    `wss://stream.binance.com:9443/stream?streams=${streams}`
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const trade = data.data;

    callback({
      symbol: trade.s,
      price: parseFloat(trade.p)
    });
  };

  return socket;
}
