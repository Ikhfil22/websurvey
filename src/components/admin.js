// src/components/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';



const Admin = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [averageScore, setAverageScore] = useState(0);
  const [respondentCount, setRespondentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://survey-6778e-default-rtdb.firebaseio.com/responden.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW');
        //setData(response.data);
        const fetchedData = response.data;

        console.log('Fetched Data:', fetchedData); // Debug log

        setData(fetchedData);
        let totalOddSum = 0;
        let totalEvenSum = 0;
        let respondentCount = 0;

        Object.entries(fetchedData).forEach(([key, respondent]) => {
          let oddSum = 0;
          let evenSum = 0;

          for (let i = 1; i <= 10; i++) {
            const questionValue = respondent.survey ? Object.values(respondent.survey)[0][`q${i}`] : 0;
            if (typeof questionValue === 'number' && !isNaN(questionValue)) {
              if (i % 2 === 1) { // odd
                oddSum += (questionValue - 1);
              } else { // even
                evenSum += (5 - questionValue);
              }
            }
          }

          // Adjust the sums based on your specific arithmetic requirements
          totalOddSum += oddSum;
          totalEvenSum += evenSum;
          respondentCount += 1;
        });

        setRespondentCount(respondentCount);

        const totalSUS = totalOddSum + totalEvenSum;

            const persentase = totalSUS * 2.5 ;

        // Compute the average score if needed
        const average = respondentCount > 0 ? persentase / respondentCount : 0;
        setAverageScore(average);

        

      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const wsData = Object.entries(data).map(([key, respondent]) => {
      let oddSum = 0;
      let evenSum = 0;

      for (let i = 1; i <= 10; i++) {
        const questionValue = respondent.survey ? Object.values(respondent.survey)[0][`q${i}`] : 0;
        if (typeof questionValue === 'number' && !isNaN(questionValue)) {
          if (i % 2 === 1) { // odd
            oddSum += (questionValue - 1);
          } else { // even
            evenSum += (5 - questionValue);
          }
        }
      }

      const totalScore = oddSum + evenSum;
      const persentaseSUS = totalScore * 2.5;

      return {
        Name: respondent.name,
        Age: respondent.age,
        Q1: respondent.survey ? Object.values(respondent.survey)[0].q1 : 'N/A',
        Q2: respondent.survey ? Object.values(respondent.survey)[0].q2 : 'N/A',
        Q3: respondent.survey ? Object.values(respondent.survey)[0].q3 : 'N/A',
        Q4: respondent.survey ? Object.values(respondent.survey)[0].q4 : 'N/A',
        Q5: respondent.survey ? Object.values(respondent.survey)[0].q5 : 'N/A',
        Q6: respondent.survey ? Object.values(respondent.survey)[0].q6 : 'N/A',
        Q7: respondent.survey ? Object.values(respondent.survey)[0].q7 : 'N/A',
        Q8: respondent.survey ? Object.values(respondent.survey)[0].q8 : 'N/A',
        Q9: respondent.survey ? Object.values(respondent.survey)[0].q9 : 'N/A',
        Q10: respondent.survey ? Object.values(respondent.survey)[0].q10 : 'N/A',
        OddSum: oddSum,
        EvenSum: evenSum,
        TotalScore: totalScore,
        TotalSUS: persentaseSUS.toFixed(2),
      };
    });

    const ws = XLSX.utils.json_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'SurveyResults');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'survey_results.xlsx');
  };

  const handleDelete = async (id) => {
  try {
    await axios.delete(`https://survey-6778e-default-rtdb.firebaseio.com/responden/${id}.json?auth=mN0ZLt26g73rQLmvK3o2tJG85bIx3TamO8OpJ7wW`);
    setData((prevData) => {
      const updatedData = { ...prevData };
      delete updatedData[id];
      return updatedData;
    });
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='full-bg-container'>
      <div className="container mt-5 bg-white rounded">
      <h1 className='text-center p-3 fs-1 text-dark fw-bolder'>Survey Results</h1>
      <div className='d-flex m-2 cards-container'>
        <div className='card'>
          <div className='card-body'> 
            <p className='fw-bold fs-3'>Average Score:<br/></p>
            <p className='fs-1'>
            {averageScore.toFixed(2)}</p>
          </div>          
        </div> 
        <div className='card'>
          <div className='card-body'>
            <p className='fw-bold fs-3'>Total Respondents:<br/></p>            
            <p className='fs-1'> 
              {respondentCount} </p>
          </div>
        </div>       
      </div>
      
      <div>
        <Button className='mb-3 w-50 ' onClick={handleDownload}>Download as Excel</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
            <th>Q5</th>
            <th>Q6</th>
            <th>Q7</th>
            <th>Q8</th>
            <th>Q9</th>
            <th>Q10</th>
            <th>Odd Sum</th>
            <th>Even Sum</th>
            <th>Score</th>
            <th>Total * 2.5</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(data).map(([key, respondent]) => {
            let oddSum = 0;
            let evenSum = 0;

            for (let i = 1; i <= 10; i++) {
              const questionValue = respondent.survey ? Object.values(respondent.survey)[0][`q${i}`] : 0;
              if (typeof questionValue === 'number' && !isNaN(questionValue)) {
                if (i % 2 === 1) { // odd
                  oddSum += (questionValue - 1);
                } else { // even
                  evenSum += (5 - questionValue);
                }
              }
            }

            const totalScore = oddSum + evenSum;

            const persentaseSUS = totalScore * 2.5 ;

            return (
            <tr key={key}>
              <td>{respondent.name}</td>
              <td>{respondent.age}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q1 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q2 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q3 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q4 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q5 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q6 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q7 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q8 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q9 : 'N/A'}</td>
              <td>{respondent.survey ? Object.values(respondent.survey)[0].q10 : 'N/A'}</td>
              <td>{oddSum}</td>
                <td>{evenSum}</td>
                <td>{totalScore}</td>
                <td>{persentaseSUS.toFixed(2)}</td>
                <td>
          <Button variant="danger" onClick={() => handleDelete(key)}>
            Delete
          </Button>
        </td>
            </tr>
           );
          })}
        </tbody>
      </Table>
    </div>
    </div>
    
  );
};

export default Admin;
