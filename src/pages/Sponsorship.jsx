import React from 'react';
import SponsorshipCard from '../components/ui/SponsorshipCard';
import './Sponsorship.css';

function SponsorshipPage() {
  const tiers = [
    {
      icon: "💎",
      title: "Platinum Sponsor",
      price: "$2,000",
      period: "year",
      accentColor: "#60a5fa", // blue-400
      benefits: [
        "Weekly shoutout in #announcements",
        "Reach 17,000 members, 2,000 active",
        "Custom call-to-action message",
        "Priority placement in job postings",
        "Direct access to community insights",
        "Company logo on community resources"
      ],
      buttonText: "CLICK HERE",
    },
    {
      icon: "🏆",
      title: "Gold Sponsor",
      price: "$1,000",
      period: "year",
      accentColor: "#f59e0b", // amber-500
      benefits: [
        "Weekly shoutout in #developers OR #startups",
        "Reach 4,000 developers or 2,000 startup members",
        "Custom call-to-action message",
        "Enhanced job posting features",
        "Quarterly community analytics",
        "Company mention in newsletters"
      ],
      buttonText: "CLICK HERE",
    },
    {
      icon: "🥉", 
      title: "Bronze Sponsor",
      price: "$500",
      period: "year",
      accentColor: "#a0522d", // bronze
      benefits: [
        "Premium job postings with highlights",
        "Extended job post visibility",
        "Company logo in job listings",
        "Access to talent pipeline insights",
        "Monthly community updates",
        "Recognition in sponsor directory"
      ],
      buttonText: "CLICK HERE",
    },
    {
      icon: "❤️",
      title: "Generous Individual",
      price: "$13+",
      period: "year",
      accentColor: "#fb7185", // rose-400
      benefits: [
        "Sponsor your own seat ($13/year)",
        "Sponsor additional seats for others",
        "Recognition on our community wiki",
        "Optional GitHub/LinkedIn profile link",
        "Exclusive generous contributor badge",
        "Early access to community events"
      ],
      buttonText: "CLICK HERE",
    },
    {
      icon: "👤", 
      title: "Individual Member",
      price: "$13",
      period: "year",
      accentColor: "#94a3b8", // slate-400
      benefits: [
        "Sponsor your own Slack seat",
        "Support community sustainability",
        "Member contributor badge",
        "Access to all community channels",
        "Voting rights on community decisions",
        "Pride in supporting local tech"
      ],
      buttonText: "CLICK HERE",
    }
  ];

  return (
    <div className="sponsorship-page">
      {/* Header section */}
      <div className="page-header">
        <h1>ZATech Sponsorship</h1>
        <p className="subtitle">Supporting South Africa's Tech Community</p>
      </div>

      {/* Mission section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          ZATech is South Africa's largest tech community, connecting developers, entrepreneurs, and innovators across the rainbow nation. We're raising <strong>$20,000 per year</strong> to cover our Slack infrastructure costs and keep our community thriving. Your sponsorship directly supports knowledge sharing, networking, and career growth for thousands of South African tech professionals.
        </p>
      </div>

      {/* Main sponsorship tiers */}
      <div className="tiers-container">
        {tiers.map(tier => (
          <SponsorshipCard key={tier.title} {...tier} />
        ))}
      </div>

      {/* Bottom call-to-action */}
      <div className="bottom-cta">
        <h2>Ready to Support ZATech?</h2>
        <p>
          Join hundreds of companies and individuals who believe in the power of South African tech talent. 
          Together, we're building a stronger, more connected tech ecosystem.
        </p>
        <a href="#" className="cta-link">Get In Touch →</a>
      </div>
    </div>
  );
}

export default SponsorshipPage;