function showRsvpForm() {
    const form = document.getElementById('rsvp-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitRsvp() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (name && contact) {
        alert(`Thank you, ${name}! Your RSVP has been received.`);
        document.getElementById('rsvp-form').style.display = 'none';
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}
function submitRsvp() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (name && contact) {
        alert(`Thank you, ${name}! Your RSVP has been received.`);
        console.log(`RSVP Submitted: Name: ${name}, Contact: ${contact}`);
        // Optionally, process the RSVP (e.g., send it to a server)
    } else {
        alert('Please fill out all fields.');
    }
}
function submitRsvp() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (name && contact) {
        fetch('/submit-rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, contact }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Thank you, ${name}! Your RSVP has been received.`);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill out all fields.');
    }
}
