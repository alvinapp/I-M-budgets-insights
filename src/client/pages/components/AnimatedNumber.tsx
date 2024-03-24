import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
    target: number; // The final number you want to animate to
    duration: number; // Duration of the animation in milliseconds
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        // Determine whether we are animating up or down
        const isAnimatingDown = currentValue > target;

        // Calculate the total animation steps needed
        const frameRate = 1000 / 60; // Assuming 60 frames per second
        const totalSteps = Math.round((duration / 10) / frameRate);
        // Determine the difference between the current value and the target, to calculate the correct step value
        const difference = target - currentValue;
        const stepValue = difference / totalSteps;

        let currentStep = 0;

        // Update the current value at each step
        const interval = setInterval(() => {
            currentStep++;
            setCurrentValue(prevValue => {
                // Determine the new value based on the direction of the animation
                const newValue = isAnimatingDown
                    ? Math.max(prevValue + stepValue, target) // Ensure it does not go below the target when animating down
                    : Math.min(prevValue + stepValue, target); // Ensure it does not exceed the target when animating up
                if (currentStep >= totalSteps) {
                    clearInterval(interval);
                    return target; // Ensure it ends exactly at the target
                }
                return newValue;
            });
        }, frameRate);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [target, duration, currentValue]);

    return (
        <>
            {Math.round(currentValue).toLocaleString("en-US")}
        </>
    );
};

export default AnimatedNumber;
