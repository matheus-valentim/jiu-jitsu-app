import Navbar from "../../componentes/navbar";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/authProvider";
import { db } from "../../contexts/authProvider";
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";

export default function Pagamento() {
	const [pagamento, setPagamento] = useState(/[a-z]/i);
	const [arr, setArr] = useState([]);
	const [ativo, setAtivo] = useState("");
	const {
		setEvento,
		setOpenEvento,
		openEvento,
		eventos,
		setEventos,
		evento,
		setLoading,
		loading,
		todasAgremiacoes,
		setTodasagremiacoes,
		atletas,
		setAtletas,
	} = useContext(ModalContext);
	function exportFile() {
		const filtrado = arr;
		filtrado.map((filtro) => delete filtro.docId);
		const ws = utils.json_to_sheet(filtrado);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Data");
		writeFileXLSX(wb, `Pagamentos.xlsx`);
	}
	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			if (evento) {
				const usersCollectionRef = collection(
					db,
					"eventos",
					evento.trim(),
					"usuarios"
				);

				const data = await getDocs(usersCollectionRef);
				setAtletas(data.docs.map((doc) => ({ ...doc.data(), docId: doc.id })));
			}
			setLoading(false);
		};

		getUsers();
	}, [evento]);
	async function filtrar() {
		setArr(
			atletas.filter((user) => new RegExp(pagamento, "i").test(user.pagamento))
		);
	}
	useEffect(() => {
		setLoading(true);
		setArr(atletas);
		setLoading(false);
	}, [atletas]);
	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			const usersCollectionRef = collection(db, "eventos");
			const data = await getDocs(usersCollectionRef);
			setEventos(data.docs.map((doc) => ({ ...doc.data() })));
			setLoading(false);
		};
		getUsers();
	}, []);

	return (
		<div className="table-container">
			<div>
				<Link className="button blue" to="/relatorios">
					Voltar
				</Link>
				<button onClick={exportFile} className="button2 blue">
					Exportar
				</button>
				<div className="title-relatorio">
					<select
						name=""
						className="relatorio-select"
						id=""
						onChange={(e) => {
							setEvento(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Eventos
						</option>
						{eventos
							? eventos.map((eventoNome, key) => {
									return (
										<option value={eventoNome.nome}>{eventoNome.nome}</option>
									);
							  })
							: null}
					</select>
				</div>
			</div>
			<div className="relatorio-container">
				<div className="">
					<select
						className="relatorio-select"
						onChange={(e) => {
							setPagamento(e.target.value);
						}}
					>
						<option value="" disabled selected>
							Pagamento
						</option>
						<option value="[a-z]">TODOS</option>
						<option>NÃO</option>
						<option>SIM</option>
					</select>
				</div>
				<button className="botao-relatorio" onClick={filtrar}>
					filtrar
				</button>
			</div>

			{!loading ? (
				<table className="records" id="teste" border="1px solid black">
					<thead>
						<tr className="trStyck">
							<th>Pontos</th>
							<th>Colocação</th>
							<th>Nome</th>
							<th>Agremiação</th>
							<th>Sexo</th>
							<th>Faixa</th>
							<th>Categoria</th>
							<th>Classe</th>
							<th>Ouro</th>
							<th>Prata</th>
							<th>Bronze</th>
							<th>WO</th>
							<th>Festival</th>
							<th>Pagamento</th>
							<th>Professor Responsável</th>
							<th>Telefone do Professor</th>
						</tr>
					</thead>
					<tbody>
						{arr.map((funcionario, key) => {
							return (
								<tr id={key}>
									<td>{funcionario.pontos}</td>
									<td>{funcionario.colocacao}</td>
									<td>{funcionario.nome}</td>
									<td>{funcionario.agremiacao}</td>
									<td>{funcionario.sexo}</td>
									<td>{funcionario.faixa}</td>
									<td>{funcionario.categoria}</td>
									<td>{funcionario.classe}</td>
									<td>{funcionario.ouro}</td>
									<td>{funcionario.prata}</td>
									<td>{funcionario.bronze}</td>
									<td>{funcionario.wo}</td>
									<td>{funcionario.festival}</td>
									<td>{funcionario.pagamento}</td>
									<td>{funcionario.professorResponsavel}</td>
									<td>{funcionario.telefoneProfessor}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</div>
	);
}
