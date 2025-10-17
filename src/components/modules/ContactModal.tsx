'use client'
import { useState } from 'react'
import Modal from './Modal'
import { FormField } from './FormField'

interface ContactModalProps {
  isOpen: boolean
  onCloseAction: () => void
  productTitle: string
}

export const ContactModal = ({
  isOpen,
  onCloseAction,
  productTitle,
}: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            product: productTitle,
          },
          recipients: 'thechugsband@gmail.com',
          subject: `Product Inquiry: ${productTitle}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          onCloseAction()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetAndClose = () => {
    setFormData({ name: '', email: '', message: '' })
    setSubmitStatus('idle')
    onCloseAction()
  }

  return (
    <Modal firstOpen={isOpen} onClose={resetAndClose}>
      <div className="contact-modal">
        <p className="heading">Contact Us About: {productTitle}</p>

        {submitStatus === 'success' ? (
          <div className="success-message">
            <p>Thanks! We'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <FormField
                _key="contact-name"
                type="text"
                label="Name"
                required
                onChange={(e) => handleInputChange('name', e.target.value)}
                initialValue={formData.name}
              />

              <FormField
                _key="contact-email"
                type="email"
                label="Email"
                required
                onChange={(e) => handleInputChange('email', e.target.value)}
                initialValue={formData.email}
              />

              <FormField
                _key="contact-message"
                type="textarea"
                label="Message"
                required
                placeholder={`I'm interested in ${productTitle}...`}
                onChangeArea={(e) =>
                  handleInputChange('message', e.target.value)
                }
                initialValue={formData.message}
              />
            </div>

            {submitStatus === 'error' && (
              <div className="error-message">
                <p>
                  Sorry, there was an error sending your message. Please try
                  again.
                </p>
              </div>
            )}

            <div className="form-buttons">
              <button
                type="button"
                onClick={resetAndClose}
                className="button secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="button white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  )
}
