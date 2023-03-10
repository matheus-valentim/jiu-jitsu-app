import "./App.css";
import { ModalContext } from "./contexts/ModalContext";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./componentes/dashboard";
import { AuthProvider } from "./contexts/authProvider";
import PrivateRoute from "./contexts/rotaPrivada";
import Eventos from "./pages/eventos/eventos";
import Atletas from "./pages/relatorioAtleta/atleta";
import Pagamento from "./pages/pagamento/pagamento";
import Relatorios from "./pages/relatorios/relatorios";
import Registrar from "./pages/registrar/registrar";
import RecuperarSenha from "./pages/recuperarSenha/RecuperarSenha";
import Usuarios from "./pages/usuarios/usuarios";

export default function App() {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState([false, null]);
	const [open3, setOpen3] = useState(false);
	const [openEditar, setOpenEditar] = useState(false);
	const [openEvento, setOpenEvento] = useState(false);
	const [atletas, setAtletas] = useState([]);
	const [eventos, setEventos] = useState([]);
	const [evento, setEvento] = useState("");
	const [loading, setLoading] = useState(true);
	const [usuarios, setUsuarios] = useState("");
	const [usuarioAtual, setUsuarioAtual] = useState("");
	const [todasAgremiacoes, setTodasagremiacoes] = useState([]);

	useEffect(() => {
		setLoading(true);
		if (!usuarioAtual) {
			setUsuarioAtual({
				email: localStorage.getItem("email"),
				senha: localStorage.getItem("senha"),
				nivel: localStorage.getItem("nivel"),
			});
		}
		setLoading(false);
	});

	return (
		<Router>
			<AuthProvider>
				<ModalContext.Provider
					value={{
						open1,
						setOpen1,
						open2,
						setOpen2,
						atletas,
						setAtletas,
						evento,
						setEvento,
						openEvento,
						setOpenEvento,
						eventos,
						setEventos,
						loading,
						setLoading,
						usuarios,
						setUsuarios,
						open3,
						setOpen3,
						todasAgremiacoes,
						setTodasagremiacoes,
						usuarioAtual,
						setUsuarioAtual,
						openEditar,
						setOpenEditar,
					}}
				>
					<Routes>
						<Route
							path="/eventos"
							element={
								<PrivateRoute>
									<Eventos />
								</PrivateRoute>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/relatorios/atleta"
							element={
								<PrivateRoute>
									<Atletas />
								</PrivateRoute>
							}
						/>
						<Route path="/" element={<Login />} />
						<Route
							path="/relatorios/pagamento"
							element={
								<PrivateRoute>
									<Pagamento />
								</PrivateRoute>
							}
						/>
						<Route
							path="/relatorios"
							element={
								<PrivateRoute>
									<Relatorios />
								</PrivateRoute>
							}
						/>
						<Route
							path="/usuarios"
							element={
								<PrivateRoute>
									<Usuarios />
								</PrivateRoute>
							}
						/>
						<Route
							path="/recuperar"
							element={
								<PrivateRoute>
									<RecuperarSenha />
								</PrivateRoute>
							}
						/>
					</Routes>
				</ModalContext.Provider>
			</AuthProvider>
		</Router>
	);
}
