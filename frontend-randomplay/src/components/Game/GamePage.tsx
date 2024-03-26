import Button from "../Home/Button";
import { useState, useEffect, Fragment } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Unity, useUnityContext } from "react-unity-webgl";

const aptosConfig = new AptosConfig({ network: Network.RANDOMNET });
const provider = new Aptos(aptosConfig);

export const moduleAddress = "0x5405dce9038c0c4c3f771c9c7357d366b4ff030d837a35b57196ec754049a4c1";


export default function GamePage() {
    const [btntext, setBtnText] = useState("Play Game");
    const { account, signAndSubmitTransaction } = useWallet();
    // const [counter, setCounter] = useState<Array<number>>([]);
    const [isOpen, setIsOpen] = useState(false);

    const { unityProvider, sendMessage, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/Build/Build.loader.js",
        dataUrl: "/Build/Build.data",
        frameworkUrl: "/Build/Build.framework.js",
        codeUrl: "/Build/Build.wasm",
    });

    const handleClick = async () => {
        if (!account) return;
        try {
            const todoListResource = await provider.getAccountResource({
                accountAddress: account?.address,
                resourceType: `${moduleAddress}::dice::DiceRollHistory`
            }
            );
            // console.log(todoListResource.rolls[todoListResource.rolls.length - 1]);
            let data = ((todoListResource?.rolls[todoListResource?.rolls.length - 1] as any));
            data = data[0].toString() + data[1].toString() + data[2].toString() + data[3].toString()
            // console.log(data);
            // setCounter(data);
            setIsOpen(true);
            if (isLoaded) {
                sendMessage("Random Assign", "GetRandomValue", data);
            }
        }
        catch (e: any) {
            console.log(e);
            initialize();
        }
    };

    const initialize = async () => {
        if (!account) return [];
        const payload = {
            type: "entry_function_payload",
            function: `${moduleAddress}::dice::roll`,
            type_arguments: [],
            arguments: [],
        };
        try {
            // sign and submit transaction to chain
            const response = await signAndSubmitTransaction({ payload } as any);
            // wait for transaction
            await provider.waitForTransaction(response.hash);
        } catch (error: any) {
            console.log(error);
        } finally {
            // setTransactionInProgress(false);
            handleClick();
        }
    };

    //Runs one Time
    // useEffect(() => {
    //     initialize();
    // }, [account?.address]);

    return (
        <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center md:h-screen">
            <div className="w-10/12 flex flex-col mt-[100px]">
                {(account) ?
                    (!isOpen) ?
                        <div className="hue-rotate-180 bg-[url('./assets/images/game.svg')] w-full bg-no-repeat bg-cover bg-center rounded-xl min-h-[500px] max-h-[500px] h-4/6"></div>
                        :
                        <div className={"w-full rounded-xl min-h-[500px] max-h-[500px] h-4/6"}>
                            <Fragment>
                                {!isLoaded && (
                                    <div className={"bg-[url('./assets/images/game.svg')] bg-no-repeat bg-cover bg-center rounded-xl flex items-center justify-center !w-full !h-full"}>
                                        <p className="text-black text-xl">Loading Application... {Math.round(loadingProgression * 100)}%</p>
                                    </div>
                                )}
                                <Unity unityProvider={unityProvider} className="w-full h-full" style={{ visibility: isOpen ? "visible" : "hidden" }} />
                            </Fragment>
                            {/* <Unity unityProvider={unityProvider} className={styles.canvas} style={{ visibility: isOpen ? "visible" : "hidden" }} /> */}

                        </div>
                    :
                    <div className="hue-rotate-180 bg-[url('./assets/images/game.svg')] w-full bg-no-repeat bg-cover bg-center rounded-xl min-h-[500px] max-h-[500px] h-4/6">

                    </div>}

                <div onClick={() => initialize()} className="w-2/12 mx-auto m-4 cursor-pointer">
                    <Button data={btntext} />
                    {/* {(counter.length) ?
                        <p style={{ fontSize: "80px", textAlign: "center" }}>Dice: {counter[0] + " " + counter[1] + " " + counter[2] + " " + counter[3]}</p>
                        : <></>} */}
                </div>
            </div>
        </div>
    )
}