const Halo = () => (
  <div style={{ position: "absolute", inset: 0, background: "#0c0a14", color: "#e9e6ff", fontFamily: "Geist, Inter, system-ui", fontSize: 9, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.7 }}>
      <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg,#a78bfa,#7c3aed)" }} />
      <div>halo</div>
      <div style={{ marginLeft: "auto", padding: "2px 6px", border: "1px solid #2a2440", borderRadius: 6, fontSize: 8 }}>CMD K</div>
    </div>
    {[
      { f: "Iris Chen", s: "Re: refund request #8821", t: "2m", draft: true },
      { f: "Noah Park", s: "Onboarding issue", t: "7m", draft: false, urgent: true },
      { f: "Ana Reyes", s: "Great editor update", t: "14m" },
      { f: "Tom Vos", s: "Invoice missing", t: "1h", draft: true },
    ].map((message, index) => (
      <div key={index} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "6px 0", borderTop: index ? "1px solid #1c1830" : "none" }}>
        <div style={{ width: 14, height: 14, borderRadius: 14, background: `hsl(${index * 60 + 220} 60% 60%)`, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontWeight: 600 }}>{message.f}</span>
            {message.urgent && <span style={{ fontSize: 7, padding: "1px 4px", background: "#3b1320", color: "#ff8aa3", borderRadius: 3 }}>URGENT</span>}
            {message.draft && <span style={{ fontSize: 7, padding: "1px 4px", background: "#1a1430", color: "#a78bfa", borderRadius: 3 }}>AI DRAFT</span>}
            <span style={{ marginLeft: "auto", opacity: 0.5 }}>{message.t}</span>
          </div>
          <div style={{ opacity: 0.7, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{message.s}</div>
        </div>
      </div>
    ))}
  </div>
);

const Atlas = () => (
  <div style={{ position: "absolute", inset: 0, background: "#1a1208", overflow: "hidden", fontFamily: "Geist, Inter, system-ui", color: "#fde7c2" }}>
    <svg width="100%" height="100%" viewBox="0 0 200 280" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
      {Array.from({ length: 14 }).map((_, i) => (
        <path key={i} d={`M0 ${20 + i * 18} Q 50 ${10 + i * 18} 100 ${30 + i * 18} T 200 ${20 + i * 18}`} fill="none" stroke="#d97706" strokeWidth="0.4" opacity={0.3 + i * 0.04} />
      ))}
    </svg>
    {[{ x: 30, y: 40 }, { x: 120, y: 80 }, { x: 70, y: 140 }, { x: 160, y: 170 }].map((point, i) => (
      <div key={i} style={{ position: "absolute", left: `${(point.x / 200) * 100}%`, top: `${(point.y / 280) * 100}%`, width: 6, height: 6, borderRadius: 6, background: "#fbbf24", boxShadow: "0 0 0 2px rgba(251,191,36,.25), 0 0 12px #fbbf24" }} />
    ))}
    <div style={{ position: "absolute", left: 12, right: 12, bottom: 12, background: "rgba(26,18,8,.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(251,191,36,.3)", borderRadius: 8, padding: 10, fontSize: 9 }}>
      <div style={{ display: "flex", gap: 6, opacity: 0.7, fontSize: 8 }}>
        <span>52.3702 N / 4.8952 E</span>
        <span style={{ marginLeft: "auto" }}>14:22</span>
      </div>
      <div style={{ marginTop: 4, fontFamily: "'Instrument Serif', serif", fontSize: 14, lineHeight: 1.2 }}>Wind over the canal, with rain in the air.</div>
    </div>
  </div>
);

const Ritual = () => (
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#1a0d12,#2a1620)", color: "#ffe5ec", fontFamily: "Geist, Inter, system-ui", fontSize: 9, padding: 14 }}>
    <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.7, fontSize: 8 }}>
      <span>This week</span>
      <span>May 4 - 10</span>
    </div>
    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, marginTop: 6, lineHeight: 1 }}>Soft progress.</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginTop: 14 }}>
      {[0.2, 0.6, 0.9, 0.4, 0.7, 0.5, 0.3].map((value, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ width: "100%", height: 48, borderRadius: 4, background: "#3a1a26", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", height: `${value * 100}%`, background: "linear-gradient(180deg,#fb7185,#be123c)" }} />
          </div>
          <div style={{ fontSize: 7, opacity: 0.6 }}>{["M", "T", "W", "T", "F", "S", "S"][i]}</div>
        </div>
      ))}
    </div>
  </div>
);

const Prism = () => (
  <div style={{ position: "absolute", inset: 0, background: "#06151a", color: "#e0f7ff", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 8, padding: 12 }}>
    <div style={{ opacity: 0.6, fontSize: 7 }}>tokens / brand.json</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(11,1fr)", gap: 2, marginTop: 8 }}>
      {Array.from({ length: 33 }).map((_, i) => (
        <div key={i} style={{ aspectRatio: "1", background: `oklch(${20 + (i % 11) * 7}% 0.14 ${20 + Math.floor(i / 11) * 90})`, borderRadius: 2 }} />
      ))}
    </div>
  </div>
);

const Fold = () => (
  <div style={{ position: "absolute", inset: 0, background: "#f6f1e7", color: "#1a1410", fontFamily: "'Instrument Serif', serif", padding: 14, overflow: "hidden" }}>
    <div style={{ fontSize: 8, fontFamily: "Geist, system-ui", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5 }}>Essay / 14 min</div>
    <div style={{ fontSize: 18, lineHeight: 1.05, marginTop: 8, fontStyle: "italic" }}>Texture of attention</div>
    <div style={{ fontSize: 9, lineHeight: 1.5, marginTop: 10, columnCount: 2, columnGap: 10, textAlign: "justify" }}>
      Reading shifts with mood and context. The same words in the morning and evening can feel like a different story.
    </div>
  </div>
);

const Tide = () => (
  <div style={{ position: "absolute", inset: 0, background: "#04121e", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 200 280" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
      {Array.from({ length: 18 }).map((_, i) => (
        <path key={i} d={`M -10 ${140 + Math.sin(i * 0.6) * 8} Q 50 ${100 + i * 5} 100 ${140 + Math.sin(i * 0.6) * 8} T 210 ${140 + Math.sin(i * 0.6) * 8}`} fill="none" stroke="#38bdf8" strokeWidth="0.6" opacity={0.15 + i * 0.04} transform={`translate(0 ${(i - 9) * 6})`} />
      ))}
    </svg>
  </div>
);

export const PREVIEWS = {
  halo: Halo,
  atlas: Atlas,
  ritual: Ritual,
  prism: Prism,
  fold: Fold,
  tide: Tide,
};
