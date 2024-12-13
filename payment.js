document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get the form fields
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Validate the fields
    if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill out all fields.");
        return;
    }

    // Simple card number validation (just checking if it's numeric and 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Invalid card number. It should be 16 digits.");
        return;
    }

    // Simple expiry date validation (MM/YY format)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        alert("Invalid expiry date. Use MM/YY format.");
        return;
    }

    // Simple CVV validation (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        alert("Invalid CVV. It should be 3 digits.");
        return;
    }

    // If everything is valid, process the payment (this is just a simulation)
    alert("Payment Successful!");

    // Reset form fields
    document.getElementById("payment-form").reset();
});
