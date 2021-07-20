import React, { memo } from 'react'
import ReactDom from 'react-dom'
import '../styles/Modal.css'

function Modal({ isOpen, onClose, thumbNail, title, category, authors, description }) {
  if (!isOpen) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-detailed-view">
        <div className="image-table">
          <img src = { thumbNail } alt='book img'/>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="info">
          <div className="category">{category}</div>
          <div className="title">{title}</div>
          <div className="authors">{authors}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default memo(Modal)
