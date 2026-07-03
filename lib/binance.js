// Real-time Bitcoin price dari Binance WebSocket

export function connectBTC(callback) {
  const socket = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@trade"
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    callback({
      price: parseFloat(data.p),
      time: data.T
    });
  };

  socket.onopen = () => {
    console.log("BTC WebSocket Connected 🚀");
  };

  socket.onerror = (err) => {
    console.log("WebSocket Error:", err);
  };

  return socket;
}
