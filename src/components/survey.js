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
  const [errors, setErrors] = useState({});

  // const saveQuestion = async (e) => {
  //   e.preventDefault();

  //   if (
  //     q1 !== null &&
  //     q2 !== null &&
  //     q3 !== null &&
  //     q4 !== null &&
  //     q5 !== null &&
  //     q6 !== null &&
  //     q7 !== null &&
  //     q8 !== null &&
  //     q9 !== null &&
  //     q10 !== null
  //   ) {
  //     try {
  //       await axios.post(
  //         `https://survey-6778e-default-rtdb.firebaseio.com/responden/${id}/survey.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW`, 
  //         { q1,q2,q3,q4,q5,q6,q7,q8,q9,q10 }
  //       );
  //       setSubmitted(true);
  //     } catch (error) {
  //       console.error('Error adding survey: ', error);
  //     }
  //   }
  // };
  const saveQuestion = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // Cek setiap pertanyaan apakah sudah diisi
    if (q1 === null) newErrors.q1 = "Pertanyaan 1 wajib diisi";
    if (q2 === null) newErrors.q2 = "Pertanyaan 2 wajib diisi";
    if (q3 === null) newErrors.q3 = "Pertanyaan 3 wajib diisi";
    if (q4 === null) newErrors.q4 = "Pertanyaan 4 wajib diisi";
    if (q5 === null) newErrors.q5 = "Pertanyaan 5 wajib diisi";
    if (q6 === null) newErrors.q6 = "Pertanyaan 6 wajib diisi";
    if (q7 === null) newErrors.q7 = "Pertanyaan 7 wajib diisi";
    if (q8 === null) newErrors.q8 = "Pertanyaan 8 wajib diisi";
    if (q9 === null) newErrors.q9 = "Pertanyaan 9 wajib diisi";
    if (q10 === null) newErrors.q10 = "Pertanyaan 10 wajib diisi";

    setErrors(newErrors);

    // Jika tidak ada error, kirim data ke Firebase
    if (Object.keys(newErrors).length === 0) {
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
    <div className="full-bg-container bg-success pt-2 pb-2 align-middle">
      <div className="bg-white m-3 rounded pt-2 w-[250px] text-dark item-center">
        <h1 className="text-dark fw-bold text-center mt-3">Terima kasih atas partisipasi Anda!</h1>
        <div className="text-center pb-3 mt-3">
          <button className="btn btn-danger" onClick={() => window.location.href = 'https://laznasalirsyad.org/'}>Kembali</button>
        </div>
      </div>      
    </div>
    
  );
  }

  return (
    <div className="full-bg-container bg-success pt-2 pb-2">
      <div className="bg-dark m-3 rounded p-2">
        <form className="bg-white text-dark form2" onSubmit={saveQuestion}>
          <div className="m-4 ">
          <h1 className="fs-3 mb-3 pt-4 text-center fw-bolder">Survey Website LAZNAS Al Irsyad</h1>
            <div>
            
        <div className="mt-3">
          <div className="d-flex fw-bold">
            <label className="pe-2">1.</label>
            <label>
              Saya akan sering menggunakan/mengunjungi website LAZNAS Al-Irsyad
            </label>
          </div>
          {errors.q1 && <div className="text-danger">{errors.q1}</div>}
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
          {errors.q2 && <div className="text-danger">{errors.q2}</div>}
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
          {errors.q3 && <div className="text-danger">{errors.q3}</div>}
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
          {errors.q4 && <div className="text-danger">{errors.q4}</div>}
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
          {errors.q5 && <div className="text-danger">{errors.q5}</div>}
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
          {errors.q6 && <div className="text-danger">{errors.q6}</div>}
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
          {errors.q7 && <div className="text-danger">{errors.q7}</div>}
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
          {errors.q8 && <div className="text-danger">{errors.q8}</div>}
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
          {errors.q9 && <div className="text-danger">{errors.q9}</div>}
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
          {errors.q10 && <div className="text-danger">{errors.q10}</div>}
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
    </div>    
  );
};

export default Survey;
