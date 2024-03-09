
import useWallet from "./wallet"

export default function Home () {
	let [ wallet, login, logout ] = useWallet()

	return (
		<main >
			<div >
				<h2>Tracking Expenses. &nbsp; Empowering Organizations.</h2>
				<div >
					<div>
						{
							wallet == null
							?
							<>
								<div className="button bright" onClick={login}>Login</div>
							</>
							:
							<>
								<div className="button bright">Dashboard</div>
								<div className="button minimal" onClick={logout}>Logout</div>
							</>
						}
					</div>
				</div>
			</div>
		</main>
	)
}
