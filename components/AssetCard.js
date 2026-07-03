export default function AssetCard({
  icon,
  name,
  symbol,
  price,
  ai,
  history,
  onWatch,
  watched
}) {

  return (
    <div style={{
      background: "#111827",
      padding: 15,
      borderRadius: 12
    }}>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 10 }}>
          <img src={icon} width="28" />
          <b>{name}</b>
        </div>

        <button onClick={onWatch}>
          {watched ? "⭐" : "☆"}
        </button>
      </div>

      <h2>${price || "0.00"}</h2>

      {/* MINI CHART */}
      <div style={{ display: "flex", gap: 2 }}>
        {(history || []).map((p, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: p / 200,
              background: "#00ff88"
            }}
          />
        ))}
      </div>

      {ai && (
        <div style={{ marginTop: 10 }}>
          <b>{ai.signal}</b>
          <p style={{ fontSize: 12 }}>{ai.msg}</p>
          <small>Score: {ai.score}</small>
        </div>
      )}

    </div>
  );
  }
