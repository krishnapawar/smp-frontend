import { useState, useRef } from "react";
const ImagePreview = () => {
  const [previewSrc, setPreviewSrc] = useState('');
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc('');
    }
  };
  const openFileDialog =()=> {inputRef.current.click()};

  return (
    <div>
      
      <input
        type="file"
        className="form-control d-none"
        id="profileImage"
        name="profileImage"
        accept="image/*"
        onChange={handleImageChange}
        ref={inputRef}
      />
      <img
        id="profile-image-preview"
        src={previewSrc || "https://placehold.co/400"}
        alt="Profile Image Preview"
        style={{ maxWidth: '120px', maxHeight: '120px', marginBottom: '10px', cursor: 'pointer' }}
        onClick={openFileDialog}
      />
      <div>
      <h5 className="form-label">
        Profile Image
      </h5>
      </div>
      
    </div>
  );
};

export default ImagePreview;
