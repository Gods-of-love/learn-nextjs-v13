"use client";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();

	return (
		<>
			<span onClick={() => router.back()}>Close modal</span>
			<h1>Login</h1>
		</>
	);
};

export default Login;
