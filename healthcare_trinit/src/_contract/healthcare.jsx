import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
        "0x4B6977ad31C31679d6b4a20CdCAf8Fb29F58D3b7",
        ABI.abi,
        signed ? provider.getSigner() : provider
    )
}
