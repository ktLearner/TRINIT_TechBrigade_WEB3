import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AlterDoctorsComponent from './components/hospitalmanage/managedoctors';
import AlterDepartmentsComponent from './components/hospitalmanage/managedepartments';
import Home from './components/appoint/userlogin';
import CalendarBooking from './components/appoint/datebook'
import HospitalSelector from './components/Hospitals/Hospital';
import DepartmentSelection from './components/appoint/department';
import HomeHospital from './components/hospitalmanage/hospitallogin';
import ViewAppointmentsComponent from './components/hospitalmanage/viewappoints';
import UploadPdfReportComponent from './components/hospitalmanage/reports';
import PhysicalAppointment from './components/appoint/PhysicalAppointment';
import PatientProfile from './components/profile/patient';
import ViewerPermsForm from './Forms/ViewersPermsForm';
import Doc_details from './Forms/doctor_updated';
import HospitalRegistrationForm from './Forms/HospitalRegn';

import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Prescription from './Forms/prescription';
import App from './App';
import Appointment from './components/appoint/Appointments';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppointmentDetailsComponent from './components/hospitalmanage/appointcalls';
import HospitalDashboard from './components/hospitalmanage/hospitaldash';


const router = createBrowserRouter([
  {
    path: "/prescription",
    element: <Prescription />,
  },
  {
    path: "/alter-doctors",
    element: <AlterDoctorsComponent />,
  },
  {
    path: "/appointment-details/:id",
    element: <AppointmentDetailsComponent />,
  },
  {
    path: "/upload-report",
    element: <UploadPdfReportComponent />,
  },
  {
    path: "/view-appointments",
    element: <ViewAppointmentsComponent />,
  },
  {
    path: "/hospital-dashboard/:userId",
    element: <HospitalDashboard />,
  },
  {
    path: "/alter-departments",
    element: <AlterDepartmentsComponent />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard-hospital",
    element: <HomeHospital />,
  },
  {
    path: "/registerPatient",
    element: <Home />,
  },
  {
    path: "/dashboard/hospital/",
    element: <HospitalSelector />,
  },
  {
    path: "/dashboard/hospital/:userId",
    element: <HospitalSelector />,
  },
  {
    path: "/appointment/:hospitalName",
    element: <Appointment />,
  },
  {
    path: "/appointment/:hospitalName/physical-appointment",
    element: <PhysicalAppointment />,
  },
  {
    path: "/physical-appointment/departments",
    element: <DepartmentSelection />,
  },
  {
    path: "/physical-appointment/calendar/:department",
    element: <CalendarBooking />,
  },
  {
    path: "/profile",
    element: <PatientProfile />,
  },
  {
    path: "/viewers",
    element: <ViewerPermsForm />,
  },
  {
    path: '/testing2',
    element: <Doc_details />
  },
  {
    path: '/registerHospital',
    element: <HospitalRegistrationForm />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <ToastContainer/>
  </RecoilRoot>
);

reportWebVitals();
