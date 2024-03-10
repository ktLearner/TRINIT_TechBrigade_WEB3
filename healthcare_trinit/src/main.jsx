import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AlterDoctorsComponent from './components/hospitalmanage/managedoctors';
import AlterDepartmentsComponent from './components/hospitalmanage/managedepartments';
import AppointmentDetailsComponent from './components/hospitalmanage/appointcalls';
import Home from './components/appoint/userlogin';
import HospitalSelector from './components/Hospitals/Hospital';
import HomeHospital from './components/hospitalmanage/hospitallogin';
import ViewAppointmentsComponent from './components/hospitalmanage/viewappoints';
import UploadPdfReportComponent from './components/hospitalmanage/reports';
import PhysicalAppointment from './components/appoint/PhysicalAppointment';
import PatientProfile from './components/profile/patient';
import ViewerPermsForm from './Forms/ViewersPermsForm';
import Doc_details from './Forms/doctor_updated';
import HospitalRegistrationForm from './Forms/HospitalRegn';
import RecordsViewer from './Forms/RecordsViewer';

import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Prescription from './Forms/prescription';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HospitalDashboard from './components/hospitalmanage/hospitaldash';
import HospitalProfile from './components/profile/hospital';


const router = createBrowserRouter([
  {
    path: "/prescription/:id",
    element: <Prescription />,
  },
  {
    path: "/alter-doctors",
    element: <AlterDoctorsComponent />,
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
    path: "/hospital-dashboard",
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
    path: "/dashboard/hospital",
    element: <HospitalSelector />,
  },
  {
    path: "/appointment/:id",
    element: <PhysicalAppointment />,
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
    path: "/h_profile",
    element: <HospitalProfile />,
  },
  {
    path: '/user_profile_update',
    element: <Doc_details />
  },
  {
    path: '/testing3',
    element: <RecordsViewer />
  },
  {
    path: '/registerHospital',
    element: <HospitalRegistrationForm />
  },
  {
    path: '/appointment-details/:id',
    element: <AppointmentDetailsComponent />
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
