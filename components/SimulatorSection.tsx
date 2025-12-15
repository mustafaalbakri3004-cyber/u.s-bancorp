import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import { ChartDataPoint } from '../types';
import { TrendingUp, Activity, Smartphone, DollarSign } from 'lucide-react';

export const SimulatorSection: React.FC = () => {
  const [year, setYear] = useState<number>(2025);
  const [adoption, setAdoption] = useState<number>(85);

  // Calculations derived from year
  const stats = useMemo(() => {
    // Embedded Finance Market
    // Base 2022 = 100 (assumed approx), Target 2029 = 384.8
    let financeVal = 0;
    if (year >= 2029) financeVal = 384.8;
    else {
      const base = 100;
      const growthPerYear = (384.8 - base) / (2029 - 2022);
      financeVal = base + (growthPerYear * (year - 2022));
    }

    // Insurance %
    // Target 20% by 2030
    const insurancePercent = Math.min(((year - 2022) / (2030 - 2022)) * 20, 20);

    // AI Market
    // Target $32.4B by 2030, CAGR 29.5%
    // Base 2022 derived backwards from 2030
    const aiBase2022 = 32.4 / Math.pow(1.295, 8);
    const aiVal = aiBase2022 * Math.pow(1.295, (year - 2022));

    return {
      financeVal,
      insurancePercent,
      aiVal
    };
  }, [year]);

  // Calculations derived from adoption
  const adoptionStats = useMemo(() => {
    const sbSalesGrowth = (adoption / 85) * 4.0;
    const manualReduction = (adoption / 85) * 40;
    
    let feeImpactText = "Strong";
    let feeImpactColor = "#22c55e"; // green
    
    if (adoption < 60) {
      feeImpactText = "Low";
      feeImpactColor = "#ef4444"; // red
    } else if (adoption < 80) {
      feeImpactText = "Moderate";
      feeImpactColor = "#fbbf24"; // amber
    }

    return {
      sbSalesGrowth,
      manualReduction,
      feeImpactText,
      feeImpactColor
    };
  }, [adoption]);

  // Generate chart data for the range 2022-2030
  const chartData: ChartDataPoint[] = useMemo(() => {
    const data: ChartDataPoint[] = [];
    for (let y = 2022; y <= 2030; y++) {
       const aiBase2022 = 32.4 / Math.pow(1.295, 8);
       const aiVal = aiBase2022 * Math.pow(1.295, (y - 2022));
       
       let financeVal = 0;
       if (y >= 2029) financeVal = 384.8;
       else {
         const base = 100;
         const growthPerYear = (384.8 - base) / (2029 - 2022);
         financeVal = base + (growthPerYear * (y - 2022));
       }

       data.push({
         year: y,
         marketSize: Number(financeVal.toFixed(1)),
         aiMarketSize: Number(aiVal.toFixed(1))
       });
    }
    return data;
  }, []);

  return (
    <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl my-12 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c2ff] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-[#00c2ff] mb-4 border-b-2 border-white/20 pb-2 inline-block">
          Interactive Impact Simulator
        </h2>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Visualize how the timeline and digital adoption strategy affect key banking metrics. 
          Adjust the sliders to see projections based on current CAGRs and strategic targets.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Time Slider & Chart */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-end mb-6">
              <div>
                 <h3 className="text-xl font-semibold flex items-center gap-2">
                   <Activity className="w-5 h-5 text-[#00c2ff]" />
                   Market Evolution Timeline
                 </h3>
                 <p className="text-sm text-slate-400 mt-1">Impact of time on market size growth</p>
              </div>
              <span className="text-4xl font-bold text-[#00c2ff]">{year}</span>
            </div>

            <input 
              type="range" 
              min="2022" 
              max="2030" 
              value={year} 
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00c2ff] mb-8"
            />

            <div className="h-48 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="marketSize" name="Embedded Finance ($B)" stroke="#00c2ff" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="aiMarketSize" name="AI Banking ($B)" stroke="#d11242" strokeWidth={3} dot={false} />
                  <ReferenceDot x={year} y={stats.financeVal} r={6} fill="#fff" stroke="#00c2ff" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
               <div className="p-3 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">Embedded Finance</div>
                 <div className="text-xl font-bold">${stats.financeVal.toFixed(1)} B</div>
               </div>
               <div className="p-3 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">Vehicle Insurance</div>
                 <div className="text-xl font-bold">{stats.insurancePercent.toFixed(1)}%</div>
               </div>
               <div className="p-3 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">US AI Banking</div>
                 <div className="text-xl font-bold">${stats.aiVal.toFixed(1)} B</div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Adoption Slider & Metrics */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#00c2ff]" />
                    Digital Adoption Rate
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">U.S. Bancorp's internal efficiency strategy</p>
                </div>
                <span className="text-4xl font-bold text-[#00c2ff]">{adoption}%</span>
              </div>

              <input 
                type="range" 
                min="50" 
                max="100" 
                value={adoption} 
                onChange={(e) => setAdoption(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00c2ff] mb-8"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-4 border-[#00c2ff]">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00c2ff]/20 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-[#00c2ff]" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">SMB Digital Sales</div>
                    <div className="text-xs text-slate-500">Multiplier based on adoption</div>
                  </div>
                </div>
                <div className="text-3xl font-bold">{adoptionStats.sbSalesGrowth.toFixed(1)}x</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-4 border-[#00c2ff]">
                 <div className="flex items-center gap-3">
                  <div className="bg-[#00c2ff]/20 p-2 rounded-lg">
                    <Activity className="w-6 h-6 text-[#00c2ff]" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Manual Work Reduced</div>
                    <div className="text-xs text-slate-500">Efficiency gain</div>
                  </div>
                </div>
                <div className="text-3xl font-bold">{adoptionStats.manualReduction.toFixed(0)}%</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-4" style={{ borderLeftColor: adoptionStats.feeImpactColor }}>
                 <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <DollarSign className="w-6 h-6" style={{ color: adoptionStats.feeImpactColor }} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Fee Income Impact</div>
                    <div className="text-xs text-slate-500">Revenue stability</div>
                  </div>
                </div>
                <div className="text-3xl font-bold" style={{ color: adoptionStats.feeImpactColor }}>
                  {adoptionStats.feeImpactText}
                </div>
              </div>

            </div>
            
            <p className="mt-8 text-xs text-slate-500 text-center">
              *Model assumes linear correlation between digital engagement and operational efficiency metrics (Cecere, 2024).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};