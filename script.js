function openBookingForm(serviceName) {
    document.getElementById("serviceType").value = serviceName;
    document.getElementById("bookingFormContainer").classList.add("active");
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function closeBookingForm() {
    document.getElementById("bookingFormContainer").classList.remove("active");
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const service = document.getElementById("serviceType").value;
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("phoneNumber").value;
    const date = document.getElementById("bookingDate").value;
    const info = document.getElementById("additionalInfo").value;

    // For demonstration: Log data to console
    console.log("Booking Received:");
    console.log("Service:", service);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Date:", date);
    console.log("Info:", info);

    alert("Thank you! Your booking for " + service + " has been received.");

    document.getElementById("bookingForm").reset();
    closeBookingForm();
});
