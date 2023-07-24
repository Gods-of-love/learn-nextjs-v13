"use client";
import { useSelectedLayoutSegment } from "next/navigation";

const ModalLayout = (props: {
	children: React.ReactNode;
	login: React.ReactNode;
	signup: React.ReactNode;
}) => {
	const segment = useSelectedLayoutSegment();

	return (
		<>
			{props.children}
			{segment === "login" ? props.login : props.signup}
		</>
	);
};

export default ModalLayout;
