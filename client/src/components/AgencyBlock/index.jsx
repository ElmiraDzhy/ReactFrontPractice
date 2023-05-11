import React from "react";
import styles from './AgencyBlock.module.scss'

function AgencyBlock(props) {
	const { title, description, linkName } = props;
	return (
		<article className={styles['agency-block']}>
			<h4 className={styles.title}>{title}</h4>

			<p className={styles.description}>{description}</p>

			<a className={styles['link-name']} href="#">{linkName}</a>
		</article>
	);
}

export default AgencyBlock;

