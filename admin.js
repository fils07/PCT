const myFlag = process.env.FLAG;
window.onload = function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }

    // Set default admin cookie if it doesn't exist
    if (!getCookie('admin')) {
        setCookie('admin', 'false');    
    }

    if (getCookie('admin') === 'true') {
        alert(myFlag);
    } else {
        alert('Cette page est réservée aux administrateurs !');
        //window.location.href = 'index.html';
    }
}