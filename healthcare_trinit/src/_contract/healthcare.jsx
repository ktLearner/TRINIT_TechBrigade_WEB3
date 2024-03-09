import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
      "0x7FB59a205250303d8c816e3510939AB1F29581e7",
      ABI.abi,
      signed ? provider.getSigner() : provider
    );
}
