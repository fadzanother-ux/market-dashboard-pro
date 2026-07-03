import { useState } from "react";
import { useCrypto } from "../hooks/useCrypto";
import { cryptoList } from "../lib/cryptoList";
import { stockList } from "../lib/stockList";
import { analyzeMarket } from "../lib/aiEngine";
import AssetCard from "../components/AssetCard";

export default function Home() {

  const { prices, history } = useCrypto();
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  function toggleWatch(symbol) {
    setWatchlist(prev =>
      prev.includes(symbol)
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  }

  return (
    <div style={styles.container}>

      <h1>🚀 ULTRA TRADING DASHBOARD</h1>

      <input
        placeholder="Search asset..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={styles.search}
      />

      {/* CRYPTO */}
      <h2>🪙 Crypto</h2>
      <div style={styles.grid}>
        {cryptoList
          .filter(c => c.name.toLowerCase().includes(search))
          .map((c, i) => (
            <AssetCard
              key={i}
              icon={c.icon}
              name={c.name}
              symbol={c.symbol}
              price={prices[c.symbol]}
              history={history[c.symbol]}
              ai={analyzeMarket(c.symbol, prices[c.symbol] || 0)}
              watched={watchlist.includes(c.symbol)}
              onWatch={() => toggleWatch(c.symbol)}
            />
          ))}
      </div>

      {/* STOCK */}
      <h2 style={{ marginTop: 30 }}>🏦 Stocks</h2>
      <div style={styles.grid}>
        {stockList
          .filter(s => s.name.toLowerCase().includes(search))
          .map((s, i) => (
            <AssetCard
              key={i}
              icon={s.icon}
              name={s.name}
              symbol={s.symbol}
              price={(Math.random() * 200).toFixed(2)}
              ai={analyzeMarket(s.symbol, 100)}
              watched={watchlist.includes(s.symbol)}
              onWatch={() => toggleWatch(s.symbol)}
            />
          ))}
      </div>

      {/* WATCHLIST */}
      <h2 style={{ marginTop: 30 }}>⭐ Watchlist</h2>
      <div style={styles.grid}>
        {watchlist.map((s, i) => (
          <div key={i} style={styles.card}>
            <h3>{s}</h3>
            <h2>${prices[s] || "0.00"}</h2>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    background: "#0b1220",
    color: "white",
    minHeight: "100vh",
    padding: 20,
    fontFamily: "Arial"
  },

  search: {
    padding: 10,
    width: "100%",
    marginBottom: 20
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 15
  },

  card: {
    background: "#111827",
    padding: 15,
    borderRadius: 12
  }
};
