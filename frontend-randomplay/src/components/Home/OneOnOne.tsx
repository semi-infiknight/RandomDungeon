import OneOnOneMatching from "./OneOnOneMatching";
import OneButton from "./OneButton";
import crux from "../../assets/images/crux.svg";
import bullets from "../../assets/images/bullets.svg";
import target from "../../assets/images/target.svg";
import Button from "./Button";

export default function OneOnOne() {
    return (
        <div className="pt-10 w-screen min-h-screen h-auto flex justify-center items-center md:h-screen">
            <div className="mt-10 w-11/12 min-h-[550px] max-h-[800px] h-4/6 flex justify-between mx-auto">
                <div className="w-2/12 flex flex-col justify-between">
                    <div className="bg-[#FFEA5A]/[0.1] flex flex-col h-[150px] justify-between p-2 border-[0.1px] border-[#FFEA5A]/[0.5]"><div className="flex justify-center"><img src={target} style={{ width: "80px" }} /></div><p className="w-[50px] text-left text-[#FBD050] !text-[16px]">LOCK TARGET</p></div>
                    <div className="bg-[#FFEA5A]/[0.1] flex flex-col h-[150px] justify-between p-2 border-[0.1px] border-[#FFEA5A]/[0.5]"><div className="flex justify-center"><img src={bullets} style={{ width: "80px" }} /></div><p className="w-[50px] text-left text-[#FBD050] !text-[16px]">SPEED BULLET</p></div>
                    <div className="bg-[#FFEA5A]/[0.1] flex flex-col h-[150px] justify-between p-2 border-[0.1px] border-[#FFEA5A]/[0.5]"><div className="flex justify-center"><img src={crux} style={{ width: "80px" }} /></div><p className="w-[50px] text-left text-[#FBD050] !text-[16px]">CRUX</p></div>
                    <Button data={"SHUFFLE RANDOM WEAPONS"} color={"#FBD050"}/>
                </div>
                <div className="h-full w-9/12 flex flex-col items-center">
                    <OneButton data={"MAP : APLICIZATION"} />
                    <OneOnOneMatching />
                    <OneButton data={"Ready"} />
                </div>
            </div>
        </div>
    )
}