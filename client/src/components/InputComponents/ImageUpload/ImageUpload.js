import React, { useRef } from "react";
import { useField } from "formik";

const ImageUpload = (props) => {
	const [field] = useField(props.name);
	const { uploadContainer, inputContainer, imgStyle } = props.classes;
	const imgRef = useRef(null);

  const reader = new FileReader();
  reader.onload = () => {
    imgRef.current.src = reader.result;
  };

	const onChange = (e) => {
		const file = e.target.files[0];
		const imageTypeRegexp = /image.*/;
		if (!file.type.match(imageTypeRegexp)) {
			e.target.value = "";
		} else {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className={uploadContainer}>
			<div className={inputContainer}>
				<span>Support only images (*.png, *.gif, *.jpeg)</span>
				<input
					{...field}
					id="fileInput"
					type="file"
					accept=".jpg, .png, .jpeg"
					onChange={onChange}
				/>
				<label htmlFor="fileInput">Chose file</label>
			</div>
			<img
				className={imgStyle}
				ref={imgRef}
				alt="user"
			/>
		</div>
	);
};

export default ImageUpload;

