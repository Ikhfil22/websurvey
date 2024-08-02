import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResponden = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  
  const saveResponden = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://survey-6778e-default-rtdb.firebaseio.com/responden.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW", 
        { name, age }
      );
      const id = response.data.name;  // Mendapatkan ID unik dari Firebase
      navigate(`/survey/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="full-bg-container">
      <form className="position-absolute top-50 start-50 translate-middle p-5" onSubmit={saveResponden}>           
        <h1 className="text-center text-dark fs-1 fw-b">DAFTAR <br/> RESPONDEN</h1>            
        <div className="mb-3 mt-5">
          <label className="form-label">Nama :</label>              
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama"
            required
          />              
        </div>
        <div className="field">
          <label className="form-label">Umur</label>              
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Masukkan Umur"
            required
          />
        </div>  
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4">Lanjut</button>              
        </div>
      </form>
    </div>
  ); 
};

export default AddResponden;
