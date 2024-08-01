import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/Respondens", {
        name,
        age,        
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="box has-background-primary-15 has-text-primary-15-invert rounded position-absolute top-50 start-50 translate-middle">
      <div className="text-center pb-2 m-3">
          <h1> <strong>DAFTAR RESPONDEN</strong></h1>
        </div>
      <div className="columns">
        
        
        <div className="column">
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Nama :</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Umur</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Masukkan Umur"
                  required
                />
              </div>
            </div>  
            <div className="text-center mt-2">
              <div className="field">
                <button type="submit" className="button is-success">
                  Lanjut
                </button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  ); 
};

export default AddUser;