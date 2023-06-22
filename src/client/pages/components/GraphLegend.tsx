import React from 'react';

interface GraphLegendProps {
    color: string;
    label: string;
    isGradient?: boolean;
}

const GraphLegend: React.FC<GraphLegendProps> = ({ color, label, isGradient = false }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
                style={{
                    background: isGradient ? `url(${color})` : color,
                    borderRadius: '50%',
                    width: 13,
                    height: 13,
                    marginRight: 4,
                }}
            ></div>
            <span className="font-poppins text-xs text-skin-subtitle">{label}</span>
        </div>
    );
};

export default GraphLegend;