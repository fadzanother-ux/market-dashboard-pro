import { useEffect, useState } from "react";
import { connectCrypto } from "../lib/binance";
import { cryptoList } from "../lib/cryptoList";

export function useCrypto() {
  const [prices, setPrices] = useState({});
  const [history, setHistory] = useState({});

  useEffect(() => {
    const socket = connectCrypto(
      cryptoList.map(c => c.id),
      (tick) => {

        setPrices(prev => ({
          ...prev,
          [tick.symbol]: tick.price
        }));

        setHistory(prev => {
          const old = prev[tick.symbol] || [];
          return {
            ...prev,
            [tick.symbol]: [...old, tick.price].slice(-20)
          };
        });

      }
    );

    return () => socket.close();
  }, []);

  return { prices, history };
                   }
