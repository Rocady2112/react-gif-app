import React from 'react'

export const GifGridItem = ({img,key}) => {
    const {id,title,url} = img

    return <div className='card animate__animated animate__fadeInDown'>
        <img src={url} alt={title} />
        <p> { title } </p>
    </div>
  
}
