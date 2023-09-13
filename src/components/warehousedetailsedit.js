// WarehouseDetailEdit.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editWarehouse } from '../actions/warehouseaction';
import './WarehouseDetailEdit.css'; 

const WarehouseDetailEdit = () => {
  const { id } = useParams();
  const warehouse = useSelector((state) =>
    state.warehouses.find((wh) => wh.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const [editableFields, setEditableFields] = useState({ ...warehouse });

  const handleEdit = () => {
    // Implement edit functionality and dispatch the updated data
    dispatch(editWarehouse(id, editableFields));
  };

  return (
    <div>
      <h2>Warehouse Details</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={editableFields.name}
          onChange={(e) =>
            setEditableFields({ ...editableFields, name: e.target.value })
          }
        />
        <button onClick={handleEdit}>Edit Name</button>
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={editableFields.city}
          onChange={(e) =>
            setEditableFields({ ...editableFields, city: e.target.value })
          }
        />
        <button onClick={handleEdit}>Edit City</button>
      </div>
      <div>
        <label>Space Available:</label>
        <input
          type="number"
          value={editableFields.space_available}
          onChange={(e) =>
            setEditableFields({
              ...editableFields,
              space_available: parseInt(e.target.value),
            })
          }
        />
        <button onClick={handleEdit}>Edit Space Available</button>
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={editableFields.type}
          onChange={(e) =>
            setEditableFields({ ...editableFields, type: e.target.value })
          }
        />
        <button onClick={handleEdit}>Edit Type</button>
      </div>
      <div>
        <label>Cluster:</label>
        <input
          type="text"
          value={editableFields.cluster}
          onChange={(e) =>
            setEditableFields({ ...editableFields, cluster: e.target.value })
          }
        />
        <button onClick={handleEdit}>Edit Cluster</button>
      </div>
      <div>
        <label>Is Registered:</label>
        <input
          type="checkbox"
          checked={editableFields.is_registered}
          onChange={(e) =>
            setEditableFields({
              ...editableFields,
              is_registered: e.target.checked,
            })
          }
        />
        <button onClick={handleEdit}>Toggle Is Registered</button>
      </div>
      <div>
        <label>Is Live:</label>
        <input
          type="checkbox"
          checked={editableFields.is_live}
          onChange={(e) =>
            setEditableFields({
              ...editableFields,
              is_live: e.target.checked,
            })
          }
        />
        <button onClick={handleEdit}>Toggle Is Live</button>
      </div>
    </div>
  );
};

export default WarehouseDetailEdit;
