import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({
  children,
  onClose,
  firstOpen = false,
}: {
  children: any
  onClose?: () => void
  firstOpen?: boolean
}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(firstOpen)
  }, [firstOpen])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        closeModal()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [open])

  const closeModal = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  return (
    <>
      {open && (
        <>
          <div className="modal-bg">
            <div className="modal-close" onClick={() => closeModal()}></div>
            <div className="modal">
              <button className="modal-close-button" onClick={closeModal}>
                <AiOutlineClose size={24} />
                <span className="sr-only">Close</span>
              </button>
              <div className="modal-container">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal
