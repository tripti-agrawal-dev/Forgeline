export function ServiceArt({ i }: { i: number }) {
  const arts = [
    <><rect x="20" y="22" width="90" height="56" rx="8" fill="#1d4ed8" opacity=".5" /><rect x="70" y="40" width="110" height="64" rx="8" fill="#22d3ee" opacity=".35" /><circle cx="168" cy="30" r="16" fill="#7dd3fc" opacity=".6" /></>,
    <>{[0, 1, 2, 3, 4].map((k) => <rect key={k} x={24 + k * 34} y={100 - (k + 1) * 16} width="22" height={(k + 1) * 16} rx="5" fill={k % 2 ? "#22d3ee" : "#1d4ed8"} opacity=".6" />)}</>,
    <><circle cx="50" cy="60" r="18" fill="#1d4ed8" opacity=".7" /><circle cx="110" cy="35" r="12" fill="#22d3ee" opacity=".7" /><circle cx="160" cy="80" r="16" fill="#7dd3fc" opacity=".6" /><path d="M50 60 110 35 160 80" stroke="#fff" strokeOpacity=".4" fill="none" strokeWidth="1.5" /></>,
    <><path d="M30 90a26 26 0 0 1 8-50 34 34 0 0 1 66-6 28 28 0 0 1 56 22 22 22 0 0 1-4 34z" fill="#1d4ed8" opacity=".55" /><path d="M70 90h70" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" /></>,
    <><circle cx="100" cy="60" r="38" fill="none" stroke="#1d4ed8" strokeWidth="10" opacity=".7" /><path d="M78 60l16 16 30-34" stroke="#22d3ee" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>,
  ];
  return <svg viewBox="0 0 200 120" className="mb-5 h-28 w-full rounded-xl border border-white/10 bg-gradient-to-br from-brand/20 via-transparent to-accent/10" aria-hidden>{arts[i % 5]}</svg>;
}
