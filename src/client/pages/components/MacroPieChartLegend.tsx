import React from 'react';

interface MacroPieChartLegendProps {
  color: string;
  text: string;
  percentage: number;
}

const MacroPieChartLegend: React.FC<MacroPieChartLegendProps> = ({ color, text, percentage }) => {
  return (
    <div className="flex items-start justify-start space-x-2">
      <div className="rounded-full bg-skin-neutral h-4 w-4" style={{
        backgroundColor: color,
      }}></div>
      <div className='font-poppins text-xs text-skin-base tracking-longest_text'>{text} ({percentage}%)</div>
    </div>
  );
};

export default MacroPieChartLegend;
