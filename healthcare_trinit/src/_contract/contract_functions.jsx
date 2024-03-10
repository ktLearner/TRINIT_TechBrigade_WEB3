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

export async function GetHosId (eth) {
    let value = await HealthCare(eth, false).getHospitalIdByAddress();
    console.log("Res", value);
    return value.toNumber()
}

export async function  RegisHospital(eth,name,type,address,state,district,link) {
    let org = HealthCare(eth, true)

    await org.registerHospital(name,type,address,state,district,link, {
        gasLimit: 300000
    })
}

export async function  HosDetail(eth) {
    let org = HealthCare(eth, true)

    const res = await org.getHospitalDetailsByAddress()
    console.log(res);
    return res
}

export async function  AllHos(eth) {
    let org = HealthCare(eth, false)

    const res = await org.getAllHospitals()
    console.log(res);
    return res
}

export async function  HosName(eth, id) {
    let org = HealthCare(eth, true)

    const res = await org.getHospitalDetails(id)
    console.log(res);
    return res
}

export async function  GetHashes(eth,patientId) {
    let org = HealthCare(eth, true)
    const res = await org.getHealthRecordIpfsHashes(patientId)
    // console.log(res);
    return res
}

export async function  CreateAppointment(eth,patientId, HosId, date, des) {
    let org = HealthCare(eth, true)
    await org.createAppointment(patientId, HosId, date, des)
    // console.log(res);
}

export async function  UserAppointments(eth,id) {
    let org = HealthCare(eth, true)
    let res = await org.getPatientAppointments(id)
    // console.log(res);
    return res;
}

export async function  AppointmentDetails(eth,id) {
    let org = HealthCare(eth, true)
    let res = await org.getAppointmentDetails(id)
    // console.log(res);
    return res;
}


export async function  CreatePrescription(eth,id, f1, f2, f3, f4) {
    let org = HealthCare(eth, true)
    let res = await org.createPrescription(id, f1, f2, f3, f4)
    // console.log(res);
    return res;
}

export async function  GetHosByid(eth,id) {
    let org = HealthCare(eth, true)
    let res = await org.getHospitalDetails(id)
    // console.log(res);
    return res;
}
