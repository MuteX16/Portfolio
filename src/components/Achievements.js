import React, { useState } from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'DECODE 2024 - University Capture the Flag Certificate of Participation',
    description: 'Participated in the DECODE 2024 Capture the Flag competition organized by Trend Micro.',
    date: 'Auguest 2024',
    link: 'https://www.linkedin.com/in/mark-yabes-602026253/overlay/1750492196720/single-media-viewer/?profileId=ACoAAD55PeIBwjZbWdWa3lD3G-CqJ9DFd-X7078', 
  },
  {
    title: 'Web Attack Investigator',
    description: 'Completed the Web Attack Investigator course on LetsDefend, enhancing skills in web security and attack analysis.',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/5d15868a3b9a41018d1fdb846dd152b7',
  },
  {
    title: 'SOC Fundamentals',
    description: 'Completed the SOC Fundamentals course on LetsDefend, gaining foundational knowledge in Security Operations Center operations.',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/6ecdb0b6-1dab-4f6a-bc9d-1e83e5d7f10c',
  },
  {
    title: 'SIEM 101',
    description: 'Completed the SIEM 101 course on LetsDefend, learning the basics of Security Information and Event Management systems.',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/6acadea3-14d1-46fd-a03d-3946a9cd8dd3',
  },
  {
    title: 'Browser Forensics',
    description: 'Completed the Browser Forensics course on LetsDefend, focusing on digital forensics techniques related to web browsers.',
    date: 'March 2025',
    link: 'https://app.letsdefend.io/my-rewards/detail/b951f6ce-d7d2-40b5-844f-226e8536220f',
  },
  {
    title: 'Windows Forensics',
    description: 'Completed the Windows Forensics course on LetsDefend, enhancing skills in digital forensics specific to Windows operating systems.',
    date: 'March 2025',
    link: 'https://app.letsdefend.io/my-rewards/detail/ea3d3033-9f49-4241-a567-4dd295dc28c7',
  },
  {
    title: 'Network Packet Analysis',
    description: 'Completed the Network Packet Analysis course on LetsDefend, learning to analyze network traffic for security insights.',
    date: 'December 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/737e8ef7-af3f-42fb-8e80-8065b2b12485',
  },
  {
    title: 'SIEM Basics, Installation and Configuration',
    description: 'Completed the SIEM Basics, Installation and Configuration course on LetsDefend, focusing on setting up and configuring SIEM systems.',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/056cb3a4-c21e-4fee-b23e-8d29dda2462b',
  },
  {
    title: 'Phishing Analyzer',
    description: 'Completed the Phishing Email course on LetsDefend, learning to identify and analyze phishing attacks through email.',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/637a25d2-0cfb-42d6-8b98-2925e456d0f9',
  },
  {
    title: 'Header Analyst',
    description: 'Completed the Header Analyst course on LetsDefend, focusing on analyzing HTTP headers for security insights.',
    date: 'November 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/57c0aa5d-77de-4c5f-953e-6460731e773a',
  },
{
    title: 'Network Enumeration with Nmap',
    description: 'Completed the Network Enumeration with Nmap course on Hack The Box Academy, mastering network scanning and enumeration techniques using Nmap.',
    date: 'November 2024',
    link: 'https://academy.hackthebox.com/achievement/badge/cc1a4cad-a7fd-11ef-864f-bea50ffe6cb4',
  },
  {
    title: 'Using the Metasploit Framework',
    description: 'Completed the Using the Metasploit Framework course on Hack The Box Academy, gaining expertise in penetration testing using Metasploit.',
    date: 'September 2024',
    link: 'https://academy.hackthebox.com/achievement/badge/ef3cc98b-6a2a-11ef-864f-bea50ffe6cb4',
  },
  {
    title: ' Intro to Network Traffic Analysis',
    description: 'Completed the Intro to Network Traffic Analysis course on Hack The Box Academy, learning the fundamentals of analyzing network traffic for security purposes.',
    date: 'November 2024',
    link: 'https://academy.hackthebox.com/achievement/badge/b4551614-9b6c-11ef-864f-bea50ffe6cb4',
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Completed the Vulnerability Assessment course on Hack The Box Academy, focusing on identifying and assessing vulnerabilities in systems.',
    date: 'October 2024',
    link: 'https://academy.hackthebox.com/achievement/badge/1dbdfae1-95f0-11ef-864f-bea50ffe6cb4',
  },
  {
    title: 'Web Fuzzing',
    description: 'Completed the Web Fuzzing course on Hack The Box Academy, mastering techniques for discovering vulnerabilities in web applications through fuzzing.',
    date: 'December 2024',
    link: 'https://academy.hackthebox.com/achievement/badge/c029ea07-b49b-11ef-864f-bea50ffe6cb4',
  },
  {
    title: 'How to build the UI in a canvas app in Power Apps',
    description: 'Completed the course building user interfaces in Power Apps canvas apps on Microsoft Learn, enhancing skills in low-code application development.',
    date: 'April 2023',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/HXKE52H8?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Customize a canvas app in Power Apps',
    description: 'Completed the course on customizing canvas apps in Power Apps on Microsoft Learn, focusing on enhancing app functionality and user experience.',
    date: 'April 2023',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/PBNK8WT4?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Get started with Power Apps canvas apps',
    description: 'Completed the introductory course on Power Apps canvas apps on Microsoft Learn, learning the basics of building low-code applications.',
    date: 'March 2023',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/EDNMQ4UP?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Introduction to GitHub',
    description: 'Completed the Introduction to GitHub course on Microsoft Learn, gaining foundational knowledge in version control and collaboration using GitHub.',
    date: 'October 2022',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/C33UCTX9?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Explore data roles and services',
    description: 'Completed the course on exploring data roles and services on Microsoft Learn, understanding various data management roles and services available in the cloud.',
    date: 'October 2022',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/HFZG6JL8?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Describe cloud computing',
    description: 'Completed the course on describing cloud computing on Microsoft Learn, gaining a foundational understanding of cloud concepts and services.',
    date: 'October 2022',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/KT6P9G2B?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Describe cloud service types',
    description: 'Completed the course on describing cloud service types on Microsoft Learn, learning about different cloud service models such as IaaS, PaaS, and SaaS.',
    date: 'October 2022',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/HFZG6JL8?sharingId=91656D5DD76366A8',
  },
  {
    title: 'Describe the benefits of using cloud services',
    description: 'Completed the course on describing the benefits of using cloud services on Microsoft Learn, understanding the advantages of cloud computing for businesses and developers.',
    date: 'October 2022',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/MarkJohnWayneYabes-0139/98X5J4ZU?sharingId=91656D5DD76366A8',
  },
  // Add more achievements as needed
];

