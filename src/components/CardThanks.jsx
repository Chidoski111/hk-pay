import PropTypes from 'prop-types';
import '../styles/CardThanks.css';
import iconComplete from '../assets/img/icon-complete.svg';

export default function CardThanks({ setFormData, animateSlider }) {
  const resetForm = () => {
    setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
    animateSlider(false);
  };

  return (
    <div className='cardThanks'>
      <img src={iconComplete} alt='' />
      <p>Thank you!</p>
      <p>We&apos;ve initiated your transfer</p>
      <button className='btn-primary' onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}

CardThanks.propTypes = {
  setFormData: PropTypes.func.isRequired,
  animateSlider: PropTypes.func.isRequired,
};
