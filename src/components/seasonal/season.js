// Halloween season: 15 Oct – 1 Nov. From 2 Nov the hero goes back to the gold
// serum drops by itself. ?halloween=1 previews it, ?halloween=0 turns it off.
export const isHalloween = () => {
  if (typeof window === "undefined") return false;
  const q = /[?&]halloween=([01])/.exec(window.location.search);
  if (q) return q[1] === "1";
  const d = new Date();
  const m = d.getMonth();
  const day = d.getDate();
  return (m === 9 && day >= 15) || (m === 10 && day < 2);
};
