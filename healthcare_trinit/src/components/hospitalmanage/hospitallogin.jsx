import { useRouter } from "next/navigation"
import UseWallet from "../../../wallet/wallet"

export default function Home () {
	let [ wallet, login, logout ] = UseWallet()
	let router = useRouter()

	return (
		<main className = {""}>
			<div className = {""}>
				<img src="/logo.png" alt="" />
				<h2>Tracking Expenses. &nbsp; Empowering Organizations.</h2>
				<div className={""}>
					<div className={""}>
						{
							wallet == null
							?
							<>
								<div className="button bright" onClick={login}>Login</div>
							</>
							:
							<>
								<div className="button bright" onClick={() => router.push("/dashboard")}>Dashboard</div>
								<div className="button minimal" onClick={logout}>Logout</div>
							</>
						}
					</div>
				</div>
			</div>
		</main>
	)
}