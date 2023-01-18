import React, { useState } from "react";
import "./teste.css";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { db } from "../contexts/authProvider";
import { setDoc, doc } from "firebase/firestore";
import { useAuth } from "../contexts/authProvider";

function ModalEditar2() {
	const {
		setOpen2,
		atletas,
		open2,
		evento,
		setAtletas,
		todasAgremiacoes,
		setTodasAgremiacoes,
	} = useContext(ModalContext);
	const [select, setSelect] = useState("");

	const [faixa, setFaixa] = useState(atletas[open2[1]].faixa);
	const [categoria, setCategoria] = useState(atletas[open2[1]].categoria);
	const [nome, setNome] = useState(atletas[open2[1]].nome);
	const [pontos, setPontos] = useState(atletas[open2[1]].pontos);
	const [agremiacao, setAgremiacao] = useState(atletas[open2[1]].agremiacao);
	const [sexo, setSexo] = useState(atletas[open2[1]].sexo);
	const [colocacao, setColocacao] = useState(atletas[open2[1]].colocacao);
	const [classe, setClasse] = useState(atletas[open2[1]].classe);
	const [ouro, setOuro] = useState(atletas[open2[1]].ouro);
	const [prata, setPrata] = useState(atletas[open2[1]].prata);
	const [bronze, setBronze] = useState(atletas[open2[1]].bronze);
	const [wo, setWo] = useState(atletas[open2[1]].wo);
	const [festival, setFestival] = useState(atletas[open2[1]].festival);
	const [pagamento, setPagamento] = useState(atletas[open2[1]].pagamento);
	const [respProfessor, setRespProfessor] = useState(
		atletas[open2[1]].professorResponsavel
	);
	const [numProfessor, setNumProfessor] = useState(
		atletas[open2[1]].telefoneProfessor
	);

	const updateUser = async (id) => {
		const userDoc = doc(db, "eventos", evento, "usuarios", id);
		const user = {
			id: Number(atletas[open2[1]].id),
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
			docId: id,
		};

		const teste = atletas.splice(open2[1], 1, user);
		await setDoc(userDoc, user);
	};

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
			<div className="modalContainerFlex">
				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpen2(false);
						}}
					></button>
				</div>
				<div className="containerFlex">
					<div>
						<div className="title">
							<label className="label-modal" htmlFor="">
								Faixa
							</label>
							<select
								className="select-modal"
								defaultValue={faixa}
								onChange={(e) => {
									setFaixa(e.target.value);
								}}
							>
								<option>BRANCA</option>
								<option>CINZA</option>
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
								defaultValue={categoria}
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
								defaultValue={classe}
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
								defaultValue={pontos}
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
								defaultValue={agremiacao}
								onChange={(e) => {
									setAgremiacao((antigo) => e.target.value);
								}}
							>
								<option value="teste" disabled>
									teste
								</option>
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
								defaultValue={colocacao}
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
								defaultValue={sexo}
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
								defaultValue={nome}
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
								defaultValue={ouro}
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
								defaultValue={prata}
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
								defaultValue={bronze}
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
								defaultValue={wo}
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
								defaultValue={festival}
								className="input-modal"
								type="number"
								onChange={(e) => {
									setFestival(e.target.value);
								}}
							/>
						</div>
						<div className="title">
							<label htmlFor="" className="label-modal">
								Professor responsável
							</label>
							<input
								defaultValue={respProfessor}
								required
								className="select-modal"
								onChange={(e) => {
									setRespProfessor(e.target.value);
								}}
							/>
						</div>
						<div className="title">
							<label htmlFor="" className="label-modal">
								Telefone do professor
							</label>
							<input
								defaultValue={numProfessor}
								required
								type="number"
								className="select-modal"
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
						onClick={() => {
							setOpen2(false);
						}}
					>
						Cancelar
					</button>
					<button
						className="button green"
						onClick={() => {
							updateUser(atletas[open2[1]].docId);
							setOpen2(false);
						}}
					>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalEditar2;
