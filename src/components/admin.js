// src/components/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='full-bg-container'>
      <div className="container mt-5 bg-white rounded">
      <h1 className='text-center p-3 fs-3 text-dark fw-bolder'>Survey Results</h1>
      <div className='d-flex m-2 d-grid gap-2'>
        <div className='card'>
          <div className='card-body'> 
            <h2 className='fw-bold'>Average Score:<br/></h2>
            <p className='fs-1'>
            {averageScore.toFixed(2)}</p>
          </div>          
        </div> 
        <div className='card'>
          <div className='card-body'>
            <h2 className='fw-bold'>Total Respondents:<br/></h2>            
            <p className='fs-1'> 
              {respondentCount} </p>
          </div>
        </div>       
        
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
