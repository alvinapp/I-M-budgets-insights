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
        backgroundColor: progressColor,
        width: `${progress}%`,
    };

    const tooltipStyle = {
        left: `${progress}%`,
        transform: 'scale(0.8)',
        backgroundColor: 'black',
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
