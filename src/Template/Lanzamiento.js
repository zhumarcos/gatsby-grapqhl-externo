import { Link } from 'gatsby';
import React from 'react'
import styled from "styled-components"

const LanzamientoStyle = styled.div`
  max-width: 50%;
  margin: auto;
  justify-content:center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1.5rem;
  label{
      font-weight: bold;
  }
`

const ImgStyle = styled.div`    
    img{
        padding: 0.5rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`

export default function Lanzamiento({ pageContext }) {    
    return <LanzamientoStyle>
        <Link to="/">Regresar</Link>
        <h1>{pageContext.mission_name}</h1>
        <section>
            <div>
                <div>
                    <label>Fecha de Lanzamiento:</label> <span>{new Date(pageContext.launch_date_local).toLocaleString("es", { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>
                </div>
                <div>
                    <label>Lugar de Lanzamiento:</label> <span>{pageContext.launch_site.site_name}</span>
                </div>
                <div>
                    <label>Resultado del lanzamiento:</label> <span>{pageContext.launch_success ? "Exitoso" : "Fallido"}</span>
                </div>
            </div>
            <div>
                <p>{pageContext.details}</p>
            </div>
            <ImgStyle>
                {
                    pageContext.links.flickr_images.map((image, i) => {
                        return <img src={image} key={`i-${i}`} style={{ maxWidth: "250px", width: "100%" }} />
                    })
                }
            </ImgStyle>
        </section>
    </LanzamientoStyle>
}
