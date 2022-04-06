import React, { useEffect, useState } from "react";
import { AddCategories } from "./components/addCategorie";
import { GifGrid } from "./components/gifGrid";


const GifExpertApp = ()=> {

// primero creamos las cateogiras
    const [categories, setCategories] = useState(["One punch man"]);
    

    
    return <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories} />
            <hr></hr>

    
    {
        //para mostrar las categorias
        categories.map(category=> {
            return <GifGrid categoria={category}
                      key= {category}
             />
        })
    }
    

    </>

}


export default GifExpertApp