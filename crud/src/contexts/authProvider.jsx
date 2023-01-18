import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { ModalContext } from "./ModalContext";

const AuthContext = React.createContext();

const firebaseConfig = {
	apiKey: "AIzaSyA9SMQodt57_Urw41jUs0d4eLJIo4bB6rQ",
	authDomain: "jiujitsu-app.firebaseapp.com",
	projectId: "jiujitsu-app",
	storageBucket: "jiujitsu-app.appspot.com",
	messagingSenderId: "994634331465",
	appId: "1:994634331465:web:e3bbd4b94267326e2f5698",
	measurementId: "G-4ZZM1BTY35",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function logout() {
		return auth.signOut();
	}
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	function resetPassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	function updateEmail(email) {
		return currentUser.updateEmail(email);
	}

	function updatePassword(password) {
		return currentUser.updatePassword(password);
	}
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
