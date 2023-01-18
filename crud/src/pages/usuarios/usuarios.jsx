import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { useAuth } from "../../contexts/authProvider";
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { db } from "../../contexts/authProvider";
import Navbar from "../../componentes/navbar";
import Modalregistrar from "../../componentes/modalregistrar";
import ModalUsuarioEditar from "../../componentes/modalUsuarioEditar";

export default function Table() {
	const {
		open1,
		atletas,
		setOpen1,
		open2,
		setOpen2,
		setAtletas,
		evento,
		setEvento,
		setLoading,
		loading,
		todasAgremiacoes,
		setTodasagremiacoes,
		usuarioAtual,
		setUsuarios,
		usuarios,
		openEditar,
		setOpenEditar,
	} = useContext(ModalContext);

	const deleteUser = async (id) => {
		setLoading(true);
		const userDoc = doc(db, "usuarios", id);
		await deleteDoc(userDoc);
		setUsuarios(usuarios.filter((user) => user.docId !== id));
		setLoading(false);
	};

	useEffect(() => {
		async function pesquisar() {
			setLoading(true);
			const usersCollectionRef = collection(db, "usuarios");
			const data = await getDocs(usersCollectionRef);
			setUsuarios(data.docs.map((doc) => ({ ...doc.data() })));
			setLoading(false);
		}
		pesquisar();
	}, []);
	return (
		<div>
			<header className="header-usuarios">
				<button onClick={(e) => setOpen1(true)} className="button green">
					Adicionar usuário
				</button>
			</header>
			<div className="table-container2">
				{!loading ? (
					<table className="table2" id="teste" border="1px solid black">
						<thead>
							<tr className="trStyck">
								<th>Email</th>
								<th>Senha</th>
								<th>Nível</th>
								<th>Açôes</th>
							</tr>
						</thead>
						<tbody>
							{usuarios
								? usuarios.map((user, key) => {
										return (
											<tr id={key}>
												<td>{user.email}</td>
												<td>{user.senha}</td>
												<td>{user.nivel}</td>
												<td>
													<button
														className="button blue"
														onClick={() => {
															setOpenEditar([true, key]);
														}}
													>
														Editar
													</button>
													<button
														className="button red"
														onClick={(e) => {
															e.preventDefault();
															deleteUser(user.docId);
														}}
													>
														Excluir
													</button>
												</td>
											</tr>
										);
								  })
								: null}
						</tbody>
					</table>
				) : null}
				<Navbar />
			</div>
			{open1 ? <Modalregistrar /> : null}
			{openEditar ? <ModalUsuarioEditar /> : null}
		</div>
	);
}
