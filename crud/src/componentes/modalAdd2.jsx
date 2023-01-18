import React, { useState } from "react";
import "./teste.css";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { db } from "../contexts/authProvider";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/authProvider";

function ModalAdd2() {
	const {
		setOpen1,
		setAtletas,
		atletas,
		evento,
		setEvento,
		todasAgremiacoes,
		setTodasAgremiacoes,
		usuarioAtual,
		loading,
	} = useContext(ModalContext);
	const [select, setSelect] = useState("");

	const [faixa, setFaixa] = useState("Branca");
	const [categoria, setCategoria] = useState("LIGEIRO");
	const [nome, setNome] = useState("");
	const [pontos, setPontos] = useState("0");
	const [agremiacao, setAgremiacao] = useState("ALTO JIU JITSU");
	const [sexo, setSexo] = useState("MASC");
	const [colocacao, setColocacao] = useState("0");
	const [classe, setClasse] = useState("PRE MIRIM 4/5");
	const [ouro, setOuro] = useState(0);
	const [prata, setPrata] = useState(0);
	const [bronze, setBronze] = useState(0);
	const [wo, setWo] = useState(0);
	const [festival, setFestival] = useState(0);
	const [pagamento, setPagamento] = useState("NÃO");
	const [respProfessor, setRespProfessor] = useState();
	const [numProfessor, setNumProfessor] = useState();
	const [error, seterror] = useState(false);
	const createUser = async () => {
		const usersCollectionRef = collection(db, "eventos", evento, "usuarios");

		const user = {
			id: Number(atletas[atletas.length - 1].id) + 1,
			classe: classe,
			faixa: faixa,
			pontos: pontos,
			categoria: categoria,
			agremiacao: agremiacao,
			sexo: sexo,
			colocacao: colocacao,
			nome: nome,
			ouro: Number(ouro),
			prata: Number(prata),
			bronze: Number(bronze),
			wo: Number(wo),
			festival: Number(festival),
			pagamento: pagamento,
			professorResponsavel: respProfessor,
			telefoneProfessor: numProfessor,
			docId: nome,
		};
		await setDoc(doc(usersCollectionRef, nome), user);
		await setAtletas([...atletas, user]);
	};
	const confirmarEmail = usuarioAtual.nivel == "admin";
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
			{!loading ? (
				<div className="modalContainerFlex">
					<div className="titleCloseBtn">
						<button
							onClick={() => {
								setOpen1(false);
							}}
						></button>
					</div>
					<div className="containerFlex">
						<div>
							<div className="title">
								<label htmlFor="" className="label-modal">
									Faixa
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setFaixa(e.target.value);
									}}
								>
									<option>BRANCA</option>
									<option >CINZA</option>
									<option>AMARELA</option>
									<option>LARANJA</option>
									<option>LARANJA-VERDE</option>
									<option>AZUL</option>
									<option>ROXA</option>
									<option>MARROM</option>
									<option>PRETA</option>
									<option>BRANCA E CINZA</option>
								</select>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Categoria
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setCategoria(e.target.value);
									}}
								>
									<option>GALO</option>
									<option>PLUMA</option>
									<option>PENA</option>
									<option>LEVE</option>
									<option>MÉDIO</option>
									<option>MEIO-PESADO</option>
									<option>PESADO</option>
									<option>SUPER-PESADO</option>
									<option>PESADÍSSIMO</option>
									<option>LIGEIRO</option>
								</select>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Classe
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setClasse(e.target.value);
									}}
								>
									<option>PRÉ MIRIM 4/5</option>
									<option>MIRIM 6/7</option>
									<option>INFANTIL A 8/9</option>
									<option>INFANTIL 10/11 </option>
									<option>INF-JUVENIL 12/13 </option>
									<option>INF-JUVENIL 14/15 </option>
									<option>JUVENIL 16/17 </option>
									<option>ADULTO </option>
									<option>MASTER</option>
									<option>MASTER 1 </option>
									<option>MASTER 2 </option>
									<option>MASTER 3 </option>
									<option>MASTER 4</option>
									<option>MASTER 5</option>
									<option>NO GI JUVENIL </option>
									<option>NO GI ADULTO </option>
									<option>NO GI MASTER</option>
									<option>NO GI MASTER 1</option>
									<option>NO GI MASTER 2</option>
								</select>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Pontos
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setPontos(e.target.value);
									}}
								>
									<option>WO</option>
									<option>0</option>
									<option>1</option>
									<option>3</option>
									<option>9</option>
									<option>CSL</option>
								</select>
							</div>

							<div className="title">
								<label className="label-modal" htmlFor="">
									Agremiação
								</label>
								<select
									className="select-modal"
									name=""
									id=""
									onChange={(e) => {
										setAgremiacao((antigo) => e.target.value);
									}}
								>
									{todasAgremiacoes
										? todasAgremiacoes.map((item, key) => {
												return (
													<option value={item.agremiacao} id={key}>
														{item.agremiacao}
													</option>
												);
										  })
										: null}
								</select>
							</div>

							<div className="title">
								<label className="label-modal" htmlFor="">
									Colocação
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setColocacao(e.target.value);
									}}
								>
									<option>0</option>
									<option>1° Ouro</option>
									<option>2° Prata</option>
									<option>3° Bronze</option>
									<option>WO</option>
								</select>
							</div>

							<div className="title">
								<label className="label-modal" htmlFor="">
									Sexo
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setSexo(e.target.value);
									}}
								>
									<option>MASC</option>
									<option>FEM</option>
								</select>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Nome
								</label>
								<input
									className="input-modal"
									onChange={(e) => {
										setNome(e.target.value);
									}}
								/>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Ouro
								</label>

								<input
									className="input-modal"
									type="number"
									onChange={(e) => {
										setOuro(e.target.value);
									}}
								/>
							</div>
						</div>
						<div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Prata
								</label>

								<input
									className="input-modal"
									type="number"
									onChange={(e) => {
										setPrata(e.target.value);
									}}
								/>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Bronze
								</label>
								<input
									className="input-modal"
									type="number"
									onChange={(e) => {
										setBronze(e.target.value);
									}}
								/>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									WO
								</label>
								<input
									className="input-modal"
									type="number"
									onChange={(e) => {
										setWo(e.target.value);
									}}
								/>
							</div>
							<div className="title">
								<label className="label-modal" htmlFor="">
									Festival
								</label>
								<input
									className="input-modal"
									type="number"
									onChange={(e) => {
										setFestival(e.target.value);
									}}
								/>
							</div>

							<div className="title ">
								<label htmlFor="" className="label-modal label-limitado ">
									Professor responsável
								</label>

								<input
									required
									placeholder={error ? "campo obrigatório!!" : null}
									className={
										error ? "select-modal placeholder" : "select-modal"
									}
									onChange={(e) => {
										setRespProfessor(e.target.value);
									}}
								/>
							</div>
							<div className="title">
								<label htmlFor="" className="label-modal label-limitado">
									Telefone do professor
								</label>

								<input
									required
									type="number"
									placeholder={error ? "campo obrigatório!!" : null}
									className={
										error ? "select-modal placeholder" : "select-modal"
									}
									onChange={(e) => {
										setNumProfessor(e.target.value);
									}}
								/>
							</div>

							<div className="title">
								<label htmlFor="" className="label-modal">
									Confirmação de pagamento
								</label>
								<select
									className="select-modal"
									onChange={(e) => {
										setPagamento(e.target.value);
									}}
								>
									<option>NÃO</option>
									<option>SIM</option>
								</select>
							</div>
						</div>
					</div>

					<div className="footer botoes-footer">
						<button
							className="button red"
							onClick={async () => {
								setOpen1(false);
								setEvento("tiago");
							}}
						>
							Cancelar
						</button>
						<button
							className="button green"
							onClick={() => {
								if (respProfessor !== undefined && numProfessor !== undefined) {
									createUser();
									setOpen1(false);
									seterror(false);
								}
								seterror(true);
							}}
						>
							Confirmar
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default ModalAdd2;
