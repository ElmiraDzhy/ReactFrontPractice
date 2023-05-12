import React, { useState } from "react";
import styles from "./DragNDropArea.module.scss";
import classNames from "classnames";
import { useField } from "formik";

function DragNDropArea(props) {
	const [field, , helpers] = useField(props.name);
	const [dragOn, setDragOn] = useState(false);
	const className = classNames(styles.container, {
		[styles.active]: dragOn,
	});

	const dragLeave = () => {
		setDragOn(false);
	};

	const dragOver = () => {
		setDragOn(true);
	};

	const inputChangeHandler = (e) => {
		setDragOn(false);
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			helpers.setValue(reader.result);
		};
	};

	const clearInput = () => {
		helpers.setValue("");
	};

	const imgPreviewLayout = (
		<>
			<img
				src={field.value}
				alt="preview"
				className={styles["img-preview"]}
			/>
			<div className={styles.wrapper}>
				<button
					onClick={clearInput}
					className={styles["btn"]}>
					Choose another
				</button>
			</div>
		</>
	);

	const inputLayout = (
		<>
			<input
				{...field}
				{...props}
				type="file"
				className={styles["drag-input"]}
				onChange={inputChangeHandler}
				onDragLeave={dragLeave}
				onDragOver={dragOver}
			/>
			<i class="fas fa-upload"></i>
			<h3>Drag&Drop files here</h3>
			or
			<label className={styles["label-btn"]}>Browse files</label>
		</>
	);

	return <div className={className}>{field.value ? imgPreviewLayout : inputLayout}</div>;
}

export default DragNDropArea;

