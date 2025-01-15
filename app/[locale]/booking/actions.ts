
export async function handleSubmitTour(formData : FormData){

  let status : string
  let isSubmit : boolean

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      notre: ['positronna029@gmail.com'],
    };

    try {
      const response = await fetch('https://email-lemon-pi.vercel.app/api/oceantour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      status = 'Form submitted successfully!';
      isSubmit = true;
    } catch (error) {
      console.error('Error submitting form:', error);
      status = 'Failed to submit the form. Please try again.';
    }
  };