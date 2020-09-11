// Write your Character component here

import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
 border: solid white 5px;
 width: 40%;
margin: 0 1% 1% 0;
text-shadow: 5px 5px 5px gold;



 
:hover {
    animation-name: spin;
    animation-duration: 10s; /* How long lasts 1 turn */
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: dashed gold 4px;
   
    h1 {
        font-size: 50px;
        color: red;
    }
    p {
        font-size: 30px

    }
    
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`


function Character(props) {
    return (

        <Div>
            <h1>{props.name}</h1>
            <p>{Math.trunc(props.height / 30)}ft <strong>tall</strong></p>
        </Div>



    )
}

export default Character