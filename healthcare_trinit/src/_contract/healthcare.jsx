import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
      "0x9608fDB7253c9D27f26dAf18a47226F29e337CC7",
      ABI.abi,
      signed ? provider.getSigner() : provider
    );
}
