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