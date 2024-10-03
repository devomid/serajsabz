import React, { useEffect, useState } from 'react';
import useScrollPosition from '../../hooks/useScroll';
import { Box } from '@mui/material';
import './styles.css'; // Ensure your CSS styles are imported

function ScrollDependentComponent({ children }) {
    const scrollPosition = useScrollPosition();
    const componentThresholds = [200, 500, 800, 1100];
    const [activeComponentIndex, setActiveComponentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        let newActiveIndex = activeComponentIndex;

        // Determine the active component based on scroll position
        if (scrollPosition < componentThresholds[0]) {
            newActiveIndex = 0;
        } else {
            for (let i = 0; i < componentThresholds.length; i++) {
                if (scrollPosition >= componentThresholds[i] && scrollPosition < componentThresholds[i + 1]) {
                    newActiveIndex = i + 1; // Shift index
                    break;
                }
            }
        }

        // Handle component transitions
        if (newActiveIndex !== activeComponentIndex) {
            setFadeClass(`fade-out component-${newActiveIndex}`);
            setTimeout(() => {
                setActiveComponentIndex(newActiveIndex);
                setFadeClass(`fade-in component-${newActiveIndex}`);
            }, 500); // Match duration to your fade-out duration
        }
    }, [scrollPosition, activeComponentIndex]);

    // Determine if the last component should be rendered
    const isLastComponentVisible = scrollPosition < componentThresholds[componentThresholds.length - 1] + 100;

    return (
        <Box className={fadeClass}>
            {isLastComponentVisible ? children[activeComponentIndex] : null}
        </Box>
    );
}

export default ScrollDependentComponent;