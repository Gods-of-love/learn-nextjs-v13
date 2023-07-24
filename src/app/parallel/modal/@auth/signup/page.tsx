"use client";
import { useRouter } from "next/navigation";

const SignUp = () => {
	const router = useRouter();

	return (
		<>
			<span onClick={() => router.back()}>Close modal</span>
			<h1>SignUp</h1>
		</>
	);
};

export default SignUp;
