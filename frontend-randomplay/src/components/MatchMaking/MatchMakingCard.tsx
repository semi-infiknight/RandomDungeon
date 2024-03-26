// import styles from "../../styles/matchmaking.module.css";
import React, { useState } from "react"

export default function MatchMakingCard({ data = Number as any }) {
    const img = ["bg-[url('./assets/images/match1.svg')]", "bg-[url('./assets/images/match2.svg')]", "bg-[url('./assets/images/match3.svg')]", "bg-[url('./assets/images/match4.svg')]"]
    const [imgval, setImgVal] = useState<string>(data ? img[data] : img[1])
    return (
        <div className="h-full max-w-[400px] w-[250px]" >
            <div className={(data) ? `${imgval} bg-cover bg-center bg-no-repeat h-full w-full flex justify-between flex-col p-4 text-center text-white text-xl font-bold` : `font-bold text-center text-white text-xl p-4 bg-cover bg-center bg-no-repeat h-full w-full flex justify-between flex-col`}>
                <p>
                    Semi
                </p>
                <p>
                    0x9ed495693F22F...
                </p>
            </div>
        </div >
    )
}