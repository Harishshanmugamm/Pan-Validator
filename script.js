function panc() {
    const panNumber = document.getElementById('pan').value.toUpperCase();
    const result = document.getElementById('final');
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (regex.test(panNumber)) {
        result.innerHTML = '<div class="alert alert-success">Valid PAN Number</div>';
    } else {
        result.innerHTML = '<div class="alert alert-danger">Invalid PAN Number</div>';
    }
}