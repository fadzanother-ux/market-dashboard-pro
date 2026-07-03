export function analyzeMarket(symbol, price) {
  const score = Math.random() * 100;

  if (score > 70) {
    return {
      signal: "🟢 BUY",
      score: score.toFixed(1),
      msg: `${symbol} momentum kuat naik.`
    };
  }

  if (score > 40) {
    return {
      signal: "🟡 HOLD",
      score: score.toFixed(1),
      msg: `${symbol} sideways market.`
    };
  }

  return {
    signal: "🔴 SELL",
    score: score.toFixed(1),
    msg: `${symbol} tekanan jual dominan.`
  };
}
