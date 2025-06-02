import "./DemoBanner.css";

export function DemoBanner() {
  return (
    <div className="demoBanner">
      <div className="demoBannerContent">
        <p className="demoBannerTitle">
          Turnkey Demo Product
        </p>
        <p className="demoBannerSubtitle">
          Not a production system. Not in scope for security research.
        </p>
      </div>
    </div>
  );
}
