import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { useState } from "react";
import { db } from "../contexts/authProvider";
import { doc, setDoc } from "firebase/firestore";

export default function ModalUsuarioEditar() {
	const { usuarios, openEditar, setOpenEditar, setUsuarios } =
		useContext(ModalContext);
	const [senha, setSenha] = useState(usuarios[openEditar[1]].senha);
	const [nivel, setNivel] = useState(usuarios[openEditar[1]].nivel);

	async function updateUser(id) {
		const userDoc = doc(db, "usuarios", id);
		const user = {
			email: usuarios[openEditar[1]].email,
			senha: senha,
			nivel: nivel,
			docId: usuarios[openEditar[1]].docId,
		};
		const novo = [...usuarios];
		novo[openEditar[1]] = user;

		setUsuarios((antigo) => novo);
		setOpenEditar(false);
		await setDoc(userDoc, user);
		setOpenEditar(false)
	}
	return (
		<div
			id="modalBackground"
			className="modalBackground"
			onClick={(e) => {
				if (e.target.id === "modalBackground") {
					setOpenEditar(false);
				}
			}}
		>
			<div className="modalContainer">
				<div className="title">
					<label className="label-modal" htmlFor="">
						senha:
					</label>
					<input
						onChange={(e) => {
							setSenha(e.target.value);
						}}
						className="input-modal"
						name=""
						id=""
					/>
				</div>
				<div className="title">
					<label className="label-modal" htmlFor="">
						Permissão
					</label>
					<select
						onChange={(e) => {
							setNivel(e.target.value);
						}}
						name=""
						className="select-modal"
						id=""
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
							setOpenEditar(false);
						}}
					>
						Cancelar
					</button>
					<button
						className="button green"
						onClick={() => {
							updateUser(usuarios[openEditar[1]].docId);
						}}
					>
						Editar
					</button>
				</div>
			</div>
		</div>
	);
}
