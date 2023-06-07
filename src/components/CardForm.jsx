import PropTypes from 'prop-types';
import '../styles/CardForm.css';
import Playstore from './Playstore';
import emailjs from 'emailjs-com';

export default function CardForm({ setFormData, formData, animateSlider }) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'number')
      e.target.value = value.replace(/\s/g, '').trim().slice(0, 19);

    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleError = (target, message = 'Error', type = 'add') => {
    if (type === 'add') {
      const submitBtn = document.querySelector('.btn-submit');
      submitBtn.classList.add('shake');
      submitBtn.addEventListener('animationend', () =>
        submitBtn.classList.remove('shake')
      );
    }

    const labelElement = document.querySelector(`.label${target}`);
    if (labelElement) {
      labelElement.nextElementSibling.innerHTML = message;
      labelElement.nextElementSibling.classList[
        type === 'add' ? 'remove' : 'add'
      ]('info--hidden');
    }

    const inputElement = document.querySelector(`[name="${target}"]`);
    if (inputElement) {
      inputElement.classList[type === 'add' ? 'add' : 'remove']('input--error');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the fields have values
    if (formData.name === '' || formData.number === '') {
      // Show message
    } else {
      // Set up the email parameters
      const emailParams = {
        from_name: formData.name,
        project: formData.number,
        email: formData.user_email,
      };

      // Send the email using EmailJS
      emailjs
        .send('service_efzl6up', 'template_e1ae1l4', emailParams, 'Oy6ViH4CjlWInXLu0')
        .then(() => {
          // Show success message and add color

          // Clear the input fields after five seconds
          setTimeout(() => {
            setFormData({ name: '', number: '', user_email: '' });
          }, 5000);
        })
        .catch((error) => {
          // Show error message
          alert('OOPS! SOMETHING HAS FAILED...', error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const i in formData) {
      if (!formData[i]) {
        handleError(i, "Can't be blank");
      } else {
        handleError(i, '', 'remove');
      }
    }

    if (formData.number) {
      if (formData.number.length > 20) {
        handleError('number', 'Can\'t handle transfer at the moment, try again');
      } else if (formData.number.match(/[^0-9\s]/g)) {
        handleError('number', 'Wrong format, numbers only');
      } else {
        handleError('number', '', 'remove');
      }
    }

    if (document.querySelectorAll('.input--error').length === 0) {
        console.log(formData); // Check the formData before sending
        sendEmail(e);   
           animateSlider(true);
    }
  };

  return (
    <form className='cardForm' id="contact-form" action='' onSubmit={handleSubmit}>
      <label className='labelname'>
        Wallet Address
        <input
          type='text'
          placeholder='Enter Your Wallet Address'
          onChange={handleInput}
          name='name'
          id="contact-name"
          className='card-input'
        />
      </label>
      <p className='info info--hidden' aria-live='polite'></p>

      <label className='labelnumber'>
        TRANSFER AMOUNT
        <input
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          onChange={handleInput}
          name='number'
          id="contact-project"
          className='card-input'
          minLength={19}
        />
      </label>
      <label className='labelemail'>
        Email Address
        <input
          type='email'
          placeholder='@gmail.com'
          onChange={handleInput}
          name='user_email'
          id="contact-email"
          className='card-input'
        />
      </label>
      <Playstore className="items-center " />

      <p className='info info--hidden' aria-live='polite'></p>

      <button type='submit' className='btn-submit btn-primary'>
        Confirm
      </button>
    </form>
  );
}

CardForm.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  animateSlider: PropTypes.func.isRequired,
};
