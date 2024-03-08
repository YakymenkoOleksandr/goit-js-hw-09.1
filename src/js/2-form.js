document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  // Load saved data from localStorage
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  // Fill form fields with saved data (if any)
  if (savedFormData) {
    feedbackForm.elements.email.value = savedFormData.email || '';
    feedbackForm.elements.message.value = savedFormData.message || '';
  }

  // Handle input event on the form (using event delegation)
  feedbackForm.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      // Save current form state to localStorage
      const formData = {
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
      };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  // Handle form submission
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get and log the form data
    const formData = {
      email: feedbackForm.elements.email.value,
      message: feedbackForm.elements.message.value,
    };

    console.log('Form data submitted:', formData);

    // Clear form fields and localStorage
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.emailInputFild');

  emailInput.addEventListener('focus', (event) => {
    if (event.target.value.trim() === '') {
      event.target.setAttribute('placeholder', 'Enter your email');
    }
  });

  emailInput.addEventListener('blur', (event) => {
    if (event.target.value.trim() === '') {
      event.target.removeAttribute('placeholder');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.querySelector('.textInputFild');

  textInput.addEventListener('focus', (event) => {
    if (event.target.value.trim() === '') {
      event.target.setAttribute('placeholder', 'Enter your text');
    }
  });

  textInput.addEventListener('blur', (event) => {
    if (event.target.value.trim() === '') {
      event.target.removeAttribute('placeholder');
    }
  });
});