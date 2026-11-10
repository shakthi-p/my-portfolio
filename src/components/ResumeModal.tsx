import React from 'react';
import { X, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/sound';
import { downloadResumePdf } from '../utils/downloadResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = React.useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    sfx.playLaser();
    setDownloading(true);
    downloadResumePdf();
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl border border-purple-500/40 bg-[#0e111a] text-slate-100 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(154,134,232,0.3)] overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#141824] border-b border-[#222736]">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold shadow-lg shadow-purple-900/40 flex items-center gap-2 transition-all active:scale-95 disabled:opacity-75 cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-200" />
            <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 font-sans text-slate-200">
          {/* Header */}
          <div className="border-b border-[#222736] pb-5">
            <h2 className="text-3xl font-display font-black tracking-tight text-white">
              SHAKTHI P
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                +91 8217479968
              </span>
              <span className="text-slate-600">|</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.email}
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Bengaluru, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              MCA graduate with practical experience in Python and Flask through academic projects, along with foundational knowledge of React.js and MongoDB. Familiar with REST APIs, database concepts, and software development practices. Interested in developing reliable software applications and expanding full-stack development skills.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3">
              TECHNICAL SKILLS
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 bg-[#12151e]/60 p-4 rounded-xl border border-[#222736]">
              <p>
                <strong className="text-slate-100">Programming Languages:</strong> Python, JavaScript, Java
              </p>
              <p>
                <strong className="text-slate-100">Frontend:</strong> React.js (Basic), HTML5, CSS3
              </p>
              <p>
                <strong className="text-slate-100">Backend:</strong> Flask, REST API Fundamentals
              </p>
              <p>
                <strong className="text-slate-100">Databases:</strong> MongoDB (Basic), SQL
              </p>
              <p>
                <strong className="text-slate-100">Development Tools:</strong> Git, GitHub, VS Code, Postman, JIRA
              </p>
              <p>
                <strong className="text-slate-100">Core Concepts:</strong> OOP, JSON, HTTP Methods, CRUD Fundamentals
              </p>
              <p>
                <strong className="text-slate-100">Testing:</strong> Functional Testing, Regression Testing, Smoke Testing, API Testing
              </p>
              <p>
                <strong className="text-slate-100">Machine Learning:</strong> PyTorch, LSTM, Isolation Forest
              </p>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3">
              ACADEMIC PROJECTS
            </h3>
            <div className="space-y-5">
              {/* Project 1 */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-bold text-sm text-slate-100">
                    Real-Time Insider Threat Detection Using Behavioral Analysis
                  </span>
                  <span className="font-mono text-xs text-purple-300">MCA Major Project</span>
                </div>
                <p className="font-mono text-xs text-cyan-400">
                  Python, Flask, Isolation Forest, JWT, bcrypt, RBAC
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pt-1">
                  <li>Developed a Python-based application to identify unusual employee activities and potential insider threats through behavioural analysis.</li>
                  <li>Applied the Isolation Forest algorithm to detect anomalous behaviour, calculate risk scores, and generate security alerts.</li>
                  <li>Implemented backend functionality using Flask with JWT authentication, bcrypt password hashing, and role-based access control.</li>
                  <li>Created dashboards and audit logs to support activity monitoring and investigation of suspicious file-access events.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1.5 pt-2 border-t border-[#1e2330]">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-bold text-sm text-slate-100">
                    Stock Market Sentiment Analysis
                  </span>
                  <span className="font-mono text-xs text-purple-300">Academic Project · Machine Learning / NLP</span>
                </div>
                <p className="font-mono text-xs text-cyan-400">
                  Python, Machine Learning, Naive Bayes, CountVectorizer, Flask, HTML, CSS, Bootstrap
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pt-1">
                  <li>Developed a sentiment classification model using the Naive Bayes algorithm and CountVectorizer for text feature extraction.</li>
                  <li>Trained the model using a labeled dataset of stock market-related tweets.</li>
                  <li>Integrated the trained Machine Learning model into a Flask-based web application for live sentiment prediction.</li>
                  <li>Implemented a user-friendly interface using HTML, CSS, and Bootstrap to display sentiment classification results.</li>
                  <li>Saved and integrated the trained model using Python's Pickle format for efficient predictions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3">
              EXPERIENCE
            </h3>
            <div className="space-y-6">
              {/* Entomo */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-100">
                    Entomo
                  </span>
                  <span className="font-mono text-xs text-purple-300">Feb. 2026 – Sep. 2026</span>
                </div>
                <div className="flex justify-between text-xs text-cyan-400 font-mono">
                  <span>Quality Assurance Intern</span>
                  <span className="text-slate-400">Bengaluru, India</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                  <li>Performed functional, regression, smoke, and sanity testing to validate application functionality against requirements.</li>
                  <li>Designed and executed positive, negative, and edge-case test scenarios to identify defects.</li>
                  <li>Validated REST APIs using Postman, including HTTP methods, JSON request and response structures, and status codes.</li>
                  <li>Tracked defects in JIRA, documented reproducible steps, and performed retesting after fixes.</li>
                  <li>Supported local environment validation and pre-release testing to improve application stability.</li>
                  <li>Collaborated with Product Owners and cross-functional teams to clarify requirements and verify expected application behaviour.</li>
                </ul>
              </div>

              {/* Digital INNK */}
              <div className="space-y-2 pt-2 border-t border-[#1e2330]">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-100">
                    Digital INNK
                  </span>
                  <span className="font-mono text-xs text-purple-300">Aug. 2024 – Jan. 2025</span>
                </div>
                <div className="flex justify-between text-xs text-cyan-400 font-mono">
                  <span>Business Analyst Intern</span>
                  <span className="text-slate-400">Bengaluru, India</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                  <li>Analysed business requirements and translated them into user stories and acceptance criteria.</li>
                  <li>Participated in backlog refinement and requirement discussions with cross-functional teams.</li>
                  <li>Reviewed business workflows to identify gaps and clarify expected system behaviour.</li>
                  <li>Prepared project documentation and collaborated with stakeholders to align requirements with proposed solutions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3">
              EDUCATION
            </h3>
            <div className="space-y-3.5">
              <div className="text-xs sm:text-sm">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-100">Master of Computer Applications (MCA)</span>
                  <span className="font-mono text-xs text-purple-300">2024 – June 2026</span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs mt-0.5">
                  <span>Nitte Meenakshi Institute of Technology</span>
                  <span className="font-mono text-emerald-400 font-medium">CGPA: 9.01/10</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-100">Bachelor of Computer Applications (BCA)</span>
                  <span className="font-mono text-xs text-purple-300">2021 – 2024</span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs mt-0.5">
                  <span>Maharani Lakshmi Ammanni College for Women</span>
                  <span className="font-mono text-emerald-400 font-medium">CGPA: 8.10/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
