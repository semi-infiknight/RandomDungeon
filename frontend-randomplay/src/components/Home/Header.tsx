import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-[#17161A] h-[100px] w-screen absolute top-0">
            <div className="w-11/12 mx-auto flex justify-between">
                <a href="/"><h1 className="text-white text-3xl">RANDOMPLAY</h1></a>
                <WalletSelector />
            </div>
        </header>
    )
}