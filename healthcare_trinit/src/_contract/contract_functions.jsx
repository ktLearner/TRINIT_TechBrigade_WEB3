import { ethers } from 'ethers'
import HealthCare from './healthcare'

export async function GetPatientDetails (eth, id) {
    let value = await HealthCare(eth, false).getPatientDetails(id)
    return value
}

export async function CreatePatientProfile (wallet, name, dob, gender, contact, email, des, eth) {
    let org = HealthCare(eth, true)

    const txHash = await org.registerPatient(name, 10, dob, gender, contact, email, des)
    return txHash
}
