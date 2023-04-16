const form = document.querySelector('#myForm');

form.addEventListener('submit', async (event) => {
  //event.preventDefault(); // prevent default form submit action

  const formData = new FormData(form);

  try {
    const response = await fetch('/submit-form', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      // do something after the form is submitted successfully
    } else {
      console.error('Form submission failed!');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);
  }
});