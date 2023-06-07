import emailjs from 'emailjs-com';

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactProject = document.getElementById('contact-project');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the fields have values
  if (contactName.value === '' || contactProject.value === '') {
    
    // Show message
  } else {
    // Set up the email parameters
    const emailParams = {
      from_name: contactName.value,
      project: contactProject.value,
    };

    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
      .then(() => {
        // Show success message and add color

        // Clear the input fields after five seconds
        setTimeout(() => {
          contactName.value = '';
          contactProject.value = '';
        }, 5000);
      })
      .catch((error) => {
        // Show error message
        alert('OOPS! SOMETHING HAS FAILED...', error);
      });
  }
};

contactForm.addEventListener('submit', sendEmail);
