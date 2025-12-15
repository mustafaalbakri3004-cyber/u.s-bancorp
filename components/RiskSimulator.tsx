import React, { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const RiskSimulator: React.FC = () => {
  const [reg, setReg] = useState<number>(50);
  const [ai, setAi] = useState<number>(50);
  const [sec, setSec] = useState<number>(50);

  // Logic for risk calculations
  const cyberRisk = useMemo(() => {
    let val = (ai * 0.6) + (reg * 0.3) - (sec * 0.5);
    return Math.max(10, Math.min(100, 50 + val));
  }, [reg, ai, sec]);

  const revenue = useMemo(() => {
    let val = (ai * 0.7) + (reg * 0.4);
    return Math.max(10, Math.min(100, val));
  }, [reg, ai]);

  const legalRisk = useMemo(() => {
    let val = (reg * 0.8) - (sec * 0.3);
    return Math.max(10, Math.min(100, 30 + val));
  }, [reg, sec]);

  const analysis = useMemo(() => {
    if (reg > 75 && sec < 40) {
      return {
        text: "WARNING: High deregulation combined with low security spending exposes the bank to massive Cyber and Contagion risks, despite high innovation speed.",
        type: 'warning'
      };
    } else if (ai > 80 && sec > 80) {
      return {
        text: "OPTIMAL: High AI adoption backed by strong security spending mimics U.S. Bancorp's strategy of 'prudent preparation' while capturing the $32.4B AI market.",
        type: 'success'
      };
    } else if (reg < 30) {
      return {
        text: "CONSERVATIVE: Strict regulation (Dodd-Frank intact) slows innovation but ensures stability. Revenue growth may lag behind fintech competitors.",
        type: 'info'
      };
    } else {
      return {
        text: "BALANCED: Standard operating procedure. To compete with Embedded Finance growth, consider increasing AI investment.",
        type: 'neutral'
      };
    }
  }, [reg, ai, sec]);

  // Color helpers (Primary: Blue #003087, Secondary: Red #d11242, Accent: Green #22c55e)
  const getColor = (val: number, isRisk: boolean) => {
    if (isRisk) {
      // For Risk: High is Bad (Red), Medium is Yellow, Low is Good (Green)
      return val > 75 ? 'bg-[#d11242]' : (val > 40 ? 'bg-yellow-500' : 'bg-[#22c55e]');
    } else {
      // For Revenue: High is Good (Green), Medium is Blue, Low is Gray
      return val > 75 ? 'bg-[#22c55e]' : (val > 40 ? 'bg-[#003087]' : 'bg-slate-400');
    }
  };
  
  const getScoreLabel = (val: number, isRisk: boolean) => {
      if (isRisk) {
          if (val > 75) return "Critical";
          if (val > 40) return "Moderate";
          return "Low";
      } else {
           if (val > 75) return "High";
           if (val > 40) return "Moderate";
           return "Low";
      }
  }

  const getLabelColor = (val: number, isRisk: boolean) => {
    if (isRisk) {
       return val > 75 ? 'text-[#d11242]' : (val > 40 ? 'text-yellow-600' : 'text-[#22c55e]');
    }
    return val > 75 ? 'text-[#22c55e]' : (val > 40 ? 'text-[#003087]' : 'text-slate-500');
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 mt-12">
      <h3 className="text-2xl font-bold text-[#003087] mb-6 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6" /> Strategic Risk Simulator
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <label className="flex justify-between font-bold text-slate-700 mb-2">
              <span>Deregulation Level (Trump Era)</span>
              <span className="text-[#003087]">{reg}%</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={reg} 
              onChange={(e) => setReg(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003087]"
            />
            <p className="text-xs text-slate-500 mt-1">Low: Tight Dodd-Frank control | High: Aggressive Repeal</p>
          </div>

          <div>
            <label className="flex justify-between font-bold text-slate-700 mb-2">
              <span>AI & Gen AI Integration</span>
              <span className="text-[#003087]">{ai}%</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={ai} 
              onChange={(e) => setAi(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003087]"
            />
            <p className="text-xs text-slate-500 mt-1">Low: Basic Efficiency | High: Full Automated Decisioning</p>
          </div>

          <div>
            <label className="flex justify-between font-bold text-slate-700 mb-2">
              <span>Cybersecurity & Compliance Spend</span>
              <span className="text-[#003087]">{sec}%</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sec} 
              onChange={(e) => setSec(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003087]"
            />
            <p className="text-xs text-slate-500 mt-1">Investment in 24/7 Monitoring & Governance</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 p-6 rounded-xl flex flex-col justify-center space-y-6 border border-slate-100">
          {/* Meter 1 */}
          <div>
            <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
              <span>Cyber & Data Privacy Risk</span>
              <span className={getLabelColor(cyberRisk, true)}>{getScoreLabel(cyberRisk, true)}</span>
            </div>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${getColor(cyberRisk, true)}`} 
                style={{ width: `${cyberRisk}%` }}
              />
            </div>
          </div>

          {/* Meter 2 */}
          <div>
            <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
              <span>Operational Innovation & Revenue</span>
              <span className={getLabelColor(revenue, false)}>{getScoreLabel(revenue, false)}</span>
            </div>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${getColor(revenue, false)}`} 
                style={{ width: `${revenue}%` }}
              />
            </div>
          </div>

          {/* Meter 3 */}
          <div>
            <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
              <span>Regulatory/Legal Volatility</span>
              <span className={getLabelColor(legalRisk, true)}>{getScoreLabel(legalRisk, true)}</span>
            </div>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${getColor(legalRisk, true)}`} 
                style={{ width: `${legalRisk}%` }}
              />
            </div>
          </div>

          {/* Analysis Box */}
          <div className={`mt-6 p-4 rounded-lg border-l-4 text-sm flex gap-3 ${
            analysis.type === 'warning' ? 'bg-red-50 border-[#d11242] text-slate-800' :
            analysis.type === 'success' ? 'bg-green-50 border-[#22c55e] text-slate-800' :
            'bg-blue-50 border-[#003087] text-slate-800'
          }`}>
              <div className="flex-shrink-0 mt-0.5">
                  {analysis.type === 'warning' && <AlertTriangle className="w-5 h-5 text-[#d11242]" />}
                  {analysis.type === 'success' && <CheckCircle className="w-5 h-5 text-[#22c55e]" />}
                  {(analysis.type === 'neutral' || analysis.type === 'info') && <Info className="w-5 h-5 text-[#003087]" />}
              </div>
              <p className="italic leading-relaxed font-medium">{analysis.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};