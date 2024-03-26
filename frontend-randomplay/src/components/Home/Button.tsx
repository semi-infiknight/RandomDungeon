import { jsx } from '@emotion/react';
import { type ReactElement, useState, useEffect } from 'react';
import { FrameSVGOctagon } from '@arwes/react-frames';

export default function Button({ data = {} as string, color = {} as string }) {
    const [btntext, setBtnText] = useState<string>(data);
    const [textcolor, setTextColor] = useState<string>("#FBD050");
    useEffect(() => {
        if (color === "#FBD050") {
            setTextColor("#000000")
        } else {
            setTextColor("#FBD050")
        }
    }, [color, textcolor]);

    return (
        <div className={"btn"} style={{
            position: 'relative',
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <style>
                {`
            .btn .arwes-react-frames-framesvg [data-name=bg] {
                color: ${color};
            }
            .btn .arwes-react-frames-framesvg [data-name=line] {
                color: rgba(177, 136, 61, 1)};
            }`}
            </style>
            <FrameSVGOctagon
                leftTop={true}
                rightTop={false}
                rightBottom={true}
                leftBottom={false}
            />
            <p className="font-bold text-center !text-[16px]" style={{ color: textcolor }}>{btntext}</p>
        </div>
    )
}