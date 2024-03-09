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

export async function GetPatientProfile (eth) {
    let value = await HealthCare(eth, true).getPatientDetailsByAddress()
    console.log(value);
    return value
}

export async function IsPatientReg(eth) {
  let value = await HealthCare(eth, true).checkPatientRegistration();
  return value;
}

export async function createHWpRecord (patientId,height,weight,bloodPressure) {
    let org = HealthCare(eth, true)

    const txHash = await org.createHealthRecord(patientId,height,height,weight,bloodPressure)
    
}
export async function createReport (patientId,ipfsHash) {
    let org = HealthCare(eth, true)

    const txHash = await org.createHealthReport(patientId,ipfsHash)
    
}