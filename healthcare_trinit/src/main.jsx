import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './components/appoint/userlogin';
import CalendarBooking from './components/appoint/datebook'
import HospitalSelector from './components/Hospitals/Hospital';
import DepartmentSelection from './components/appoint/department';
import PhysicalAppointment from './components/appoint/PhysicalAppointment';
import PatientProfile from './components/profile/patient';
import ViewerPermsForm from './Forms/ViewersPermsForm';
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Appointment from './components/appoint/Appointments';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
