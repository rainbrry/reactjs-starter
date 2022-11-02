import React from "react";

export default function Modal({
	open,
	setOpen,
	modalWitdh,
	btnModal,
	modalTitle,
	children,
}) {
	const handleModal = () => setOpen(!open);

	return (
		<div>
			<button
				onClick={handleModal}
				htmlFor="my-modal-3"
				className="btn modal-button"
			>
				{btnModal}
			</button>

			<div className={`modal ${open ? "modal-open" : ""}`}>
				<div className={`modal-box relative ${modalWitdh}`}>
					<button
						onClick={handleModal}
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</button>
					<h3 className="text-lg font-bold">{modalTitle}</h3>
					<p className="py-4">{children}</p>
				</div>
			</div>
		</div>
	);
}
