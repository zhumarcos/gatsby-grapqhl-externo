import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const LanzamientosStyle = styled.div`
  max-width: 50%;
  margin: auto;
  justify-content:center;
  h1{
    margin: 1rem;
  }
  div{     
    margin: 1rem;
    padding: 0.5rem;  
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  a{
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
  }
  span{
    font-size: 1.2rem;
    color:#7b7976;
  }
`

//El resultado de la query se almacena en la variable data que es proporcionada por Gatsby JS
export default function Home({ data }) {
  const lanzamientos = data.spacex.launchesPast.map(({ launch_date_local, id, mission_name }) => {
    const strDate = new Date(launch_date_local).toLocaleString("es", { year: 'numeric', month: 'long', day: 'numeric' })
    return <div key={id}>
      <Link to={`/lanzamiento/${id}`}>{mission_name}  <span>{strDate}</span></Link>
    </div>
  });
  return <LanzamientosStyle>
    <h1>Lanzamientos de SpaceX</h1>    
      {lanzamientos}    
  </LanzamientosStyle>
}

//Query para obtener la lista de lanzamientos de SpaceX
export const lanzamientosQuery = graphql`
  query {
    spacex {
      launchesPast {
        launch_date_local
        id
        mission_name
      }
    }
  }
`

