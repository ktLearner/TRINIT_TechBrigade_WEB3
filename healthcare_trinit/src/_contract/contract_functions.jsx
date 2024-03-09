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
  const value = await HealthCare(eth, true).checkPatientRegistration();
  console.log(value);
  return value;
}

export async function createHWpRecord (eth, patientId,height,weight,bloodPressure) {
    let org = HealthCare(eth, true)

    const txHash = await org.createHealthRecord(patientId,height,weight,bloodPressure)

}
export async function createReport (eth, patientId,ipfsHash) {
    let org = HealthCare(eth, true)

    const txHash = await org.addHealthRecord(patientId,ipfsHash)

}
export async function AddViewer (eth, patientId, address) {
    let org = HealthCare(eth, true)

    const txHash = await org.addAuthorizedViewer(patientId, address)

}
export async function RemoveViewer (eth, patientId, address) {
    let org = HealthCare(eth, true)

    const txHash = await org.removeAuthorizedViewer(patientId, address)

}

export async function GetPatientId (eth) {
    let value = await HealthCare(eth, true).getPatientIdByAddress();
    return value
}

export async function  RegisHospital(eth,name,type,address,state,district,link) {
    let org = HealthCare(eth, true)

    const res = await org.registerHospital(name,type,address,state,district,link, {
        gasLimit: 300000
    })
    return res
}

export async function  HosDetail(eth) {
    let org = HealthCare(eth, true)

    const res = await org.getHospitalDetailsByAddress()
    console.log(res);
    return res
}

export async function  GetHashes(eth,patientId) {
    let org = HealthCare(eth, true)

    const res = await org.getHealthRecordIpfsHashes(patientId)
    console.log(res);
    return res
}
