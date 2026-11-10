import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Generates and downloads a clean, high-resolution PDF resume for Shakthi P
 * based on the exact resume content provided.
 */
export function downloadResumePdf(): void {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    const contentWidth = pageWidth - margin * 2;
    let y = 46;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - 40) {
        doc.addPage();
        y = 45;
      }
    };

    // Header: Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(17, 24, 39);
    doc.text('SHAKTHI P', margin, y);

    // Header: Contact Details
    y += 18;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 85, 99);
    const contactLine = `Phone: +91 8217479968   |   Email: shakthipthulasi@gmail.com   |   Bengaluru, India`;
    doc.text(contactLine, margin, y);

    y += 13;
    const linksLine = `LinkedIn: ${PERSONAL_INFO.linkedin}   |   GitHub: ${PERSONAL_INFO.github}`;
    doc.text(linksLine, margin, y);

    y += 14;
    doc.setDrawColor(209, 213, 219);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);

    const addSectionHeader = (title: string) => {
      checkPageBreak(35);
      y += 18;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(31, 41, 55);
      doc.text(title.toUpperCase(), margin, y);

      y += 4;
      doc.setDrawColor(124, 58, 237); // Purple accent bar
      doc.setLineWidth(1.5);
      doc.line(margin, y, margin + 55, y);
      y += 12;
    };

    // 1. PROFESSIONAL SUMMARY
    addSectionHeader('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(55, 65, 81);
    const summary =
      'MCA graduate with practical experience in Python and Flask through academic projects, along with foundational knowledge of React.js and MongoDB. Familiar with REST APIs, database concepts, and software development practices. Interested in developing reliable software applications and expanding full-stack development skills.';
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    checkPageBreak(splitSummary.length * 11);
    doc.text(splitSummary, margin, y);
    y += splitSummary.length * 11 + 2;

    // 2. TECHNICAL SKILLS
    addSectionHeader('Technical Skills');
    const skills = [
      { label: 'Programming Languages', val: 'Python, JavaScript, Java' },
      { label: 'Frontend', val: 'React.js (Basic), HTML5, CSS3' },
      { label: 'Backend', val: 'Flask, REST API Fundamentals' },
      { label: 'Databases', val: 'MongoDB (Basic), SQL' },
      { label: 'Development Tools', val: 'Git, GitHub, VS Code, Postman, JIRA' },
      { label: 'Core Concepts', val: 'OOP, JSON, HTTP Methods, CRUD Fundamentals' },
      { label: 'Testing', val: 'Functional Testing, Regression Testing, Smoke Testing, API Testing' },
      { label: 'Machine Learning', val: 'PyTorch, LSTM, Isolation Forest' },
    ];

    skills.forEach((s) => {
      checkPageBreak(13);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(31, 41, 55);
      const prefix = `${s.label}: `;
      doc.text(prefix, margin, y);
      const prefixWidth = doc.getTextWidth(prefix);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(75, 85, 99);
      doc.text(s.val, margin + prefixWidth, y);
      y += 12;
    });

    // 3. ACADEMIC PROJECTS
    addSectionHeader('Academic Projects');

    // Project 1: Real-Time Insider Threat Detection
    checkPageBreak(65);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text('Real-Time Insider Threat Detection Using Behavioral Analysis', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const p1Type = 'MCA Major Project';
    const p1Width = doc.getTextWidth(p1Type);
    doc.text(p1Type, pageWidth - margin - p1Width, y);

    y += 12;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(99, 102, 241);
    doc.text('Python, Flask, Isolation Forest, JWT, bcrypt, RBAC', margin, y);

    y += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);

    const p1Bullets = [
      'Developed a Python-based application to identify unusual employee activities and potential insider threats through behavioural analysis.',
      'Applied the Isolation Forest algorithm to detect anomalous behaviour, calculate risk scores, and generate security alerts.',
      'Implemented backend functionality using Flask with JWT authentication, bcrypt password hashing, and role-based access control.',
      'Created dashboards and audit logs to support activity monitoring and investigation of suspicious file-access events.',
    ];

    p1Bullets.forEach((bullet) => {
      const splitBullet = doc.splitTextToSize(`•   ${bullet}`, contentWidth - 8);
      checkPageBreak(splitBullet.length * 10);
      doc.text(splitBullet, margin + 4, y);
      y += splitBullet.length * 10 + 2;
    });

    // Project 2: Stock Market Sentiment Analysis
    y += 4;
    checkPageBreak(75);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text('Stock Market Sentiment Analysis', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const p2Type = 'Academic Project · ML / NLP';
    const p2Width = doc.getTextWidth(p2Type);
    doc.text(p2Type, pageWidth - margin - p2Width, y);

    y += 12;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(99, 102, 241);
    doc.text('Python, Machine Learning, Naive Bayes, CountVectorizer, Flask, Bootstrap', margin, y);

    y += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);

    const p2Bullets = [
      'Developed a sentiment classification model using the Naive Bayes algorithm and CountVectorizer for text feature extraction.',
      'Trained the model using a labeled dataset of stock market-related tweets.',
      'Integrated the trained Machine Learning model into a Flask-based web application for live sentiment prediction.',
      'Implemented a user-friendly interface using HTML, CSS, and Bootstrap to display sentiment classification results.',
      'Saved and integrated the trained model using Python\'s Pickle format for efficient predictions.',
    ];

    p2Bullets.forEach((bullet) => {
      const splitBullet = doc.splitTextToSize(`•   ${bullet}`, contentWidth - 8);
      checkPageBreak(splitBullet.length * 10);
      doc.text(splitBullet, margin + 4, y);
      y += splitBullet.length * 10 + 2;
    });

    // 4. EXPERIENCE
    addSectionHeader('Experience');

    // Experience 1: Entomo
    checkPageBreak(75);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text('Entomo', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const e1Period = 'Feb. 2026 – Sep. 2026';
    const e1Width = doc.getTextWidth(e1Period);
    doc.text(e1Period, pageWidth - margin - e1Width, y);

    y += 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);
    doc.text('Quality Assurance Intern', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(107, 114, 128);
    const e1Loc = 'Bengaluru, India';
    const e1LocWidth = doc.getTextWidth(e1Loc);
    doc.text(e1Loc, pageWidth - margin - e1LocWidth, y);

    y += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);

    const e1Bullets = [
      'Performed functional, regression, smoke, and sanity testing to validate application functionality against requirements.',
      'Designed and executed positive, negative, and edge-case test scenarios to identify defects.',
      'Validated REST APIs using Postman, including HTTP methods, JSON request and response structures, and status codes.',
      'Tracked defects in JIRA, documented reproducible steps, and performed retesting after fixes.',
      'Supported local environment validation and pre-release testing to improve application stability.',
      'Collaborated with Product Owners and cross-functional teams to clarify requirements and verify expected application behaviour.',
    ];

    e1Bullets.forEach((bullet) => {
      const splitBullet = doc.splitTextToSize(`•   ${bullet}`, contentWidth - 8);
      checkPageBreak(splitBullet.length * 10);
      doc.text(splitBullet, margin + 4, y);
      y += splitBullet.length * 10 + 2;
    });

    // Experience 2: Digital INNK
    y += 4;
    checkPageBreak(65);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text('Digital INNK', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const e2Period = 'Aug. 2024 – Jan. 2025';
    const e2Width = doc.getTextWidth(e2Period);
    doc.text(e2Period, pageWidth - margin - e2Width, y);

    y += 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);
    doc.text('Business Analyst Intern', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(107, 114, 128);
    const e2Loc = 'Bengaluru, India';
    const e2LocWidth = doc.getTextWidth(e2Loc);
    doc.text(e2Loc, pageWidth - margin - e2LocWidth, y);

    y += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);

    const e2Bullets = [
      'Analysed business requirements and translated them into user stories and acceptance criteria.',
      'Participated in backlog refinement and requirement discussions with cross-functional teams.',
      'Reviewed business workflows to identify gaps and clarify expected system behaviour.',
      'Prepared project documentation and collaborated with stakeholders to align requirements with proposed solutions.',
    ];

    e2Bullets.forEach((bullet) => {
      const splitBullet = doc.splitTextToSize(`•   ${bullet}`, contentWidth - 8);
      checkPageBreak(splitBullet.length * 10);
      doc.text(splitBullet, margin + 4, y);
      y += splitBullet.length * 10 + 2;
    });

    // 5. EDUCATION
    addSectionHeader('Education');

    // MCA
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text('Master of Computer Applications (MCA)', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const mcaPeriod = '2024 – June 2026';
    const mcaWidth = doc.getTextWidth(mcaPeriod);
    doc.text(mcaPeriod, pageWidth - margin - mcaWidth, y);

    y += 12;
    doc.setTextColor(75, 85, 99);
    doc.text('Nitte Meenakshi Institute of Technology', margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 185, 129);
    const mcaScore = 'CGPA: 9.01/10';
    const mcaScoreWidth = doc.getTextWidth(mcaScore);
    doc.text(mcaScore, pageWidth - margin - mcaScoreWidth, y);

    // BCA
    y += 14;
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text('Bachelor of Computer Applications (BCA)', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    const bcaPeriod = '2021 – 2024';
    const bcaWidth = doc.getTextWidth(bcaPeriod);
    doc.text(bcaPeriod, pageWidth - margin - bcaWidth, y);

    y += 12;
    doc.setTextColor(75, 85, 99);
    doc.text('Maharani Lakshmi Ammanni College for Women', margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 185, 129);
    const bcaScore = 'CGPA: 8.10/10';
    const bcaScoreWidth = doc.getTextWidth(bcaScore);
    doc.text(bcaScore, pageWidth - margin - bcaScoreWidth, y);

    // Trigger Download
    doc.save('Shakthi_P_Resume.pdf');
  } catch (err) {
    console.error('Failed to generate PDF, falling back to text file download:', err);
    const fallbackText = `SHAKTHI P
Phone +91 8217479968 | Email: shakthipthulasi@gmail.com | LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github} | Bengaluru, India

PROFESSIONAL SUMMARY
MCA graduate with practical experience in Python and Flask through academic projects, along with foundational knowledge of React.js and MongoDB. Familiar with REST APIs, database concepts, and software development practices. Interested in developing reliable software applications and expanding full-stack development skills.

TECHNICAL SKILLS
Programming Languages: Python, JavaScript, Java
Frontend: React.js (Basic), HTML5, CSS3
Backend: Flask, REST API Fundamentals
Databases: MongoDB (Basic), SQL
Development Tools: Git, GitHub, VS Code, Postman, JIRA
Core Concepts: OOP, JSON, HTTP Methods, CRUD Fundamentals
Testing: Functional Testing, Regression Testing, Smoke Testing, API Testing
Machine Learning: PyTorch, LSTM, Isolation Forest

ACADEMIC PROJECTS
Real-Time Insider Threat Detection Using Behavioral Analysis MCA Major Project
Python, Flask, Isolation Forest, JWT, bcrypt, RBAC
• Developed a Python-based application to identify unusual employee activities and potential insider threats through behavioural analysis.
• Applied the Isolation Forest algorithm to detect anomalous behaviour, calculate risk scores, and generate security alerts.
• Implemented backend functionality using Flask with JWT authentication, bcrypt password hashing, and role-based access control.
• Created dashboards and audit logs to support activity monitoring and investigation of suspicious file-access events.

Stock Market Sentiment Analysis Academic Project · ML / NLP
Python, Machine Learning, Naive Bayes, CountVectorizer, Flask, HTML, CSS, Bootstrap
• Developed a sentiment classification model using the Naive Bayes algorithm and CountVectorizer for text feature extraction.
• Trained the model using a labeled dataset of stock market-related tweets.
• Integrated the trained Machine Learning model into a Flask-based web application for live sentiment prediction.
• Implemented a user-friendly interface using HTML, CSS, and Bootstrap to display sentiment classification results.
• Saved and integrated the trained model using Python's Pickle format for efficient predictions.

EXPERIENCE
Entomo Feb. 2026 – Sep. 2026
Quality Assurance Intern Bengaluru, India
• Performed functional, regression, smoke, and sanity testing to validate application functionality against requirements.
• Designed and executed positive, negative, and edge-case test scenarios to identify defects.
• Validated REST APIs using Postman, including HTTP methods, JSON request and response structures, and status codes.
• Tracked defects in JIRA, documented reproducible steps, and performed retesting after fixes.
• Supported local environment validation and pre-release testing to improve application stability.
• Collaborated with Product Owners and cross-functional teams to clarify requirements and verify expected application behaviour.

Digital INNK Aug. 2024 – Jan. 2025
Business Analyst Intern Bengaluru, India
• Analysed business requirements and translated them into user stories and acceptance criteria.
• Participated in backlog refinement and requirement discussions with cross-functional teams.
• Reviewed business workflows to identify gaps and clarify expected system behaviour.
• Prepared project documentation and collaborated with stakeholders to align requirements with proposed solutions.

EDUCATION
Master of Computer Applications (MCA) 2024 – June 2026
Nitte Meenakshi Institute of Technology CGPA: 9.01/10
Bachelor of Computer Applications (BCA) 2021 – 2024
Maharani Lakshmi Ammanni College for Women CGPA: 8.10/10`;

    const blob = new Blob([fallbackText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shakthi_P_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
