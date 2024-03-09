import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
        "0x9d8754985501B31B96Ce626bf9bB4F72e071B783",
        ABI.abi,
        signed ? provider.getSigner() : provider
    )
}
