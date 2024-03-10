import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
      "0x1910D0892Ba4Da918B526C882ac7D82a893955de",
      ABI.abi,
      signed ? provider.getSigner() : provider
    );
}
