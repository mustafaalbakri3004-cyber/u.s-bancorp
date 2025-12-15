import React from 'react';
import { SimulatorSection } from './components/SimulatorSection';
import { RiskSimulator } from './components/RiskSimulator';
import { StatCard } from './components/StatCard';
import { Layout, Shield, Globe, Award, Zap, Building2, ChevronRight, TrendingUp, Smartphone, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HEADER */}
      <header className="bg-[#003087] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/600')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto">
           <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
             Strategic Report 2025-2030
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
             Digital Disruption in Banking
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
             A data-driven analysis of U.S. Bancorp's transformation, embedded finance evolution, and the fintech landscape.
           </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 pb-24">
        
        {/* SIMULATOR */}
        <SimulatorSection />

        {/* STATISTICS GRID */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#003087]">Industry Trends</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              value="$384.8B" 
              title="Embedded Finance (2029)" 
              description="Driven by customer convenience and new revenue streams, growing rapidly from 2022 baselines."
              highlightColor="#003087"
              icon={<TrendingUp />}
            />
            <StatCard 
              value="29.5%" 
              title="AI Banking CAGR" 
              description="The US AI in Banking Market is anticipated to reach $32.4 Billion by 2030."
              highlightColor="#d11242"
              icon={<Zap />}
            />
            <StatCard 
              value="$50B" 
              title="Insurance Premiums (2030)" 
              description="Embedded finance in insurance is projected to reach 20% of all U.S. vehicle policies."
              highlightColor="#00c2ff"
              icon={<Shield />}
            />
             <StatCard 
              value="75%" 
              title="Risk Tech Investment" 
              description="Percentage of banks and fintechs expected to invest in ID Risk Solutions in the next 12 months."
              highlightColor="#003087"
              icon={<Layout />}
            />
            <StatCard 
              value="360k" 
              title="Hours Saved Annually" 
              description="Recorded by JPMorgan using Robo-advisors for legal work, setting an industry benchmark."
              highlightColor="#d11242"
              icon={<Award />}
            />
             <StatCard 
              value="Top 5" 
              title="Disrupted Industry" 
              description="Financial services ranks among the top 5 most disrupted industries globally."
              highlightColor="#003087"
              icon={<Globe />}
            />
          </div>
        </section>

        {/* DEEP DIVE SECTION */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#003087]">U.S. Bancorp Profile</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
             <p className="text-lg text-slate-700 leading-relaxed">
               <strong>U.S. Bancorp</strong>, the 5th-largest bank in the US (as of 2025) and largest in the Midwest, has aggressively adopted a digital-first strategy. It is considered systemically important by the Financial Stability Board and has positioned itself as a tech-forward incumbent.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#003087]">
              <h3 className="text-2xl font-bold text-[#003087] mb-6 flex items-center gap-2">
                <Smartphone className="w-6 h-6" /> Digital Dominance
              </h3>
              <ul className="space-y-4">
                {[
                  "85% of consumer clients engage digitally.",
                  "#1 Mobile Banking ranking by Javelin Strategy & Research.",
                  "2x Growth in consumer banking digital sales since 2019.",
                  "4x Growth in small business digital sales.",
                  "Digital wallets are now the 2nd most popular payment method."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#d11242] shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#00c2ff]">
              <h3 className="text-2xl font-bold text-[#003087] mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" /> The Tech Engine
              </h3>
              <ul className="space-y-4">
                {[
                  "$2.5 Billion annual investment in Fintech innovation.",
                  "80% Component Reuse Paradigm using pre-vetted code blocks.",
                  "Heavy use of micro-services and orchestration (Camunda).",
                  "Fee income represented 41% of total net revenue in 2024.",
                  "Focus on speed-to-market via internal developer platforms."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#d11242] shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ELAVON & PARTNERSHIPS */}
        <section className="mb-20 bg-slate-100 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 rounded-3xl">
          <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-[#003087]">Fintech & Elavon Factor</h2>
              <div className="h-1 flex-1 bg-white rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-xl border-l-8 border-[#00c2ff] shadow-sm">
                   <div className="text-4xl font-extrabold text-[#003087] mb-1">6.5 B</div>
                   <div className="font-bold text-slate-800 uppercase tracking-wide text-sm mb-2">Annual Transactions</div>
                   <p className="text-slate-500 text-sm">Processed by Elavon, valued at $550 Billion globally.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-8 border-[#00c2ff] shadow-sm">
                   <div className="text-4xl font-extrabold text-[#003087] mb-1">Top 5</div>
                   <div className="font-bold text-slate-800 uppercase tracking-wide text-sm mb-2">Merchant Acquirer</div>
                   <p className="text-slate-500 text-sm">Elavon's rank in 2025. Q4 2024 saw 10% transaction growth.</p>
                </div>
              </div>

              <div className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-[#003087] mb-4">Strategic Acquisitions & Wins</h3>
                <p className="text-slate-600 mb-6">
                  The bank's strategy relies on targeted acquisitions like <strong>Bento Technologies</strong> (expense management) and <strong>Salucro Healthcare Solutions</strong> to integrate vertical-specific value.
                </p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-[#d11242]" />
                    <h4 className="text-xl font-bold text-slate-800">Spotlight: Submittable Partnership</h4>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">Winner of the 2023 Banking Tech Award for rapid deployment.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-center">
                       <div className="font-bold text-[#003087] text-lg">1.2 Million</div>
                       <div className="text-xs text-slate-500 uppercase">Applications</div>
                     </div>
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-center">
                       <div className="font-bold text-[#003087] text-lg">$500 M</div>
                       <div className="text-xs text-slate-500 uppercase">Disbursed (45 Days)</div>
                     </div>
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-center">
                       <div className="font-bold text-[#d11242] text-lg">$2.2 M+</div>
                       <div className="text-xs text-slate-500 uppercase">Fraud Prevented</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISK & REGULATION */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#003087]">Risk & ESG Landscape</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-8 border-[#ef4444] hover:shadow-md transition-shadow">
               <Shield className="w-8 h-8 text-[#ef4444] mb-4" />
               <h3 className="text-xl font-bold text-slate-800 mb-3">Cyber Defense</h3>
               <p className="text-slate-600 text-sm mb-4">
                 Operating in a high-threat environment with potential deregulation risks.
               </p>
               <ul className="text-sm space-y-2 text-slate-700">
                 <li>• <strong>550 Staff</strong> in 24/7 detection</li>
                 <li>• Reduced manual tracking by <strong>&gt;40%</strong></li>
                 <li>• FS-ISAC Intelligence Collaboration</li>
               </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-8 border-[#ef4444] hover:shadow-md transition-shadow">
               <Building2 className="w-8 h-8 text-[#ef4444] mb-4" />
               <h3 className="text-xl font-bold text-slate-800 mb-3">Financial Risk</h3>
               <p className="text-slate-600 text-sm mb-4">
                 Balancing Net Interest Income (NII) pressure with fee diversity.
               </p>
               <ul className="text-sm space-y-2 text-slate-700">
                 <li>• <strong>Reserve Coverage:</strong> &gt;10%</li>
                 <li>• <strong>Fee Income Growth:</strong> 9.5% (Q3 '25)</li>
                 <li>• Strong hedge against market stress</li>
               </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-8 border-[#22c55e] hover:shadow-md transition-shadow">
               <Globe className="w-8 h-8 text-[#22c55e] mb-4" />
               <h3 className="text-xl font-bold text-slate-800 mb-3">ESG & Climate</h3>
               <p className="text-slate-600 text-sm mb-4">
                 Commitment to Sustainable Development Goals (SDGs) and Net Zero.
               </p>
               <ul className="text-sm space-y-2 text-slate-700">
                 <li>• <strong>60% Reduction</strong> in GHG since 2014</li>
                 <li>• <strong>100% Renewable</strong> Elec. by 2025</li>
                 <li>• Goal: Net Zero by 2050</li>
               </ul>
            </div>
          </div>

          <RiskSimulator />
        </section>

        {/* FUTURE OUTLOOK */}
        <section className="bg-[#003087] text-white rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080')] opacity-5 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Strategic Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-[#00c2ff] mb-3">Scale AI Beyond Efficiency</h3>
                <p className="text-blue-50 leading-relaxed">
                  Move from chatbots to revenue-generating, customer-centric AI. Focus on instant, personalized recommendations for market trends and lending options to drive engagement.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-[#00c2ff] mb-3">Expand Embedded Finance</h3>
                <p className="text-blue-50 leading-relaxed">
                  Build on the <strong>Avvance</strong> platform. Embed lending and payment solutions directly into the core app. Expand Elavon's reach beyond North America into specialized high-growth sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#003087]">Key Takeaways</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border-l-8 border-[#22c55e] shadow-sm">
            <p className="text-slate-600 mb-6 italic">
              "The convergence of Embedded Finance, AI adoption, and regulatory readiness defines the winners of the next decade."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Embedded Frontier", text: "With a $384.8B market, leveraging the 'Avvance' platform to integrate into retail and auto ecosystems is critical for growth." },
                { title: "AI Revenue Shift", text: "Efficiency is baseline (40% gain). The $32.4B opportunity is in using AI for personalized lending and advisory, not just cost-cutting." },
                { title: "Risk Prudence", text: "As modeled in the simulator, deregulation increases contagion risk. U.S. Bancorp's 'prudent preparation' strategy is validated." },
                { title: "Partner vs. Build", text: "Acquisitions like Bento and partnerships like Submittable prove that component reuse and buying capabilities is the superior speed-to-market strategy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#22c55e] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#003087]">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#0f172a] text-slate-400 py-12 px-6 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-sm">
            Sources: Giaretta and Chesini (2021), Zoting (2025), Souza and Singh (2024), Cecere (2024), U.S. Bank Annual Reports (2024, 2025), Nilson Report (2025), FTF (2025).
          </p>
          <p className="text-xs opacity-60">
            &copy; 2025 Banking Report Digital Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;