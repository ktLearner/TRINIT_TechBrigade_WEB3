import React from "react"
import { Link } from "react-router-dom"
import PatientRegistrationForm from "../../Forms/PatientRegn"
import UseWallet from "../../../wallet/wallet"

export default function Home () {
	let [ wallet, login, logout ] = UseWallet()
	return (
		<main>
			<div>
				<h2>Tracking Expenses. &nbsp; Empowering Organizations.</h2>
				<div>
					<div>
						{
							wallet == null
							?
							<>
                                <PatientRegistrationForm/>
								<div className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4" onClick={login}>Login To Metamask</div>
							</>
							:
							<>
								<Link className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4" to="hospital">Dashboard</Link>
								<button className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4" onClick={logout}>Logout</button>
							</>
						}
					</div>
				</div>
			</div>
		</main>
	)
}