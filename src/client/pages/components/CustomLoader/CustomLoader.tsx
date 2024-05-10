import React from 'react';
import BouncingPlane from './BouncingPlane/BouncingPlane';
import Clouds from "client/assets/json_lottie/clouds.json";
import LinearProgress from './LinearProgress';

interface LoadingScreenProps {
    duration: number;
    color: string;
    messages: string[];
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration, color, messages }) => {
    const planeMarginTop = '150px';

    const ballTriangleStyle = {
        position: 'fixed',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    const cloudImage = {
        loop: true,
        autoplay: true,
        animationData: Clouds,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <div style={{ marginTop: planeMarginTop, }}>
                <BouncingPlane />
            </div>
            <LinearProgress color={color} duration={duration} messages={messages} />
        </div>
    )
}

export default LoadingScreen;
