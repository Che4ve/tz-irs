import "../styles/circularProgress.scss";
import {useEffect, useRef} from "react";

export const CircularProgress = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        updateProgress(props.value);
    }, []);

    const updateProgress = (value) => {
        const percentageText = ref.current.querySelector('.circular-progress__percentage');
        const progressSvg = ref.current.querySelector('.circular-progress__svg');

        if (percentageText) {
            percentageText.textContent = `+${value}%`;
        }

        if (progressSvg) {
            progressSvg.style.setProperty('--percentage', `${value}`);
        }
    }
    return (
        <div className="circular-progress" id="progress" ref={ref}>
            <svg className="circular-progress__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" stroke-linecap="round"></circle>
            </svg>
            <div className="circular-progress__percentage" id="progress__percentage">50%</div>
        </div>
    )
}