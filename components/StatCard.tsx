import React from 'react';
import { StatCardProps } from '../types';

export const StatCard: React.FC<StatCardProps> = ({ value, title, description, highlightColor = '#003087', icon }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 border-l-[6px]"
      style={{ borderLeftColor: highlightColor }}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-4xl font-extrabold block" style={{ color: highlightColor }}>
          {value}
        </span>
        {icon && <div className="text-gray-400 opacity-50">{icon}</div>}
      </div>
      <span className="font-bold text-slate-800 block mb-2 text-lg leading-tight">
        {title}
      </span>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};