import React, { useState } from "react";
import styles from "./DragNDropArea.module.scss";
import classNames from "classnames";

function DragNDropArea() {
	const [dragOn, setDragOn] = useState(false);

	const className = classNames(styles.container, {
		[styles.active]: dragOn,
	});

	const drag = () => {
		console.log("drag");
	};

	const dragStart = () => {
		console.log("dragstart");
	};

	const dragEnd = () => {
		console.log("dragEnd");
	};

	const dragEnter = () => {
		console.log("dragEnter");
	};

	const dragLeave = () => {
		console.log("dragLeave");
	};

	const dragOver = () => {
		console.log("dragOver");
	};

	const drop = () => {
		console.log("drop");
	};

	return (
		<div
			className={className}
			onDrag={drag}
			onDragStart={dragStart}
			onDragEnd={dragEnd}
			onDragEnter={dragEnter}
			onDragLeave={dragLeave}
			onDragOver={dragOver}
			onDrop={drop}>
			<i class="fas fa-upload"></i>
			<h3>Drag&Drop files here</h3>
			or
			<ladel className={styles["label-btn"]}>Browse files</ladel>
		</div>
	);
}

export default DragNDropArea;

