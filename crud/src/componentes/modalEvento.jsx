import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../contexts/authProvider";
import { useState } from "react";
import { useEffect } from "react";

export default function ModalEvento() {
	const { setOpenEvento, eventos, setEventos, setLoading } =
		useContext(ModalContext);
	const [nomeEvento, setNomeEvento] = useState("");
	const [data, setData] = useState("");
	async function adicionarUser() {
		setLoading(true);
		const value = {
			id: 0,
			nome: "Aristeu",
			pontos: 0,
			colocacao: "0",
			agremiacao: "ALTO JIUJITSU",
			sexo: "MASC",
			faixa: "PRETA",
			peso: "PLUMA",
			classe: "MASTER",
			categoria: "LIGEIRO",
			ouro: 0,
			prata: 0,
			bronze: 0,
			wo: 0,
			festival: 0,
			pagamento: "NAO",
		};
		const dadoEvento = {
			nome: nomeEvento,
			data: data,
		};
		setEventos([...eventos, { nome: nomeEvento }]);
		await setDoc(doc(db, "eventos", nomeEvento, "usuarios", value.nome), value);
		await setDoc(doc(db, "eventos", nomeEvento), dadoEvento);

		setLoading(false);
	}

	return (
		<div>
			<div
				id="modalBackground"
				className="modalBackground"
				onClick={(e) => {
					if (e.target.id === "modalBackground") {
						setOpenEvento(false);
					}
				}}
			>
				<div className="modalContainer">
					<div className="title " id="espaco">
						<label htmlFor="" className="label-modal">
							Nome do evento:
						</label>
						<input
							className="input-modal"
							type="text"
							onChange={(e) => {
								setNomeEvento(e.target.value.trim());
							}}
						/>
					</div>
					<div className="title " id="espaco">
						<label htmlFor="" className="label-modal">
							Data de término:
						</label>

						<input
							type="date"
							onChange={(e) => {
								setData(e.target.value);
							}}
							className="input-modal"
						/>
					</div>
					<div className="footer">
						<button
							className="button red"
							onClick={async () => {
								setOpenEvento(false);
							}}
						>
							Cancelar
						</button>
						<button
							className="button green"
							onClick={() => {
								setOpenEvento(false);

								adicionarUser();
							}}
						>
							Confirmar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
