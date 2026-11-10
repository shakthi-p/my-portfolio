import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/sound';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sfx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent('Software Developer Opportunity / Inquiry')}`;

  const whatsappUrl = `https://wa.me/918217479968?text=${encodeURIComponent(
    'Hi Shakthi, I visited your portfolio and would like to connect!'
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            07 / CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            Get In Touch -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              ASK ME ANYTHING!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Ready to collaborate or have an opportunity in mind? I'm always open to new conversations.
          </p>
        </div>

        {/* Central Contact Information Hub */}
        <div className="p-6 sm:p-9 rounded-3xl border border-purple-500/25 bg-[#12151e]/90 backdrop-blur-xl space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(154,134,232,0.15)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#222736] gap-3">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-100">
                Direct Contact Channels
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Reach out directly via email, phone, or messaging
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs font-mono text-emerald-300 shrink-0 self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available Immediately</span>
            </div>
          </div>

          <div className="space-y-5">
            {/* Direct Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl border border-purple-500/20 bg-[#0e111a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-slate-100 hover:text-cyan-300 font-mono truncate block transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.playLaser()}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold shadow-lg shadow-purple-900/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="px-3 py-2 rounded-xl border border-[#222736] bg-[#161a26] text-slate-300 hover:text-white hover:border-cyan-400/50 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-4 sm:p-5 rounded-2xl border border-purple-500/20 bg-[#0e111a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-base sm:text-lg font-semibold text-slate-100 hover:text-cyan-300 font-mono block transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.playPop()}
                  className="px-4 py-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  onClick={() => sfx.playClick(900)}
                  className="px-3 py-2 rounded-xl border border-[#222736] bg-[#161a26] text-slate-300 hover:text-white hover:border-purple-400/50 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl border border-purple-500/20 bg-[#0e111a] flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-base font-semibold text-slate-100 font-mono">
                  {PERSONAL_INFO.location}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Open to remote, hybrid, and on-site software engineering and automation QA opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
