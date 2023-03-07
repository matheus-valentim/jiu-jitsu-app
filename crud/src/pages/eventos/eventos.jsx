import { db } from "../../contexts/authProvider";
import {
	collection,
	doc,
	setDoc,
	getDocs,
	deleteDoc,
} from "firebase/firestore";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalEvento from "../../componentes/modalEvento";
import { useAuth } from "../../contexts/authProvider";
import LoadingSpinner from "../../componentes/spinner";
import Navbar from "../../componentes/navbar";
import { deleteUser } from "firebase/auth";
import { getAuth } from "firebase/auth";
import Expirado from "../../componentes/modalExpirado";
export default function Eventos() {
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
		usuarioAtual,
		setOpen1,
		open1,
	} = useContext(ModalContext);
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
	const { logout } = useAuth();

	const HandleLogout = async () => {
		await logout();
	};
	const ApagarEvento = async (pessoa) => {
		if (window.confirm("voce realmente deseja apagar o evento?")) {
			const userDoc = doc(db, "eventos", pessoa);
			await deleteDoc(userDoc);

			setEventos(eventos.filter((dado) => dado.nome !== pessoa));
		}
	};

	function comparar(chave) {
		const dataEvento = new Date(eventos[chave].data).getTime();
		const DataAtual = new Date().getTime();
		if (DataAtual >= dataEvento) {
			return true;
		} else {
			return false;
		}
	}
	const confirmarEmail = usuarioAtual.nivel == "admin";
	return (
		<section class="principal">
			{!loading ? (
				<main class="main">
					<h1 class="h1-eventos">Eventos</h1>
					{!loading
						? eventos.map((eventoo, key) => {
								return (
									<button
										onClick={() => {
											setEvento(eventoo.nome);
											localStorage.setItem("pessoas", eventoo.nome);
										}}
										className={
											comparar(key)
												? "acabou"
												: confirmarEmail
												? "sessao"
												: "user"
										}
									>
										<Link
											to="/dashboard"
											className={confirmarEmail ? "area" : "elemento"}
										>
											<p className="grande">{eventoo.nome}</p>
										</Link>
										{confirmarEmail ? (
											<button
												onClick={() => {
													ApagarEvento(eventoo.nome);
												}}
												class="area2"
											>
												<svg
													width="16"
													height="17"
													viewBox="0 0 14 15"
													fill="none"
												>
													<path
														className="eventos-path"
														d="M1.5 1C1.23478 1 0.98043 1.10536 0.792893 1.29289C0.605357 1.48043 0.5 1.73478 0.5 2V3C0.5 3.26522 0.605357 3.51957 0.792893 3.70711C0.98043 3.89464 1.23478 4 1.5 4H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V4H12.5C12.7652 4 13.0196 3.89464 13.2071 3.70711C13.3946 3.51957 13.5 3.26522 13.5 3V2C13.5 1.73478 13.3946 1.48043 13.2071 1.29289C13.0196 1.10536 12.7652 1 12.5 1H9C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0L6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1H1.5ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V12.5C5 12.6326 4.94732 12.7598 4.85355 12.8536C4.75979 12.9473 4.63261 13 4.5 13C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5V5ZM7 5C7.13261 5 7.25979 5.05268 7.35355 5.14645C7.44732 5.24021 7.5 5.36739 7.5 5.5V12.5C7.5 12.6326 7.44732 12.7598 7.35355 12.8536C7.25979 12.9473 7.13261 13 7 13C6.86739 13 6.74021 12.9473 6.64645 12.8536C6.55268 12.7598 6.5 12.6326 6.5 12.5V5.5C6.5 5.36739 6.55268 5.24021 6.64645 5.14645C6.74021 5.05268 6.86739 5 7 5V5ZM10 5.5V12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5V5.5C9 5.36739 9.05268 5.24021 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5C9.63261 5 9.75979 5.05268 9.85355 5.14645C9.94732 5.24021 10 5.36739 10 5.5V5.5Z"
													/>
												</svg>
											</button>
										) : null}
									</button>
								);
						  })
						: null}
					{confirmarEmail ? (
						<article className="botoes-evento">
							<button
								class="mais"
								onClick={() => {
									setOpenEvento(true);
								}}
							>
								+
							</button>
							<button
								className="mais"
								onClick={(e) => {
									setOpen1(true);
								}}
							>
								<svg
									width="23"
									height="23"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.001 7.80005C9.71195 7.80005 9.42574 7.85698 9.1587 7.96759C8.89166 8.0782 8.64903 8.24033 8.44465 8.44471C8.24026 8.64909 8.07814 8.89172 7.96753 9.15876C7.85692 9.4258 7.79999 9.71201 7.79999 10.001C7.79999 10.2901 7.85692 10.5763 7.96753 10.8433C8.07814 11.1104 8.24026 11.353 8.44465 11.5574C8.64903 11.7618 8.89166 11.9239 9.1587 12.0345C9.42574 12.1451 9.71195 12.202 10.001 12.202C10.5847 12.2019 11.1445 11.9699 11.5572 11.557C11.9699 11.1442 12.2016 10.5843 12.2015 10.0005C12.2014 9.41681 11.9693 8.85703 11.5565 8.44435C11.1436 8.03168 10.5837 7.79992 9.99999 7.80005H10.001ZM10.001 5.20005C10.2899 5.19992 10.5759 5.14288 10.8428 5.0322C11.1097 4.92152 11.3521 4.75936 11.5563 4.55498C11.7605 4.3506 11.9225 4.108 12.0329 3.84103C12.1433 3.57406 12.2001 3.28796 12.2 2.99905C12.1999 2.71014 12.1428 2.42409 12.0321 2.15722C11.9215 1.89036 11.7593 1.6479 11.5549 1.44371C11.3505 1.23951 11.1079 1.07757 10.841 0.967131C10.574 0.856692 10.2879 0.799918 9.99899 0.800049C9.41551 0.800314 8.85604 1.03235 8.44365 1.44512C8.03125 1.85789 7.79972 2.41757 7.79999 3.00105C7.80025 3.58453 8.03229 4.144 8.44506 4.55639C8.85783 4.96878 9.41751 5.20031 10.001 5.20005V5.20005ZM10.001 14.8C9.41725 14.8 8.85741 15.0319 8.44465 15.4447C8.03188 15.8575 7.79999 16.4173 7.79999 17.001C7.79999 17.5848 8.03188 18.1446 8.44465 18.5574C8.85741 18.9702 9.41725 19.202 10.001 19.202C10.5847 19.202 11.1446 18.9702 11.5573 18.5574C11.9701 18.1446 12.202 17.5848 12.202 17.001C12.202 16.4173 11.9701 15.8575 11.5573 15.4447C11.1446 15.0319 10.5847 14.8 10.001 14.8V14.8Z"
										fill="black"
									/>
								</svg>
							</button>
						</article>
					) : null}
				</main>
			) : null}

			{openEvento ? <ModalEvento /> : null}
			{loading ? <LoadingSpinner /> : null}
			{open1 ? <Expirado /> : null}
			<Navbar />
		</section>
	);
}
