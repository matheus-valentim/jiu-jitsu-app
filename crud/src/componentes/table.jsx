import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useAuth } from "../contexts/authProvider";
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { db } from "../contexts/authProvider";

export default function Table() {
	const {
		atletas,
		setOpen2,
		setAtletas,
		evento,
		setEvento,
		setLoading,
		loading,
		todasAgremiacoes,
		setTodasagremiacoes,
		usuarioAtual,
	} = useContext(ModalContext);

	const deleteUser = async (id, funcionarioNome) => {
		if (atletas.length == 1) {
			alert("tem que ter no mínimo 1 elemento");
		} else {
			setLoading(true);
			const userDoc = doc(db, "eventos", evento, "usuarios", id);
			await deleteDoc(userDoc);
			setAtletas(atletas.filter((user) => user.nome !== funcionarioNome));
			setLoading(false);
		}
	};

	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			setEvento(localStorage.getItem("pessoas"));
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
	useEffect(() => {
		async function atualizar() {
			setLoading(true);
			const usersCollectionRef = collection(db, "agremiações");
			const data = await getDocs(usersCollectionRef);
			setTodasagremiacoes(data.docs.map((doc) => ({ ...doc.data() })));

			setLoading(false);
		}
		if (todasAgremiacoes == false) {
			atualizar();
		}
	}, []);
	const confirmarEmailAdmin = usuarioAtual.nivel == "admin";
	const confirmarEmailProfessor =
		usuarioAtual.nivel == "professor" || usuarioAtual.nivel == "admin";
	return (
		<div className="table-container">
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
							{confirmarEmailProfessor ? <th>Ações</th> : null}
						</tr>
					</thead>
					<tbody>
						{atletas
							.sort((x = { id: 0 }, y = { id: 0 }) => x.id - y.id)
							.map((funcionario, key) => {
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
										{confirmarEmailProfessor ? (
											<td>
												<button
													className="button blue"
													onClick={() => {
														if (atletas[key].nome === funcionario.nome) {
															setOpen2([true, key]);
														}
													}}
												>
													Editar
												</button>
												{confirmarEmailAdmin ? (
													<button
														className="button red"
														onClick={() => {
															deleteUser(funcionario.docId, funcionario.nome);
														}}
													>
														Excluir
													</button>
												) : null}
											</td>
										) : null}
									</tr>
								);
							})}
					</tbody>
				</table>
			) : null}
		</div>
	);
}
