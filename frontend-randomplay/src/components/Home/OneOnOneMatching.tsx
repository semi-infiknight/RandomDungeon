import { jsx } from '@emotion/react';
import { type ReactElement, useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Animator } from '@arwes/react-animator';
import { FrameSVGCorners, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';
import MatchMakingCard from '../MatchMaking/MatchMakingCard';

const Frame = (): ReactElement => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    // const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    return (
        <div className="one_main" style={{
            position: 'relative',
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <style>
                {`
            .one_main .arwes-react-frames-framesvg [data-name=bg] {
                color: rgba(255, 234, 90, 0.1);
            }
            .one_main .arwes-react-frames-framesvg [data-name=line] {
                color: rgba(177, 136, 61, 1)};
            }`}
            </style>
            <FrameSVGCorners
                elementRef={svgRef}
                strokeWidth={4}
            // onRender={onRender}
            />
            <div className='flex w-9/12 h-1/2 items-center justify-evenly'>
                <MatchMakingCard data={1} />
                <p className='text-white text-lg'>vs</p>
                <MatchMakingCard data={2} />
            </div>
        </div>
    );
};

const OneOnOneMatching = (): ReactElement => {
    // const [active, setActive] = useState(true);

    // useEffect(() => {
    //     const tid = setInterval(() => setActive(active => !active), 2000);
    //     return () => clearInterval(tid);
    // }, []);
    return (
        <Frame />
    );
};

export default OneOnOneMatching;