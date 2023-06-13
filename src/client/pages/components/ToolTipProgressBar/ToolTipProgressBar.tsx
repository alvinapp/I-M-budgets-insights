import React from 'react';
import './TooltipProgressBar.css';

interface TooltipProgressBarProps {
  backgroundColor?: string;
  progressColor?: string;
}

const TooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
    backgroundColor = '#E7EDF3',
    progressColor = '#0C9DBE',
}) => {
    const date = new Date();
    const currentDay = date.getDate();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const progress = (currentDay / daysInMonth) * 100;

    const progressStyle = {
        background: "linear-gradient(65.42deg, rgba(8,127,162,0.54) 0%, rgba(193,138,76,0.37) 52.44%, rgba(89,182,81,0.49) 100%)",
        width: `${progress}%`,
    };

    const tooltipStyle = {
        left: `${progress}%`,
        transform: 'scale(0.8)',
        backgroundColor: 'black',
        height: '30px',
        width: '60px',
        fontFamlily: 'Poppins',
        fontSize: '14px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };

    return (
        <div className="row">
            <div className="font-poppins text-xs text-skin-subtitle tracking-longest_text">{monthStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
            <div className="tooltip-progress-bar" style={{ backgroundColor }}>
                <div className="tooltip-progress-bar-progress" style={progressStyle}>
                    <div className="tooltip" style={tooltipStyle}>
                        Today
                    </div>
                </div>
            </div>
            <div className="font-poppins text-xs text-skin-subtitle tracking-longest_text">{monthEnd.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
        </div>
    );
};

export default TooltipProgressBar;
