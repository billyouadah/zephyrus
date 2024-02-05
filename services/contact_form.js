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
  event.preventDefault();
  console.log("coucou")
  // Prevent the default form submission
    event.preventDefault();
    console.log("coucou")

  // Get the form data from the DOM
    const name = document.getElementById("name").value
    console.log(name)
    const email = document.getElementById("email").value
    console.log(email)
    const message = document.getElementById("message").value
    console.log(message)
  // Check if the form data is valid (all fields are filled in)
    // Send alert if the form data is valid and the form is submitted 
    // "Merci <Name> pour votre message! Nous vous contacterons bientôt sur l'adresse mail : <Email>. !"
    // Clear the form fields
  // Handle Error if the form data is not valid

  if ( name==='' || email=='' || message==='' ) {
    alert ("Veuillez remplir tout les formulaires") 
    }else {
      document.getElementById("name").value = ''
      document.getElementById("email").value = ''
      document.getElementById("message").value = ''
      alert (`Merci ${name} pour votre message! Nous vous contacterons bientôt sur l'adresse mail : ${email}. !`)

  }
}