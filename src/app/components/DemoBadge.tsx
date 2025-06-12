import "./DemoBadge.css";

export function DemoBadge() {
  return (
    <div className="demoBadge">
      <div className="demoBadgeContent">
        <p className="demoBadgeTitle">
          Turnkey Demo Product
        </p>
        <p className="demoBadgeSubtitle">
          Not a production system. Not in scope for security research.
        </p>
      </div>
    </div>
  );
}
