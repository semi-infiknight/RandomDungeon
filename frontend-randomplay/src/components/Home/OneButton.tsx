import { jsx } from '@emotion/react';
import { type ReactElement, useState, useEffect } from 'react';
import { FrameSVGOctagon } from '@arwes/react-frames';
import leftarrow from "../../assets/images/leftarrow.svg";
import rightarrow from "../../assets/images/rightarrow.svg";

const OneButton = ({ data = {} as string }): ReactElement => {
    const [btntext, setBtnText] = useState<string>(data);
    const [marginBottom, setMarginBottom] = useState<string | number | undefined>("-30px");
    const [marginTop, setMarginTop] = useState<string | number | undefined>("-30px");
    // useEffect(() => {
    //     if (btntext === "MAP : APLICIZATION") {
    //         setMarginBottom("-30px");
    //     } else if (btntext === "Ready") {
    //         setMarginBottom("30px");
    //     }
    // }, [btntext, marginBottom]);
    return (
        <div className="one_button" style={{
            position: 'relative',
            width: "auto",
            height: "auto",
            display: "flex",
            maxWidth: "350px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            textAlign: "center",
            marginBottom: marginBottom,
            marginTop: marginTop
        }}>
            <style>
                {`
            .one_button .arwes-react-frames-framesvg [data-name=bg] {
                color: rgba(0, 0, 0, 0.34);
            }
            .one_button .arwes-react-frames-framesvg [data-name=line] {
                color: rgba(177, 136, 61, 1)};
            }`}
            </style>
            <FrameSVGOctagon
                leftTop={true}
                rightTop={true}
                rightBottom={true}
                leftBottom={true}
            />
            <img src={leftarrow} style={{ width: "60px" }} /><p className={"!text-[16px] text-[#FBD050]"}>{btntext}</p><img src={rightarrow} style={{ width: "60px" }} />
        </div>
    );
};

export default OneButton;
