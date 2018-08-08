import React from 'react';

const ContactForm = () => (
  <form>
    <div className='form-row'>
      <div className='form-group col-md-6'>
        <label for='inputFirstName'>First Name</label>
        <input type='text' className='form-control' id='firstName' />
      </div>
      <div className='form-group col-md-6'>
        <label for='inputLastName'>Last Name</label>
        <input type='text' className='form-control' id='lastName' />
      </div>
    </div>
    <div className='form-group'>
      <label for='inputEmail'>Email</label>
      <input type='email' className='form-control' id='email' />
    </div>
    <div className='form-group'>
      <label for='comment'>Comment</label>
      <textarea className='form-control' id='comment' rows='3'/>
    </div>
  </form>
)

export default ContactForm;
