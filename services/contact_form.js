console.log('contact_form.js loaded');
/*
    This file is responsible for handling the contact form.
*/

/*
    This function is responsible for handling the form submission.
    It gets the form data from the DOM and displays an alert if the form is submitted.
    TODO: Implement this function.
*/
function handleFormSubmit(event) {
  // Prevent the default form submission
  event.preventDefault();
  // Get the form data from the DOM
  const name = document.getElementById("name").value 
  const mail = document.getElementById("email").value 
  const message = document.getElementById("message").value
  // Check if the form data is valid (all fields are filled in)

  if (!name || !mail || !message) {
  return alert ("il manque des éléments dans le formulaire!")


   } else alert ("Bienvenu !")
  form.reset() 
    // Send alert if the form data is valid and the form is submitted 
    // "Merci <Name> pour votre message! Nous vous contacterons bientôt sur l'adresse mail : <Email>. !"
    // Clear the form fields
  // Handle Error if the form data is not valid
}

