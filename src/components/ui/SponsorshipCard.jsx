import React from "react";
import "./SponsorshipCard.css";

function SponsorshipCard({ icon, title, price, period, benefits, buttonText, accentColor }) {
  return (
    <div className="sponsorship-card">
      <div className="accent-bar" style={{ backgroundColor: accentColor }} />
      {/* Header with icon and title */}
      <div className="card-header" aria-label={title}>
        <span className="tier-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="tier-title">{title}</h2>
      </div>

      {/* Price section */}
      <div className="price-section">
        <span className="price">{price}</span>
        <span className="period">/{period}</span>
      </div>

      {/* Separator */}
      <div className="card-separator" />

      {/* Benefits list */}
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">
            <span className="checkmark">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      {/* Action button */}
      <button className="sponsor-button">{buttonText}</button>
    </div>
  );
}
export default SponsorshipCard;