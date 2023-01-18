import { useContext, useRef, ReactDOM } from "react";
import { ModalContext } from "../contexts/ModalContext";
import {
	setDoc,
	doc,
	addDoc,
	collection,
	getDocs,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../contexts/authProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../contexts/authProvider";
import ModalEditar from "./modalEditar";
import ModalEditarAgremiacao from "./modalEditarAgremiacao";
export default function ModalAgremiacao() {
	const usersCollectionRef = collection(db, "agremiações");

	const {
		setOpen3,
		todasAgremiacoes,
		setTodasagremiacoes,
		atletas,
		setOpen2,
		evento,
		setAtletas,
		open2,
	} = useContext(ModalContext);
	const [adicionar, setAdicionar] = useState("");
	const [adicionar2, setAdicionar2] = useState("");
	const [loading, setLoading] = useState(false);
	const [select, setSelect] = useState("");
	const [select2, setSelect2] = useState("");

	async function adicionarUser() {
		setLoading(true);
		const dado = {
			agremiacao: adicionar,
			docId: adicionar,
		};

		setTodasagremiacoes([...todasAgremiacoes, dado]);
		await setDoc(doc(usersCollectionRef, dado.agremiacao), dado);

		setLoading(false);
	}

	async function deletarUser(id) {
		setLoading(true);
		const deletar = todasAgremiacoes.findIndex((item) => item.docId === id);
		setTodasagremiacoes(
			todasAgremiacoes.filter(
				(user) => user.agremiacao !== todasAgremiacoes[deletar].agremiacao
			)
		);
		const userDoc = doc(db, "agremiações", todasAgremiacoes[deletar].docId);
		await deleteDoc(userDoc);
		setLoading(false);
	}

	return (
		<div>
			<div
				id="modalBackground"
				className="modalBackground"
				onClick={(e) => {
					if (e.target.id === "modalBackground") {
						setOpen3(false);
					}
				}}
			>
				<div className="modalContainerAgremiacao">
					<div className="title " id="espaco">
						<label htmlFor="" className="label-modal">
							Adicionar Agremiação
						</label>
						<input
							className="input-modal"
							type="text"
							onChange={(e) => {
								setAdicionar(e.target.value);
							}}
						/>
						<button
							className="button green"
							onClick={() => {
								setOpen3(false);
								adicionarUser();
							}}
						>
							Adicionar
						</button>
					</div>
					<table className="records" id="teste" border="1px solid black">
						<thead>
							<tr className="trStyck">
								<th>Agremiações</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{todasAgremiacoes.map((funcionario, key) => {
								return (
									<tr id={key}>
										<td>{funcionario.agremiacao}</td>
										<td>
											<button
												className="button blue"
												onClick={() => {
													setOpen2([true, key]);
												}}
											>
												Editar
											</button>

											<button
												className="button red"
												onClick={() => {
													deletarUser(funcionario.docId);
												}}
											>
												Excluir
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="centralizar footer2">
						<button
							className="button red"
							onClick={async () => {
								setOpen3(false);
							}}
						>
							Cancelar
						</button>
					</div>
				</div>
			</div>
			{open2[0] ? <ModalEditarAgremiacao /> : null}
		</div>
	);
}
