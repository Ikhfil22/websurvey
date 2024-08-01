import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
    

  return (
    
      <div className="full-bg-container">
          <form className="position-absolute top-50 start-50 translate-middle p-5">
            <h1 className="text-center text-dark fw-bolde">Apakah Anda <br />Menggunakan Smartphone?</h1>
            <div className="text-center mt-3">
            <div className="row justifi-content-evenly">
              <div className="col">
                <button type="button" className="btn btn-danger btn-lg w-100" onClick={() => window.location.href ='https://laznasalirsyad.org/'}>Tidak</button> 
              </div>
              <div className="col">
                <button type="button" className="btn btn-success btn-lg w-100" onClick={() => navigate('/addresponden')}>Ya</button>
              </div>
            </div>
        
            </div>            
          </form>
    </div>
    
    
      
  ); 
};

export default Home;