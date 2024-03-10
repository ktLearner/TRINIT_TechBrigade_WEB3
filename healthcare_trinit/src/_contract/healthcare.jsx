import { ethers } from "ethers"
import ABI from './MyNFT.json'

export default function HealthCare (eth, signed) {
    let provider = new ethers.providers.Web3Provider(eth)
    return new ethers.Contract(
      "0xd5a1bA6cF36A37Ea7152b71963A8cCaA22E08699",
      ABI.abi,
      signed ? provider.getSigner() : provider
    );
}
