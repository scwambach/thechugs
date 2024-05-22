import React, { useEffect, useState } from 'react'

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
              <div className="modal-container">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal
