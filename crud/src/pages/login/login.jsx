import "./App.css";
import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { useAuth, db } from "../../contexts/authProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Logo-login.png";
import Navbar from "../../componentes/navbar";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
export default function Login() {
	const [error, seterror] = useState(false);

	const { login } = useAuth();
	const navigate = useNavigate();
	const { atletas, setUsuarioAtual, usuarios, setUsuarios } =
		useContext(ModalContext);
	async function Login() {
		const foi = usuarios.map((item) => {
			if (item.email == email && item.senha == senha) {
				setUsuarioAtual(item);
				localStorage.setItem("email", item.email);
				localStorage.setItem("senha", item.senha);
				localStorage.setItem("nivel", item.nivel);
				navigate("/eventos");
			} else {
				seterror("senha ou email errados");
			}
		});
	}
	const loginEmailPassword = async () => {
		try {
			await login(email, senha);

			navigate("/eventos");
		} catch {
			seterror("senha ou email errados");
		}
	};
	useEffect(() => {
		async function pesquisar() {
			const usersCollectionRef = collection(db, "usuarios");
			const data = await getDocs(usersCollectionRef);
			setUsuarios(data.docs.map((doc) => ({ ...doc.data() })));
		}
		pesquisar();
	}, []);
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	return (
		<div className="centro">
			<div id="login">
				<div class="topo">
					<img className="logo-Login" src={logo} alt="" />
				</div>
				<form className="form-login">
					<h1 className="h1-login">Login</h1>
					<label className="label-login">Email:</label>
					<div class="group">
						<input
							className="input-login input-login-email"
							id="txtEmail"
							type="email"
							onChange={(event) => setEmail(event.target.value.trim())}
						/>
						{error ? <p className="error-login">{error}</p> : null}
					</div>
					<label className="label-login">Senha:</label>
					<div class="group">
						<input
							className="input-login input-login-senha"
							id="txtPassword"
							type="password"
							onChange={(event) => setSenha(event.target.value.trim())}
						/>
						{error ? <p className="error-login">{error}</p> : null}
					</div>

					<button
						className="botao-login botao-login-azul"
						id="btnLogin"
						type="button"
						onClick={() => {
							Login();
						}}
					>
						Confirmar
					</button>
				</form>
			</div>
		</div>
	);
}
