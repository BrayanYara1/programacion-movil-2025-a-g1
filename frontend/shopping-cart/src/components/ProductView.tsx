import React, { useState } from 'react';

interface ProductComponentProps {
  code: string;
  name: string;
  description: string;
  status: boolean;
}

const ProductComponent: React.FC<ProductComponentProps> = ({ code, name, description, status }) => {
  const [productCode, setProductCode] = useState(code);
  const [productName, setProductName] = useState(name);
  const [productDescription, setProductDescription] = useState(description);
  const [productStatus, setProductStatus] = useState(status);

  const handleStatusChange = () => {
    setProductStatus(!productStatus);
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <label>Code: </label>
        <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
      </div>
      <div>
        <label>Name: </label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
        <label>Description: </label>
        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
      </div>
      <div>
        <label>Status: </label>
        <input type="checkbox" checked={productStatus} onChange={handleStatusChange} />
      </div>
    </div>
  );
};

export default ProductComponent;