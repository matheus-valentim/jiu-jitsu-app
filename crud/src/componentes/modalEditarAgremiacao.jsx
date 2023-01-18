import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useState } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../contexts/authProvider";
export default function ModalEditarAgremiacao() {
	const [select, setSelect] = useState("");
	const {
		setOpen3,
		todasAgremiacoes,
		setTodasagremiacoes,
		atletas,
		setOpen2,
		evento,
		setAtletas,
		open2,
		setLoading,
	} = useContext(ModalContext);
	async function editarUser(id) {
		const userDoc = doc(db, "agremiações", id);
		await setDoc(userDoc, {
			agremiacao: select,
			docId: id,
		});

		const usersCollectionRef = collection(db, "agremiações");
		const data = await getDocs(usersCollectionRef);
		setTodasagremiacoes(data.docs.map((doc) => ({ ...doc.data() })));

		setLoading(false);
	}
	return (
		<div
			id="modalBackground"
			className="modalBackground"
			onClick={(e) => {
				if (e.target.id === "modalBackground") {
					setOpen2(false);
				}
			}}
		>
			<div className="modalContainer">
				<div className="title">
					<label className="label-modal" htmlFor="">
						Agremiação
					</label>
					<input
						className="input-modal"
						name=""
						id=""
						onChange={(e) => {
							setSelect(e.target.value);
						}}
					/>
				</div>
				<div className=" footer">
					<button
						className="button2 button green"
						onClick={() => {
							editarUser(todasAgremiacoes[open2[1]].docId);
							setOpen2(false);
						}}
					>
						Confirmar
					</button>
					<button
						className="button red"
						onClick={async () => {
							setOpen2(false);
						}}
					>
						Cancelar
					</button>
				</div>

				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpen2(false);
						}}
					></button>
				</div>
			</div>
		</div>
	);
}
