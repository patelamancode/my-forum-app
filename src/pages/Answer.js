import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../context/DataContext';

const Answer = () => {

    const {queID} = useParams();
    const {data} = useContext(dataContext);
   
    const showAnswer = (inputData, selectedId) =>{
        const res = inputData.filter(({id}) => (id === +selectedId))
        return res
    }
    const resultedAns = showAnswer(data, queID);
   

  return (
    <div>
      <h1>Answer page</h1>
      {resultedAns.map(item => <p>{item.answer}</p>)}
    </div>
  )
}

export default Answer
