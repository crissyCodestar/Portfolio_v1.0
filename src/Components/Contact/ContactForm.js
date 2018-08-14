import React from 'react';
import {Button} from '../Button';

const ContactForm = () => (
  <form>
    <div className='form-row justify-content-center'>
      <div className='form-group col-10 col-sm-5'>
        <label for='inputFirstName'>First Name</label>
        <input type='text' className='form-control' id='firstName' />
      </div>
      <div className='form-group col-10 col-sm-5'>
        <label for='inputLastName'>Last Name</label>
        <input type='text' className='form-control' id='lastName' />
      </div>
    </div>
    <div className='form-row justify-content-center'>
      <div className='form-group col-10 col-sm-10'>
        <label for='inputEmail'>Email</label>
        <input type='email' className='form-control' id='email' />
      </div>
      <div className='form-group col-10 col-sm-10'>
        <label for='comment'>Comment</label>
        <textarea className='form-control' id='comment' rows='3'/>
      </div>
    </div>
    <div className='form-row justify-content-center'>
      <Button text= 'Submit' type='submit' colorValue='primary_gradient'/>
    </div>
  </form>
)

export default ContactForm;