function Achievements(props) {
  // Show 2 or 3 rows (e.g., 3 columns x 3 rows = 9 achievements)
  const COLUMNS = 3;
  const ROWS = 2;
  const INITIAL_COUNT = COLUMNS * ROWS;

  const [showAll, setShowAll] = useState(false);

  const visibleAchievements = showAll ? achievements : achievements.slice(0, INITIAL_COUNT);

  return (
    <section className="Achievements section-card" id="achievements" {...props}>
      <h2>Achievements</h2>
      <ul className="Achievements-list">
        {visibleAchievements.map((ach, idx) => (
          <li key={idx} className="Achievement-card">
            <div>
              <strong>{ach.title}</strong>
              <br />
              <span>{ach.description}</span>
              <br />
              <span style={{ fontSize: '0.95em', color: '#bbb' }}>{ach.date}</span>
            </div>
            {ach.link && (
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '8px',
                  color: '#61dafb',
                  fontSize: '0.95em',
                  textDecoration: 'none',
                }}
              >
                View
              </a>
            )}
          </li>
        ))}
      </ul>
      {achievements.length > INITIAL_COUNT && (
        <div style={{ textAlign: 'center', marginTop: '18px' }}>
          <button
            className="see-more-btn"
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              background: '#61dafb',
              color: '#222',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 18px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1em',
            }}
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
}

export default Achievements;