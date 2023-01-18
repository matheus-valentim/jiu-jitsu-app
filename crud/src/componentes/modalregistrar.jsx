import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import logo from "../pages/login/Logo-login.png";
import { useAuth, db } from "../contexts/authProvider";
import { useState } from "react";
import { setDoc, collection, doc } from "firebase/firestore";

export default function Modalregistrar() {
	const { setOpen1, usuarios, setUsuarios } = useContext(ModalContext);
	const [email, setEmail] = useState("");
	const [senha1, setSenha1] = useState(0);
	const [senha2, setSenha2] = useState(0);
	const [errorSenha1, setErrorSenha1] = useState(false);
	const [errorSenha2, setErrorSenha2] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [sucesso, setSucesso] = useState(false);
	const [nivel, setNivel] = useState("");

	const { signup } = useAuth();

	async function criarConta() {
		setSucesso(false);

		if (senha1 === senha2) {
			const usersCollectionRef = collection(db, "usuarios");
			const user = {
				email: email,
				senha: senha1,
				nivel: nivel,
				docId: email,
			};
			setUsuarios([...usuarios, user]);
			setOpen1(false);
			await setDoc(doc(usersCollectionRef, email), user);
		} else {
			setErrorSenha1("as senhas não batem");
			setErrorSenha2("as senhas não batem");
		}
	}
	return (
		<div
			id="modalBackground"
			className="modalBackground"
			onClick={(e) => {
				if (e.target.id === "modalBackground") {
					setOpen1(false);
				}
			}}
		>
			<div className="modalContainer">
				<div className="title">
					<label className="label-modal" htmlFor="">
						Email:
					</label>
					<input
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						className="input-modal"
						name=""
						id=""
					/>
				</div>
				<div className="title">
					<label className="label-modal" htmlFor="">
						senha:
					</label>
					<input
						onChange={(event) => {
							setSenha1(event.target.value);
						}}
						className="input-modal"
						name=""
						id=""
					/>
				</div>
				{errorSenha1 ? <p className="error">{errorSenha1}</p> : null}
				<div className="title">
					<label className="label-modal" htmlFor="">
						Confirme a senha:
					</label>
					<input
						onChange={(event) => {
							setSenha2(event.target.value);
						}}
						className="input-modal"
						name=""
						id=""
					/>
				</div>
				{errorSenha2 ? <p className="error">{errorSenha2}</p> : null}
				<div className="title">
					<label className="label-modal" htmlFor="">
						Permissão
					</label>
					<select
						name=""
						className="select-modal"
						id=""
						onChange={(e) => {
							setNivel(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Niveis
						</option>
						<option value="professor">Professor</option>
						<option value="admin">Admin</option>
					</select>
				</div>
				<div className="footer">
					<button
						className="button red"
						onClick={() => {
							setOpen1(false);
						}}
					>
						Cancelar
					</button>
					<button
						className="button green"
						onClick={() => {
							criarConta();
						}}
					>
						Adicionar
					</button>
				</div>
			</div>
		</div>
	);
}
