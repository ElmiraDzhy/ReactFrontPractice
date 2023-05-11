import React from "react";
import styles from "./BoxPrice.module.scss";

function BoxPrice(props) {
	const { about, name, partialRefund, price, privilege, title, color } = props;
	return (
		<article className={styles["box-wrapper"]}>
			<div
				className={styles.box}
				style={{ border: `10px solid ${color}` }}>
				<h2
					className={styles.name}
					style={{ color: `${color}` }}>
					{name}
				</h2>
				<p className={styles.title}>{title}</p>
				<p
					className={styles.price}
					style={{ color: `${color}` }}>
					US${price}
				</p>
			</div>

			{props.subMenu && (
				<div className={styles["sub-menu"]}>
					<div>Prize to Winner - ${`${props.subMenu.toWinner}`} (Included)</div>
					<div>Validation Services & Upgrades (${`${props.subMenu.validServisePrice}`} value)</div>
					{privilege && (
						<ul className={styles["privilege-list"]}>
							{privilege.map((i, index) => (
								<li key={index}>{i}</li>
							))}
						</ul>
					)}
					<div>Expected {`${props.subMenu.entries}`}+ Entries</div>
					{partialRefund && <div>Partial refund option</div>}
				</div>
			)}

			{about && <div className={styles.about}>{about}</div>}

			<button
				className={styles["start-button"]}
				style={{ backgroundColor: `${color}` }}>
				Start
			</button>
		</article>
	);
}

export default BoxPrice;

