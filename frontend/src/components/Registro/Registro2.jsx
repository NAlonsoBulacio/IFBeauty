import React, { useState } from 'react';

const Registro2 = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('Submitting...');

    try {
      const formData = new FormData(event.target);
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyJPdMbxuyKYN9wtZir68ghTZCTJaqjJjFOtB85qxrLW2QGgg_XnIG3Tmswc81C6PpDWg/exec',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }
      );
      if (!response.ok) {
        throw new Error('Failed to submit the form.');
      }
      setMessage('Data submitted successfully!');
      setTimeout(() => {
        setMessage('');
      }, 2600);
      event.target.reset();
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="container m-4 pl-4" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Client Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Client Name" name="Client Name" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Email" name="Email" required />
          </div>
        </div>
        {/* Rest of the form fields go here */}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </div>
          <div className="control">
            <button className="button is-danger" type="button" onClick={() => setMessage('')}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      {message && (
        <div
          className="notification is-success"
          style={{
            margin: '20px',
            fontWeight: 'bold',
            borderRadius: '4px',
            borderColor: 'aquamarine',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Registro2;
