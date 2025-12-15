import React from 'react';

export interface StatCardProps {
  value: string;
  title: string;
  description: string;
  highlightColor?: string; // Hex code
  icon?: React.ReactNode;
}

export interface SimulationData {
  year: number;
  marketSize: number;
  insurancePercent: number;
  aiMarketSize: number;
}

export interface ChartDataPoint {
  year: number;
  marketSize: number;
  aiMarketSize: number;
}