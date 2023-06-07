import PropTypes from 'prop-types';

export default function CreditCard({ formData }) {
  return (
    <aside className='cardDeco'>
      <div className='cardFront'>
        <span>{formData.number || '$ withdrawal amount'}</span>
        <div>
          <span>{formData.name || 'Wallet Address'}</span>
          
        </div>
      </div>

   
    </aside>
  );
}

CreditCard.propTypes = {
  formData: PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
