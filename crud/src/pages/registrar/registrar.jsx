import logo from "../login/Logo-login.png";
import { useAuth, db } from "../../contexts/authProvider";
import { useState } from "react";
import { setDoc, collection, doc } from "firebase/firestore";
import Navbar from "../../componentes/navbar";

export default function Registrar() {
	const [email, setEmail] = useState("");
	const [senha1, setSenha1] = useState(0);
	const [senha2, setSenha2] = useState(0);
	const [errorSenha1, setErrorSenha1] = useState(false);
	const [errorSenha2, setErrorSenha2] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [sucesso, setSucesso] = useState(false);

	const { signup } = useAuth();

	async function criarConta() {
		setSucesso(false);
		if (!senha1) {
			setErrorSenha1("campo vazio");
		} else setErrorSenha1(false);
		if (!senha2) {
			setErrorSenha2("campo vazio");
		} else setErrorSenha2(false);
		if (!email) {
			setErrorEmail("campo vazio");
		} else setErrorEmail(false);
		if (email && senha1 && senha2) {
			if (senha1 === senha2) {
				const usersCollectionRef = collection(db, "usuarios");
				await setDoc(doc(usersCollectionRef, email), {
					email: email,
					senha: senha1,
					docId: email,
				});
				setSucesso(true);
			} else {
				setErrorSenha1("as senhas não batem");
				setErrorSenha2("as senhas não batem");
			}
		}
	}
	return (
		<div className="centro">
			<div id="registrar">
				<div class="topo">
					<img className="logo-registrar" src={logo} alt="" />
				</div>
				<form className="form-login">
					<h1 className="h1-registrar">Registrar</h1>
					<label className="label-registrar">Email:</label>
					<div class="group">
						<input
							className="input-registrar input-login-email"
							id="txtEmail"
							type="email"
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
						{errorEmail ? <p className="error">{errorEmail}</p> : null}
					</div>
					<label className="label-registrar">Senha:</label>
					<div class="group">
						<input
							className="input-registrar input-login-senha"
							id="txtPassword"
							type="password"
							onChange={(event) => {
								setSenha1(event.target.value);
							}}
						/>
						{errorSenha1 ? <p className="error">{errorSenha1}</p> : null}
					</div>
					<label className="label-registrar">Repita a senha:</label>
					<div class="group">
						<input
							className="input-registrar input-login-senha"
							id="txtPassword"
							type="password"
							onChange={(event) => {
								setSenha2(event.target.value);
							}}
						/>
						{errorSenha2 ? <p className="error">{errorSenha2}</p> : null}
						{sucesso ? <p className="sucesso">Conta criada!</p> : null}
					</div>
					<button
						className="botao-login botao-login-azul"
						id="btnLogin"
						type="button"
						onClick={() => {
							criarConta();
						}}
					>
						Confirmar
					</button>
				</form>
			</div>
			<Navbar />
		</div>
	);
}
