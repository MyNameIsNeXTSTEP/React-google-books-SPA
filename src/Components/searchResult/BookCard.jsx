import React, { useState } from 'react'
import Modal from './Modal'
import '../styles/BookCard.css'

function BookCard({ thumbNail, title , category, authors, description }) {
   const [modal, setModal] = useState(false)
   const toggle = () => {setModal(!modal)}

  return (
    <div className="book-card" onClick={toggle}>
      <img src = { thumbNail } alt='book img'/>
      <div className="short-description">
      <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="authors">{authors}</div>
      </div>
      <Modal
        isOpen={modal}
        onClose={toggle}
        thumbNail={thumbNail}
        title={title}
        category={category}
        authors={authors}
        description={description}
      >
      </Modal>
    </div>
  )
}

export default BookCard
