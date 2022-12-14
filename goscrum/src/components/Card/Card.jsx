import { useState } from "react";

export const Card = ( { editCardStatus, deleteCard, data, data: { _id, title, createdAt, user: {userName} , description, status, importance}} ) => {

  const datetime = new Date(createdAt).toLocaleString() + "hs."
  const [showMore, setShowMore] = useState(false)


  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };


  return (
    <div className='card'>
        <div className="close" onClick={() => deleteCard(_id)}>x</div>
        <h3>{title}</h3>
        <h6>{datetime}</h6>
        <h5>{userName}</h5>
        <button className={status.toLowerCase()} onClick={(data) => editCardStatus(data)} type='button'>{status.toLowerCase()}</button>
        <button className={importance.toLowerCase()} type='button'>{importance.toLowerCase()}</button>

        <p>{ !showMore && limitString(description).string }</p>

        { showMore && <><p>{description}</p><button onClick={() => {setShowMore(false)}} type='button' >Ver menos</button></>}
        
        { !showMore && limitString(description).addButton && <button onClick={() => {setShowMore(true)}} type='button'>Ver mas</button> }

    </div>
  )
}