import React from 'react';
import RandomExpenditureComparisonCard from './insights/RandomCompareComparison';

interface MacroPieChartLegendProps {
  color: string;
  text: string;
  percentage: number;
  showComparison?: boolean;
  showUnallocated?: boolean;
}

const MacroPieChartLegend: React.FC<MacroPieChartLegendProps> = ({ color, text, percentage, showUnallocated = true, showComparison = false}) => {
  const percentageChange = Math.floor(Math.random() * 100) - 50;
  if (!showUnallocated) {
    return <div></div>;
  }
  return (
    <div className="flex flex-row items-start justify-start space-x-1.5" style={{
      width: 'fit-content'
    }}>
      <div className="rounded-full bg-skin-neutral h-3 w-3" style={{
        backgroundColor: color,
      }}></div>
      <div className='font-poppins text-xs text-skin-base tracking-longest_text'>{text} ({percentage}%) {percentage!== 0 && showComparison ?<RandomExpenditureComparisonCard percentage={percentageChange}/>: null}</div>
    </div>
  );
};

export default MacroPieChartLegend;
