function checkName() {
    const validNames = ["Eli", "Éli", "Elizabeth", "Élizabeth", "Elisabeth", "Élisabeth", "Elisa", "Éliza", "Beth", "Betty"];
    const name = document.getElementById("nameInput").value;
    const responseDiv = document.getElementById("response");

    if (validNames.includes(name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        responseDiv.innerHTML = `
            <img src="https://gifsec.com/wp-content/uploads/2022/12/joey-how-you-doin-gif-1.gif" alt="Accepted">
            <p class="large-text">Coffee date au Café Chat l'heureux ? :)</p>
            <button class="large yes" onclick="handleResponse(true)">Oui</button>
            <button class="large no" onclick="handleResponse(false)">Non</button>
        `;
        // Ajouter l'écouteur pour désactiver le bouton "Non" au survol
        document.querySelector('.large.no').addEventListener('mouseenter', function() {
            this.disabled = true; // Désactive le bouton "Non" lors du survol
        });
    } else {
        responseDiv.innerHTML = '<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJxMmFuYjloODNocmdhdDNyZjZ6NGF2MWV5eHh5ZmF1djk0NHQ5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XymaJlgorUL8vOfF88/giphy.gif" alt="Refus">';
    }
}

function handleResponse(accepted) {
    const responseDiv = document.getElementById("response");
    if (accepted) {
        responseDiv.innerHTML = `<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWN6c244c25jamh6cG52Mjltb3hveDVjcGx0OGZ4dTZta2xrMnVteiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iZf4Xu65CDN9DIt19n/giphy.gif" alt="Accepted">
                                <p class="large-text">Can't wait 🤭</p>`;
    } else {
        responseDiv.innerHTML = '<p class="large-text">:(</p>';
    }
}

// Ajout de la fonctionnalité pour rendre le bouton "Non" dynamique
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.querySelector('.large.no');
    if (noButton) {
        noButton.addEventListener('mouseenter', () => {
            noButton.style.setProperty('--randomX', Math.random().toFixed(2));
            noButton.style.setProperty('--randomY', Math.random().toFixed(2));
            noButton.disabled = true; // Désactive également ici au cas où le bouton est recréé
        });
    }
});
