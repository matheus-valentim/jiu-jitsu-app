import { useState } from "react";
import logo from "../login/Logo-login.png";
import { useAuth } from "../../contexts/authProvider";

export default function RecuperarSenha() {
	const [email, setEmail] = useState("");
	const [errorSenha, setErrorSenha] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [sucesso, setSucesso] = useState(false);
	const { resetPassword } = useAuth();

	async function recuperar() {
		if (email) {
			await resetPassword(email);
			setSucesso(true);
		} else {
			setErrorEmail(true);
		}
	}
	return (
		<div className="centro">
			<div id="login">
				<div class="topo">
					<img className="logo-Login" src={logo} alt="" />
				</div>
				<form className="form-login">
					<h1 className="h1-login">Recuperar senha:</h1>
					<label className="label-login">Email:</label>
					<div class="group">
						<input
							className="input-login input-login-email"
							id="txtEmail"
							type="email"
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
						{errorEmail ? <p className="error">Campo vazio!</p> : null}
						{sucesso ? (
							<p className="sucesso">
								Verifique sua caixa de email, se não encontrar verifique a caixa
								de spam!
							</p>
						) : null}
					</div>

					<button
						className="botao-login botao-login-azul"
						id="btnLogin"
						type="button"
						onClick={() => {
							recuperar();
						}}
					>
						Confirmar
					</button>
				</form>
			</div>
		</div>
	);
}
