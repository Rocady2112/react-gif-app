import React, { useEffect, useState } from "react";
import { getgifs } from "../helpers/getgifs";
import { GifGridItem } from "./gifGridItem";

// useeffect te permite ejecutar codigo de manera condicional

export const GifGrid = ({categoria}) => {

    const [images, setimages] = useState([]);
    //en este caso le decimos que se ejecute solo cuando la instruccuin 
    //es ejecutada por primera vez
    useEffect( ()=> {
        getgifs(categoria)
        .then( img => setimages(img))
    },[categoria])
    




  return <div className="padre1">
      <h3 className="categoria"> {categoria} </h3>
        <div className="padre">
            {
                images.map(img => (
                    <GifGridItem 
                    img={img}
                    key={img.id}
                    />

                ))
            }      
  </div>
  </div>
  


        

}

