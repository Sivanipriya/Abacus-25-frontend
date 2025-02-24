import React from "react";
import IndividualSponsors from "./IndividualSponsors";
import "../styles/IndividualSponsors.css";

const sponsorsData = [
  {
    name: "MOTORQ",
    description:
      "Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless...",
    image: "motorq-logo.png", // Replace with actual image path
    website: "https://www.motorq.com/",
  },
  {
    name: "APPIAN",
    description:
      "Appian is a software company that automates business processes. The Appian AI Process Platform includes everything you need to design, automate, and optimize even the most complex processes...",
    image: "appian-logo.png", // Replace with actual image path
    website: "https://www.appian.com/",
  },
];

const SponsorsPage = () => {
  return (
    <div class="sponsor-card">
    <div class="sponsor-image">
        <img src="motorq-logo.png" alt="Motorq Logo"/>
    </div>
    <div class="sponsor-content">
        <h2 class="sponsor-title">MOTORQ</h2>
        <p>Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They’re committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster, and more cost-effective insights so the clients can focus on what they do best.</p>
    </div>
</div>

  );
};

export default SponsorsPage;
