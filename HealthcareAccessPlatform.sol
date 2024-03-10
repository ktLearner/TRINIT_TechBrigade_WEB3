// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private patientIdCounter;
    Counters.Counter private hospitalIdCounter;
    Counters.Counter private appointmentIdCounter;

    // Struct to store patient details
    struct Patient {
        string name;
        uint256 age;
        string dob; // Date of Birth
        string gender;
        string contactNumber;
        string email;
        string medicalHistory;
        address patientWallet; // Wallet address of the patient
        address[] authorizedViewers; // Array to store authorized viewers
        string height; // Additional health-related field
        string weight; // Additional health-related field
        string bloodPressure; // Additional health-related field
        string[] healthRecordIpfsHashes; // Array to store IPFS hashes of health records
    }

    // Struct to store hospital details
    struct Hospital {
        string name;
        string h_type;
        string h_address;
        string state;
        string district;
        string link;
        address hospitalWallet; // Wallet address of the hospital
    }

    struct Appointment {
        uint256 patientId;
        uint256 hospitalId;
        string date;
        string description;
        string stringField1;
        string stringField2;
        string stringField3;
        string stringField4;
        string stringField5;
        string followUpDate;
    }

    // Mapping from patient ID to patient details
    mapping(uint256 => Patient) private patients;

    // Mapping from hospital ID to hospital details
    mapping(uint256 => Hospital) private hospitals;

    mapping(uint256 => Appointment) private appointments;

    mapping(uint256 => uint256[]) private patientAppointments;


    mapping(uint256 => uint256[]) private hospitalAppointments;

    event AppointmentCreated(uint256 appointmentId, uint256 patientId, uint256 hospitalId, string date, string description);


    // Event to log patient registration
    event PatientRegistered(uint256 patientId, string name, uint256 age, string dob, string gender, string contactNumber, string email, address patientWallet);

    // Event to log authorized viewer added
    event AuthorizedViewerAdded(uint256 patientId, address viewer);

    // Event to log authorized viewer removed
    event AuthorizedViewerRemoved(uint256 patientId, address viewer);

    // Event to log health record added
    event HealthRecordAdded(uint256 patientId, string ipfsHash);

    // Event to log hospital registration
    event HospitalRegistered(uint256 hospitalId, string name, string h_type, string hospitalAddress, string state, string district, string link, address hospitalWallet);

    // Constructor initializes the NFT with a name and symbol
    constructor() ERC721("HealthcareNFT", "HCN") {}

    modifier onlyPatientOwner(uint256 _patientId) {
        require(patients[_patientId].patientWallet == msg.sender, "Not the owner of the patient record");
        _;
    }

    // Function to check if a patient is registered
    function checkPatientRegistration() external view returns (bool) {
        uint256 patientId = _getPatientIdByAddress(msg.sender);
        return (patientId != 0);
    }

    // Function to register a patient and mint an NFT
    function registerPatient(
        string memory _name,
        uint256 _age,
        string memory _dob,
        string memory _gender,
        string memory _contactNumber,
        string memory _email,
        string memory _medicalHistory
    ) external returns (uint256) {
        require(bytes(_name).length > 0, "Patient name cannot be empty");
        require(_getPatientIdByAddress(msg.sender) == 0, "Patient is already registered");

        // Mint a new NFT for the patient
        patientIdCounter.increment();
        uint256 newPatientId = patientIdCounter.current();
        _safeMint(msg.sender, newPatientId);

        // Create a new patient record
        Patient storage patient = patients[newPatientId];
        patient.name = _name;
        patient.age = _age;
        patient.dob = _dob;
        patient.gender = _gender;
        patient.contactNumber = _contactNumber;
        patient.email = _email;
        patient.medicalHistory = _medicalHistory;
        patient.patientWallet = msg.sender; // Store the wallet address

        emit PatientRegistered(newPatientId, _name, _age, _dob, _gender, _contactNumber, _email, msg.sender);

        // Increment the patient ID counter
        patientIdCounter.increment();

        // Return the patient ID
        return newPatientId;
    }

    // Function to get patient details by ID
    function getPatientDetails(uint256 _patientId)
        external
        view
        returns (
            string memory name,
            uint256 age,
            string memory dob,
            string memory gender,
            string memory contactNumber,
            string memory email,
            string memory medicalHistory,
            string memory height,
            string memory weight,
            string memory bloodPressure
        )
    {
        Patient storage patient = patients[_patientId];
        require(msg.sender == patients[_patientId].patientWallet || isAuthorizedViewer(_patientId, msg.sender), "Not authorized to view patient details");
        return (
            patient.name,
            patient.age,
            patient.dob,
            patient.gender,
            patient.contactNumber,
            patient.email,
            patient.medicalHistory,
            patient.height,
            patient.weight,
            patient.bloodPressure
        );
    }

    // Function to update medical history
    function updateMedicalHistory(uint256 _patientId, string memory _newMedicalHistory) external onlyPatientOwner(_patientId) {
        Patient storage patient = patients[_patientId];
        patient.medicalHistory = _newMedicalHistory;
        // You can add additional logic or events as needed
    }

    // Function to add an authorized viewer
    function addAuthorizedViewer(uint256 _patientId, address _viewer) external onlyPatientOwner(_patientId) {
        Patient storage patient = patients[_patientId];
        patient.authorizedViewers.push(_viewer);
        emit AuthorizedViewerAdded(_patientId, _viewer);
    }

    // Function to remove an authorized viewer
    function removeAuthorizedViewer(uint256 _patientId, address _viewer) external onlyPatientOwner(_patientId) {
        Patient storage patient = patients[_patientId];
        require(_viewer != address(0), "Invalid viewer address");
        for (uint256 i = 0; i < patient.authorizedViewers.length; i++) {
            if (patient.authorizedViewers[i] == _viewer) {
                patient.authorizedViewers[i] = patient.authorizedViewers[patient.authorizedViewers.length - 1];
                patient.authorizedViewers.pop();
                emit AuthorizedViewerRemoved(_patientId, _viewer);
                break;
            }
        }
    }

    // Function to check if an address is an authorized viewer
    function isAuthorizedViewer(uint256 _patientId, address _viewer) public view returns (bool) {
        Patient storage patient = patients[_patientId];
        for (uint256 i = 0; i < patient.authorizedViewers.length; i++) {
            if (patient.authorizedViewers[i] == _viewer) {
                return true;
            }
        }
        return false;
    }

    // Function to create a health record with additional details
    function createHealthRecord(
        uint256 _patientId,
        string memory _height,
        string memory _weight,
        string memory _bloodPressure
    ) external onlyPatientOwner(_patientId) {
        Patient storage patient = patients[_patientId];
        patient.height = _height;
        patient.weight = _weight;
        patient.bloodPressure = _bloodPressure;
    }

    // Function to add a health record using IPFS hash
    function addHealthRecord(uint256 _patientId, string memory _ipfsHash) external onlyPatientOwner(_patientId) {
        Patient storage patient = patients[_patientId];
        patient.healthRecordIpfsHashes.push(_ipfsHash);
        emit HealthRecordAdded(_patientId, _ipfsHash);
    }

    // Function to get all health records for a patient
    function getHealthRecords(uint256 _patientId) external view onlyPatientOwner(_patientId) returns (string[] memory) {
        Patient storage patient = patients[_patientId];
        return patient.healthRecordIpfsHashes;
    }

    // Function to get patient details by wallet address
    function getPatientDetailsByAddress()
        external
        view
        returns (
            string memory name,
            uint256 age,
            string memory dob,
            string memory gender,
            string memory contactNumber,
            string memory email,
            string memory medicalHistory,
            string memory height,
            string memory weight,
            string memory bloodPressure
        )
    {
        uint256 patientId = _getPatientIdByAddress(msg.sender);
        Patient storage patient = patients[patientId];
        require(patientId != 0, "Patient not found");
        return (
            patient.name,
            patient.age,
            patient.dob,
            patient.gender,
            patient.contactNumber,
            patient.email,
            patient.medicalHistory,
            patient.height,
            patient.weight,
            patient.bloodPressure
        );
    }

    // Internal function to get patient ID by wallet address
    function _getPatientIdByAddress(address _patientAddress) internal view returns (uint256) {
        for (uint256 i = 1; i <= patientIdCounter.current(); i++) {
            if (patients[i].patientWallet == _patientAddress) {
                return i;
            }
        }
        return 0; // Return 0 if patient not found
    }

    // Function to get patient ID by wallet address
    function getPatientIdByAddress() external view returns (uint256) {
        return _getPatientIdByAddress(msg.sender);
    }

    // Function to register a hospital
    function registerHospital(
        string memory _name,
        string memory _h_type,
        string memory _address,
        string memory _state,
        string memory _district,
        string memory _link
    ) external {
        // Mint a new NFT for the hospital
        hospitalIdCounter.increment();
        uint256 newHospitalId = hospitalIdCounter.current();
        // _safeMint(msg.sender, newHospitalId);

        // Create a new hospital record
        Hospital storage hospital = hospitals[newHospitalId];
        hospital.name = _name;
        hospital.h_type = _h_type;
        hospital.h_address = _address;
        hospital.state = _state;
        hospital.district = _district;
        hospital.link = _link;
        hospital.hospitalWallet = msg.sender; // Store the wallet address

        emit HospitalRegistered(newHospitalId, _name, _h_type, _address, _state, _district, _link, msg.sender);
    }

    // Function to get hospital details by ID
    function getHospitalDetails(uint256 _hospitalId)
        external
        view
        returns (
            string memory name,
            string memory h_type,
            string memory hospitalAddress,
            string memory state,
            string memory district,
            string memory link
        )
    {
        Hospital storage hospital = hospitals[_hospitalId];
        return (
            hospital.name,
            hospital.h_type,
            hospital.h_address,
            hospital.state,
            hospital.district,
            hospital.link
        );
    }

    // Function to get hospital details by wallet address
    function getHospitalDetailsByAddress() external view returns (string memory name, string memory h_type, string memory hospitalAddress, string memory state, string memory district, string memory link  ) {
        uint256 hospitalId = _getHospitalIdByAddress(msg.sender);
        Hospital storage hospital = hospitals[hospitalId];
        require(hospitalId != 0, "Hospital not found");
        return (hospital.name, hospital.h_type, hospital.h_address, hospital.state, hospital.district, hospital.link);
    }

    // Internal function to get hospital ID by wallet address
    function _getHospitalIdByAddress(address _hospitalAddress) internal view returns (uint256) {
        for (uint256 i = 1; i <= hospitalIdCounter.current(); i++) {
            if (hospitals[i].hospitalWallet == _hospitalAddress) {
                return i;
            }
        }
        return 0; // Return 0 if hospital not found
    }

    // Function to get hospital ID by wallet address
    function getHospitalIdByAddress() external view returns (uint256) {
        return _getHospitalIdByAddress(msg.sender);
    }

    function getAllHospitals() external view returns (uint256[] memory) {
        uint256[] memory hospitalIds = new uint256[](hospitalIdCounter.current());
        for (uint256 i = 1; i <= hospitalIdCounter.current(); i++) {
            hospitalIds[i - 1] = i;
        }
        return hospitalIds;
    }

    function getHealthRecordIpfsHashes(uint256 _patientId) external view returns (string[] memory) {
        require(msg.sender == patients[_patientId].patientWallet || isAuthorizedViewer(_patientId, msg.sender), "Not authorized to view health records");
        return patients[_patientId].healthRecordIpfsHashes;
    }

    function createAppointment(
        uint256 _patientId,
        uint256 _hospitalId,
        string memory _date,
        string memory _description
    ) external {
        require(bytes(_description).length > 0, "Description cannot be empty");
        appointmentIdCounter.increment();
        uint256 newAppointmentId = appointmentIdCounter.current();

        // Create a new appointment record
        Appointment storage appointment = appointments[newAppointmentId];
        appointment.patientId = _patientId;
        appointment.hospitalId = _hospitalId;
        appointment.date = _date;
        appointment.description = _description;

        patientAppointments[_patientId].push(newAppointmentId);
        hospitalAppointments[_patientId].push(newAppointmentId);

        emit AppointmentCreated(newAppointmentId, _patientId, _hospitalId, _date, _description);
    }

    function createPrescription(
        uint256 _app_id,
        string memory _feild1,
        string memory _f3,
        string memory _f4,
        string memory _f5

    ) external {
        Appointment storage appointment = appointments[_app_id];
        // Create a new appointment record
        appointment.stringField1 = _feild1;
        appointment.stringField2 = _f3;
        appointment.stringField3 = _f4;
        appointment.followUpDate = _f5;
    }

    function getAppointmentDetails(uint256 _appointmentId)
        external
        view
        returns (
            uint256 patientId,
            uint256 hospitalId,
            string memory date,
            string memory description,
            string memory stringField1,
            string memory stringField2,
            string memory stringField3,
            string memory followUpDate
        )
    {
        Appointment storage appointment = appointments[_appointmentId];
        return (
            appointment.patientId,
            appointment.hospitalId,
            appointment.date,
            appointment.description,
            appointment.stringField1,
            appointment.stringField2,
            appointment.stringField3,
            appointment.followUpDate

        );
    }

    function getPatientAppointments(uint256 _patientId) external view returns (uint256[] memory) {
        return patientAppointments[_patientId];
    }

    function getHospitalAppointments(uint256 _HospitalId) external view returns (uint256[] memory) {
        return hospitalAppointments[_HospitalId];
    }
}
