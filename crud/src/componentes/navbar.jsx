import "./navbar.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import bandeira from "../bandeira.png";
import ModalAgremiacao from "./modalAgremiacao";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, db } from "../contexts/authProvider";
import { getDocs, collection } from "firebase/firestore";

export default function Navbar() {
	const {
		open3,
		setOpen3,
		atletas,
		setUsuarioAtual,
		setTodasagremiacoes,
		setLoading,
		usuarioAtual,
	} = useContext(ModalContext);
	const [sidebarOn, setSidebarOn] = useState(false);
	const [dark, setDark] = useState(true);
	const { logout } = useAuth();
	const HandleLogout = async () => {
		localStorage.removeItem("email");
		localStorage.removeItem("senha");
		localStorage.removeItem("nivel");
		setUsuarioAtual(false);
		useNavigate("/");
	};
	useEffect(() => {
		async function atualizar() {
			setLoading(true);
			const usersCollectionRef = collection(db, "agremiações");
			const data = await getDocs(usersCollectionRef);
			setTodasagremiacoes(data.docs.map((doc) => ({ ...doc.data() })));
			setLoading(false);
		}
		atualizar();
	}, []);
	const confirmarEmailAdmin = usuarioAtual.nivel == "admin";
	return (
		<div className={dark ? "dark" : "white"}>
			<nav class={sidebarOn ? "sidebar" : "sidebar close"}>
				<header>
					<div class="image-text">
						<span class="image">
							<img src={bandeira} alt="" />
						</span>

						<div class="text logo-text">
							<span class="name">BRAZILIAN</span>
							<span class="profession">JIU JITSU</span>
						</div>
					</div>

					<i
						class="bx bx-chevron-right toggle"
						onClick={(e) => {
							if (sidebarOn) {
								setSidebarOn(false);
							} else {
								setSidebarOn(true);
							}
						}}
					>
						<svg
							className="navbar-svg"
							width="10"
							height="16"
							viewBox="0 0 8 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" />
						</svg>
					</i>
				</header>

				<div class="menu-bar">
					<div class="menu">
						<ul class="menu-links">
							<li class="nav-link">
								<Link to="/eventos" className="navbar-link">
									<i class="bx bx-home-alt icon">
										<svg
											className="navbar-svg"
											width="30"
											height="30"
											viewBox="0 0 87 87"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M4.34917 47.8504H8.69926V78.3001C8.69926 83.0981 12.6013 87 17.3994 87H69.6006C74.3987 87 78.3007 83.0981 78.3007 78.3001V47.8504H82.6508C83.5111 47.8502 84.3519 47.595 85.0671 47.117C85.7823 46.639 86.3397 45.9597 86.6689 45.165C86.9981 44.3702 87.0842 43.4957 86.9165 42.6521C86.7487 41.8084 86.3345 41.0334 85.7264 40.425L46.5755 1.27541C46.1719 0.871102 45.6925 0.550346 45.1648 0.331496C44.637 0.112647 44.0713 0 43.5 0C42.9287 0 42.363 0.112647 41.8353 0.331496C41.3075 0.550346 40.8281 0.871102 40.4245 1.27541L1.27365 40.425C0.665466 41.0334 0.251309 41.8084 0.0835369 42.6521C-0.0842355 43.4957 0.00190948 44.3702 0.331081 45.165C0.660253 45.9597 1.21767 46.639 1.93287 47.117C2.64807 47.595 3.48893 47.8502 4.34917 47.8504ZM34.7998 78.3001V56.5503H52.2002V78.3001H34.7998ZM43.5 10.5017L69.6006 36.6014V56.5503L69.6049 78.3001H60.9004V56.5503C60.9004 51.7523 56.9983 47.8504 52.2002 47.8504H34.7998C30.0017 47.8504 26.0996 51.7523 26.0996 56.5503V78.3001H17.3994V36.6014L43.5 10.5017Z" />
										</svg>
									</i>
									<span class="text nav-text">Eventos</span>
									<span className="tooltip">Eventos</span>
								</Link>
							</li>

							<li class="nav-link">
								<Link to="/relatorios" className="navbar-link">
									<i class="bx bx-bell icon">
										<svg
											className="navbar-svg"
											width="30"
											height="30"
											viewBox="0 0 108 108"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M108 108V0H0V108H108ZM94.5 20.25H13.5V13.5H94.5V20.25ZM33.75 33.75V54H54C54 65.205 44.955 74.25 33.75 74.25C22.545 74.25 13.5 65.205 13.5 54C13.5 42.795 22.545 33.75 33.75 33.75ZM40.5 47.25V33.75C47.925 33.75 54 39.825 54 47.25H40.5ZM94.5 40.5H67.5V33.75H94.5V40.5ZM94.5 60.75H67.5V47.25H94.5V60.75ZM94.5 74.25H67.5V67.5H94.5V74.25ZM94.5 94.5H13.5V87.75H94.5V94.5Z" />
										</svg>
									</i>
									<span class="text nav-text">Relatórios</span>{" "}
									<span
										className={confirmarEmailAdmin ? "tooltip-dois" : "tooltip"}
									>
										{confirmarEmailAdmin ? (
											<>
												<Link className="link-navbar" to="/relatorios/atleta">
													Atleta
												</Link>
												<Link
													className="link-navbar"
													to="/relatorios/pagamento"
												>
													Pagamento
												</Link>
											</>
										) : null}

										<Link className="link-navbar" to="/relatorios/checagem">
											Checagem
										</Link>
									</span>
								</Link>
							</li>
							{confirmarEmailAdmin ? (
								<>
									{" "}
									<li class="nav-link">
										<a
											className="navbar-link"
											onClick={(e) => {
												setOpen3(true);
											}}
										>
											<i class="bx bx-bell icon">
												<svg
													width="40"
													height="40"
													viewBox="0 0 512 512"
													className="navbar-svg"
												>
													<path d="M255.233 61.009c-64.986-.549-141.156 21.77-232.77 86.17-2.124 1.136-2.856 1.77-3.663 2.576-.33 22.087.053 44.195.169 66.287 41.134 25.308 100.629 45.815 141.87 55.242-40.006 54.984-65.757 112.762-84.793 169.274l-1.916 5.685 49.586 43.473 5.185-10.524c29.919-60.708 55.189-122.456 94.832-179.1 7.43 6.226 16.197 11.95 27.217 11.128 5.455-.407 9.59-2.521 12.97-5.264l3.835.158c11.196.46 22.125-.34 32.049-3.79a49.45 49.45 0 0 0 8.133-3.678c42.982 51.203 65.056 121.754 80.294 177.52L392.286 491l57.81-57.041-2.197-5.54c-18.928-47.699-37.653-110.49-75.439-159.839 40.2-10.794 76.734-27.318 108.326-48.125 10.64-7.01 5.245-3.447 12.545-8.617l-1.523-61.74c-4.272-2.654-6.305-3.658-10.121-5.711-51.467-27.684-109.288-67.177-183.198-79.582a274.737 274.737 0 0 0-43.256-3.797zm-.246 17.928c14.062.15 27.542 1.442 40.524 3.62 67.167 11.274 121.501 46.976 172.842 75.005a503.254 503.254 0 0 1-29.192 14.488c-47.152-28.78-98.154-53.407-155.365-61.158-65.292-8.846-138.118 4.926-220.31 58.205a543.237 543.237 0 0 1-23.938-11.77c86.261-59.175 156.057-79.026 215.44-78.39zm-7.904 47.414c11.676.03 23.1.861 34.297 2.379 49.283 6.676 94.541 27.006 137.357 52.07-32.065 12.873-64.881 21.975-98.205 27.137-11.926-13.686-29.01-19.083-45.847-21.202l-6.223-.783-2.678 5.158c-4.595-1.936-9.467-3.954-13.637-5.341-4.337-1.431-8.07-2.662-12.86-2.489-20.419.738-33.221 9.61-39.604 18.715a39.044 39.044 0 0 0-3.79 6.768c-37.4-5.266-75.052-15.524-112.64-31.02 60.545-37.301 114.452-51.519 163.83-51.392zm227.695 47.941l.412 28.092c-32.966 22.502-72.037 40.144-115.548 50.844-8.333-9.135-17.5-17.615-27.637-25.235a61.999 61.999 0 0 0-1.51-3.892c49.566-8.454 97.963-25.23 144.283-49.809zM37.28 176.136c51.963 26.354 104.52 42.826 156.705 50.045.378.937.805 1.83 1.278 2.685a523.56 523.56 0 0 0-22.407 26.557c-43.916-9.01-89.474-24.845-135.705-48.79zm202.655 25.133c6.402.16 12.565 3.704 18.41 6.23-5.139 13.292-8.162 26.81-8.768 40.436l-.197-.114c-10.532-6.134-20.484-12.486-27.77-18.084-6.358-4.884-9.695-9.368-10.482-10.23 4.78-15.415 20.1-18.32 28.807-18.238zm38.837 4.468c13.956 2.53 24.72 7.36 31.807 18.955 5.731 9.378 7.181 16.926 6.49 24.577-.69 7.65-3.859 15.669-8.695 24.521-3.136 5.741-7.719 9.18-14.48 11.531-5.384 1.872-12.125 2.76-19.575 2.858-10.934-27.996-8.57-54.647 4.453-82.442zm-70.921 36.123c8.06 6.246 17.296 12.368 24.832 16.97-52.939 63.648-82.216 134.28-114.86 201.782l-22.718-19.92c23.312-67.678 56.371-135.958 112.746-198.832zm126.796 11.948c49.11 45.588 71.791 117.736 94.38 175.654l-27.58 27.215c-15.266-53.999-37.48-119.539-80.067-169.881a39.932 39.932 0 0 0 2.789-4.377c4.943-9.049 9.026-18.417 10.478-28.611zm-86.236 14.187c.743.416 1.478.812 2.219 1.223.946 6.517 2.485 13.044 4.633 19.568-3.104 2.783-6.077 4.514-5.65 4.483-1.92.143-8.738-3.091-15.14-7.893a436.419 436.419 0 0 1 13.938-17.38z" />
												</svg>
											</i>
											<span class="text nav-text">Agremiações</span>{" "}
											<span className="tooltip">Agremiações</span>
										</a>
									</li>
									<li class="nav-link">
										<Link to="/usuarios" className="navbar-link">
											<i class="bx bx-bell icon">
												<svg
													width="40"
													height="41"
													className="navbar-svg"
													viewBox="0 0 18 19"
												>
													<path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" />
												</svg>
											</i>
											<span class="text nav-text">usuarios</span>{" "}
											<span className="tooltip">usuarios</span>
										</Link>
									</li>
								</>
							) : null}
						</ul>
					</div>

					<div class="bottom-content">
						<li class="">
							<Link to="/" onClick={HandleLogout} className="navbar-link">
								<i class="bx bx-log-out icon">
									<svg
										className="navbar-svg"
										width="30"
										height="31"
										viewBox="0 0 19 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M3 16H5V18H17V2H5V4H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V16ZM5 9H12V11H5V14L0 10L5 6V9Z" />
									</svg>
								</i>
								<span class="text nav-text">Logout</span>
								<span className="tooltip">Logout</span>
							</Link>
						</li>

						<li class="mode">
							<div class="sun-moon">
								<i class="bx bx-moon icon moon">
									<svg
										className="navbar-svg"
										width="30"
										height="30"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 2V1M11 21V20M20 11H21M1 11H2M17.5 4.5L19 3M3 19L4.5 17.5M3 3L4.5 4.5M17.5 17.5L19 19"
											stroke="black"
											stroke-width="2"
											stroke-linecap="round"
										/>
										<path
											d="M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
											stroke="black"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</i>
								<i class="bx bx-sun icon sun">
									<svg
										className="navbar-svg"
										width="30"
										height="30"
										viewBox="0 0 136 136"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M71.4462 135.935C52.309 135.935 34.3528 128.517 20.8848 115.05C7.41681 101.582 1.67326e-06 83.625 1.67326e-06 64.4876C-0.00285518 51.2858 3.65259 38.3414 10.5606 27.0911C17.4686 15.8409 27.3589 6.7249 39.1339 0.754999C40.3453 0.137463 41.7117 -0.10958 43.0627 0.0447072C44.4136 0.198995 45.6892 0.747779 46.7302 1.62255C47.7712 2.49733 48.5315 3.65934 48.9161 4.96354C49.3007 6.26773 49.2927 7.65633 48.893 8.956C45.533 19.8089 45.2028 31.3738 47.938 42.4007C50.6733 53.4277 56.37 63.4976 64.4126 71.5221C70.1842 77.3366 77.0518 81.9486 84.6179 85.091C92.1839 88.2334 100.298 89.8439 108.491 89.8292C114.758 89.8339 120.99 88.8939 126.978 87.0408C128.277 86.6408 129.666 86.6326 130.97 87.0172C132.275 87.4017 133.437 88.162 134.312 89.2031C135.187 90.2442 135.735 91.52 135.89 92.8711C136.044 94.2222 135.797 95.5888 135.179 96.8002C129.209 108.575 120.093 118.466 108.843 125.374C97.5925 132.282 84.6481 135.937 71.4462 135.935ZM38.8866 11.2633C29.7558 16.8188 22.2132 24.6367 16.9885 33.9608C11.7638 43.2849 9.03375 53.7995 9.0625 64.4876C9.0625 98.8863 37.0475 126.872 71.4462 126.872C82.1343 126.901 92.649 124.171 101.973 118.946C111.297 113.721 119.115 106.179 124.671 97.048C119.365 98.2759 113.937 98.8948 108.491 98.8925C99.1082 98.9104 89.8147 97.067 81.1487 93.4689C72.4827 89.8708 64.6165 84.5896 58.0054 77.931C49.4168 69.3587 43.1544 58.7392 39.8093 47.0748C36.4641 35.4105 36.1466 23.0861 38.8866 11.265V11.2633Z" />
									</svg>
								</i>
							</div>
							<span class="mode-text text">Dark mode</span>

							<div
								className="toggle-switch "
								onClick={(e) => {
									if (dark) {
										setDark(false);
									} else {
										setDark(true);
									}
								}}
							>
								<span class="switch"></span>
							</div>
						</li>
					</div>
				</div>
			</nav>
			{open3 ? <ModalAgremiacao /> : null}
		</div>
	);
}
