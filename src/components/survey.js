import React, { useState } from "react";
import { /*useNavigate ,*/ useParams } from "react-router-dom";
import axios from "axios";

const Survey = () => {
 // const navigate = useNavigate();
  const { id } = useParams();  // Mendapatkan ID dari parameter URL
  const [q1, setq1] = useState(null);
  const [q2, setq2] = useState(null);
  const [q3, setq3] = useState(null);
  const [q4, setq4] = useState(null);
  const [q5, setq5] = useState(null);
  const [q6, setq6] = useState(null);
  const [q7, setq7] = useState(null);
  const [q8, setq8] = useState(null);
  const [q9, setq9] = useState(null);
  const [q10, setq10] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const saveQuestion = async (e) => {
    e.preventDefault();

    if (
      q1 !== null &&
      q2 !== null &&
      q3 !== null &&
      q4 !== null &&
      q5 !== null &&
      q6 !== null &&
      q7 !== null &&
      q8 !== null &&
      q9 !== null &&
      q10 !== null
    ) {
      try {
        await axios.post(
          `https://survey-6778e-default-rtdb.firebaseio.com/responden/${id}/survey.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW`, 
          { q1,q2,q3,q4,q5,q6,q7,q8,q9,q10 }
        );
        setSubmitted(true);
      } catch (error) {
        console.error('Error adding survey: ', error);
      }
    }
  };

  if (submitted) {
    return (
    <div className="full-bg-container">
      <div className="bg-white m-3 rounded pt-2 w-[250px] text-dark item-center">
        <h1 className="text-dark fw-3 text-center mt-3">Terima kasih atas partisipasi Anda!</h1>
        <div className="text-center mb-3 mt-3">
          <button className="btn btn-danger" onClick={() => window.location.href = 'https://laznasalirsyad.org/'}>Kembali</button>
        </div>
      </div>      
    </div>
    
  );
  }

  return (
    <div className="full-bg-container bg-success pt-2 pb-2">
      <form className="bg-white m-3 rounded pt-2 w-[250px] text-dark" onSubmit={saveQuestion}>
        <div className="m-4 ">
        <h1 className="fs-3 mb-3 pt-4 text-center fw-bolder">System Usability Scale (SUS) Survey</h1>
          <div>
          
      <div className="mt-3">
        <div className="d-flex fw-bold">
          <label className="pe-2">1.</label>
          <label>
            Saya akan sering menggunakan/mengunjungi website LAZNAS Al-Irsyad
          </label>
        </div>
        
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q1" 
              value="1" 
              onChange={(e) => setq1(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q1" 
              value="2" 
              onChange={(e) => setq1(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q1" 
              value="3" 
              onChange={(e) => setq1(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q1" 
              value="4" 
              onChange={(e) => setq1(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q1" 
              value="5" 
              onChange={(e) => setq1(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
        
      </div>
      {/* pertanyaan ke 2 */}
      <div>
      <div className="d-flex fw-bold">
          <label className="pe-2">2.</label>
          <label>
            Saya merasa website LAZNAS Al-Irsyad rumit
          </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q2" 
              value="1" 
              onChange={(e) => setq2(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q2" 
              value="2" 
              onChange={(e) => setq2(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q2" 
              value="3" 
              onChange={(e) => setq2(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q2" 
              value="4" 
              onChange={(e) => setq2(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q2" 
              value="5" 
              onChange={(e) => setq2(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 3 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">3.</label>
              <label>
                Saya merasa website LAZNAS Al-Irsyad mudah digunakan
              </label>
        </div>
        <div className="ms-4">          
          <div>
            <input 
              type="radio" 
              name="q3" 
              value="1" 
              onChange={(e) => setq3(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q3" 
              value="2" 
              onChange={(e) => setq3(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q3" 
              value="3" 
              onChange={(e) => setq3(parseInt(e.target.value))}
            /> Nrtral
          </div>
          <div>
            <input 
              type="radio" 
              name="q3" 
              value="4" 
              onChange={(e) => setq3(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q3" 
              value="5" 
              onChange={(e) => setq3(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 4 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">4.</label>
              <label>
                Saya merasa membutuhkan bantuan dari orang teknisi untuk dapat menggunakan website LAZNAS Al-Irsyad
              </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q4" 
              value="1" 
              onChange={(e) => setq4(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q4" 
              value="2" 
              onChange={(e) => setq4(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q4" 
              value="3" 
              onChange={(e) => setq4(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q4" 
              value="4" 
              onChange={(e) => setq4(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q4" 
              value="5" 
              onChange={(e) => setq4(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 5 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">5.</label>
              <label>
                Saya merasa berbagai fungsi di website LAZNAS Al-Irsyad berjalan dengan baik
              </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q5" 
              value="1" 
              onChange={(e) => setq5(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q5" 
              value="2" 
              onChange={(e) => setq5(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q5" 
              value="3" 
              onChange={(e) => setq5(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q5" 
              value="4" 
              onChange={(e) => setq5(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q5" 
              value="5" 
              onChange={(e) => setq5(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 6 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">6.</label>
              <label>
                Saya merasa ada banyak hal yang tidak konsisten pada website ini
              </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q6" 
              value="1" 
              onChange={(e) => setq6(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q6" 
              value="2" 
              onChange={(e) => setq6(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q6" 
              value="3" 
              onChange={(e) => setq6(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q6" 
              value="4" 
              onChange={(e) => setq6(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q6" 
              value="5" 
              onChange={(e) => setq6(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 7 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">7.</label>
              <label>
                Saya merasa ada banyak pengguna akan mudah memahami cara penggunaan dengan cepat
              </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q7" 
              value="1" 
              onChange={(e) => setq7(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q7" 
              value="2" 
              onChange={(e) => setq7(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q7" 
              value="3" 
              onChange={(e) => setq7(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q7" 
              value="4" 
              onChange={(e) => setq7(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q7" 
              value="5" 
              onChange={(e) => setq7(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 8 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">8.</label>
          <label>
            Saya merasa website LAZNAS Al-Irsyad sulit dipahami pengguna
          </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q8" 
              value="1" 
              onChange={(e) => setq8(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q8" 
              value="2" 
              onChange={(e) => setq8(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q8" 
              value="3" 
              onChange={(e) => setq8(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q8" 
              value="4" 
              onChange={(e) => setq8(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q8" 
              value="5" 
              onChange={(e) => setq8(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 9 */}
      <div>
        <div className="d-flex fw-bold">
          <label className="pe-2">9.</label>
            <label>
              Saya sangat yakin website LAZNAS Al-Irsyad dapat digunakan dengan mudah
            </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q9" 
              value="1" 
              onChange={(e) => setq9(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q9" 
              value="2" 
              onChange={(e) => setq9(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q9" 
              value="3" 
              onChange={(e) => setq9(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q9" 
              value="4" 
              onChange={(e) => setq9(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q9" 
              value="5" 
              onChange={(e) => setq9(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
      {/* pertanyaan ke 10 */}
      <div>
        <div className="d-flex fw-bold">
         <label className="pe-2">10.</label>
            <label>
              Saya perlu memahami terlebih dahulu sebelum menggunakan website LAZNAS A-l-Irsyad
            </label>
        </div>
        <div className="ms-4">
          <div>
            <input 
              type="radio" 
              name="q10" 
              value="1" 
              onChange={(e) => setq10(parseInt(e.target.value))}
            /> Tidak Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q10" 
              value="2" 
              onChange={(e) => setq10(parseInt(e.target.value))}
            /> Kurang Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q10" 
              value="3" 
              onChange={(e) => setq10(parseInt(e.target.value))}
            /> Netral
          </div>
          <div>
            <input 
              type="radio" 
              name="q10" 
              value="4" 
              onChange={(e) => setq10(parseInt(e.target.value))}
            /> Cukup Setuju
          </div>
          <div>
            <input 
              type="radio" 
              name="q10" 
              value="5" 
              onChange={(e) => setq10(parseInt(e.target.value))}
            /> Setuju
          </div>
        </div>
      </div>
          </div>
        </div>
        <div className="pb-3 text-end me-3">
          <button className="btn btn-success p-3" type="submit">Kirim</button>
        </div>
    </form>
    </div>    
  );
};

export default Survey;


// import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const Survey = () => {
//     const navigate = useNavigate();
//     const [q1, setq1] = useState(null);
//     const [q2, setq2] = useState(null);
//     const [q3, setq3] = useState(null);
//     const [q4, setq4] = useState(null);
//     const [q5, setq5] = useState(null);
//     const [q6, setq6] = useState(null);
//     const [q7, setq7] = useState(null);
//     const [q8, setq8] = useState(null);
//     const [q9, setq9] = useState(null);
//     const [q10, setq10] = useState(null);
//     const [submitted, setSubmitted] = useState(false);

//     const saveQuestion = async (e) => {
//         e.preventDefault();

//         if (q1 !== null) {
//             try {
//                 // await addDoc(collection(db, 'responses'), {
//                 //     rating,
//                 //     timestamp: new Date()
//                 // });

//                 await axios.post("https://survey-6778e-default-rtdb.firebaseio.com/responden.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW", {
//                     q1                   
//                 });
//                 setSubmitted(true);
//             } catch (error) {
//                 console.error('Error adding survey: ', error);
//             }
//         }
//     };

//     if (submitted) {
//         return <h2>Terima kasih atas partisipasi Anda!</h2>;
//     }

//     return (
//         <form onSubmit={saveQuestion}>
//             <h1>System Usability Scale (SUS) Survey</h1>
//             <div>
//                 <label>
//                     Seberapa setuju Anda dengan pernyataan berikut: "Saya menemukan sistem ini mudah digunakan."
//                 </label>
//                 <div>
//                     <input 
//                         type="radio" 
//                         name="q1" 
//                         value="1" 
//                         onChange={(e) => setq1(parseInt(e.target.value))}
//                     /> Tidak Setuju
//                 </div>
//                 <div>
//                     <input 
//                         type="radio" 
//                         name="q1" 
//                         value="2" 
//                         onChange={(e) => setq1(parseInt(e.target.value))}
//                     /> 2
//                 </div>
//                 <div>
//                     <input 
//                         type="radio" 
//                         name="q1" 
//                         value="3" 
//                         onChange={(e) => setq1(parseInt(e.target.value))}
//                     /> 3
//                 </div>
//                 <div>
//                     <input 
//                         type="radio" 
//                         name="q1" 
//                         value="4" 
//                         onChange={(e) => setq1(parseInt(e.target.value))}
//                     /> 4
//                 </div>
//                 <div>
//                     <input 
//                         type="radio" 
//                         name="q1" 
//                         value="5" 
//                         onChange={(e) => setq1(parseInt(e.target.value))}
//                     /> Setuju
//                 </div>
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
        
//     //     try {
//     //       await axios.post("http://localhost:5000/Questions", {
                   
//     //       });
//     //       navigate("/");
//     //     } catch (error) {
//     //       console.log(error);
//     //     }
//     //   };

//     // return(
//     //     <div className="full-bg-container">
//     //         <form className="position-absolute top-50 start-50 translate-middle p-2" onSubmit={saveQuestion}>
//     //             <p className=""> Q1. Apakah anda</p>
//     //             <div>
//     //                 <input class="form-check-input" type="radio" name="q1" id="q1" value="1" checked/>
//     //                 <label class="form-check-label " for="exampleRadios1">
//     //                     Tidak Setuju
//     //                 </label>
//     //             </div>
//     //             <div>
//     //                 <input class="form-check-input" type="radio" name="q1" id="q1" value="2" checked/>
//     //                 <label class="form-check-label " for="q1">
//     //                     Cukup Tidak Setuju
//     //                 </label>
//     //             </div>
//     //             <div>
//     //                 <input class="form-check-input" type="radio" name="q1" id="q1" value="3" checked/>
//     //                 <label class="form-check-label " for="q1">
//     //                     Netral
//     //                 </label>
//     //             </div>
//     //             <div>
//     //                 <input class="form-check-input" type="radio" name="q1" id="q1" value="4" checked/>
//     //                 <label class="form-check-label " for="q1">
//     //                     Cukup Setuju
//     //                 </label>
//     //             </div>
//     //             <div>
//     //                 <input class="form-check-input" type="radio" name="q1" id="q1" value="5" checked/>
//     //                 <label class="form-check-label " for="q1">
//     //                     Setuju
//     //                 </label>
//     //             </div>                               
//     //         </form>

            
//         //     <button className="btn" onClick={()=> navigate('/')}>Kembali</button>
//         // </div>
//     );
// };
// export default Survey;
