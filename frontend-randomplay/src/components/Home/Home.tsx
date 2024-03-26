import "../../styles/home.css";

export default function Home() {
    return (
        <div className={"home"}>
            <div className={"home_img"}>
                <div className={"home_content"}>
                    <h1 className="!m-0 font-bold text-[#CEB7B7]">
                        Experience True On-Chain
                    </h1>
                    <h1 className="!m-0 font-bold text-[#CEB7B7]">
                     Games
                    </h1>
                    <p className="text-[#8FB1B9] w-8/12 text-xl">
                        Randomplay Utilizes Aptos Randomness API to Power our map generator to make truly on chain random maps for games not needing to rely on External external Web2 Technologies for making Maps</p>
                    <a className="home-button cursor-pointer" href="/Game">
                        GET STARTED
                    </a>
                </div>
            </div>
        </div>
    )
}