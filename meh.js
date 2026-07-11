function showError(message) {

    // Remove old popup if it exists
    const oldPopup = document.getElementById("error-popup");
    if (oldPopup) {
        oldPopup.remove();
    }

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "error-popup";

    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999"
    });


    // Create popup
    const popup = document.createElement("div");

    Object.assign(popup.style, {
        background: "white",
        padding: "25px",
        width: "320px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,.3)"
    });


    popup.innerHTML = `
        <h2 style="color:#e63946;">
            ❌ Error
        </h2>

        <p>${message}</p>

        <button id="closeError"
            style="
            background:#e63946;
            color:white;
            border:none;
            padding:10px 20px;
            border-radius:6px;
            cursor:pointer;">
            OK
        </button>
    `;


    overlay.appendChild(popup);
    document.body.appendChild(overlay);


    document.getElementById("closeError").onclick = function(){
        overlay.remove();
    };
}

document.addEventListener("click", function () {

    for (let i = 0; i < 20; i++) {
        createError();
    }

});


function createError() {

    const error = document.createElement("div");

    error.innerHTML = `
        <h3>❌ Error</h3>
        <p>Something went wrong!</p>
    `;

    Object.assign(error.style, {
        position: "fixed",
        top: Math.random() * 80 + "vh",
        left: Math.random() * 80 + "vw",
        background: "#dc2626",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        textAlign: "center",
        fontFamily: "Arial",
        boxShadow: "0 10px 30px rgba(0,0,0,.5)",
        zIndex: "99999",
        animation: "shake .3s"
    });


    document.body.appendChild(error);


    setTimeout(() => {
        error.remove();
    }, 5000);
}


// Add popup animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}
`;

document.head.appendChild(style);