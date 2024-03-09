import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
      "0xBB7E9ffdBB4fA1994361Bf7399219889DeAf326e",
      ABI.abi,
      signed ? provider.getSigner() : provider
    );
}
