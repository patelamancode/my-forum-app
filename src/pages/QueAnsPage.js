import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { dataContext } from '../context/DataContext'

const QueAnsPage = () => {
    const {data} = useContext(dataContext)

    const navStyle = {
        display: 'inline',
        margin: '0 10px',
        textAlign: 'center',
        padding: '14px 16px',
        textdecoration: 'none'
    }
        
    

    return (
        <>
            <ul>
                {data.map((item) =>{
                    const { id, question } = item;
                    return(
                        <li key={id} style={{listStyle:'none'}}>
                            <h3>{question}</h3>
                            <div>
                                <NavLink to='' style={navStyle}>upvote</NavLink>
                                <NavLink to='' style={navStyle}>downvote</NavLink>
                                <NavLink to={`/${id}`} style={navStyle}>answer</NavLink>
                            </div>
                        </li>
                    )
                })}
            </ul>  
        </>
    )
}

export default QueAnsPage
