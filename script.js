document.addEventListener("DOMContentLoaded", function () {
    //ressursene som skal vises, hentes til containeren 
    const resourcesContainer = document.getElementById("resourcesContainer");

    // henter alle knappene i menyen
    const buttons = document.querySelectorAll("nav button");

    // Funksjon for å vise ressurser etter valgt kategori
    function displayResources(category) {

        resourcesContainer.innerHTML = "";

        // Filtrerer ressursene for å hente bare de som matcher samme kategori
        const filteredResources = resources
            .filter(resource => resource.category === category) // Velger ressurser fra riktig kategori
            .map(resource => { // Sender HTML for hver ressurs i kategorien
                return `
                    <article>
                        <h2>${resource.category}</h2> <!-- Viser kategoriens navn -->
                        <p>${resource.text}</p> <!-- Beskrivelse av kategorien -->
                        <ul>
                            ${resource.sources.map(source => ` <!-- Mapper over kildene for kategorien -->
                                <li><a href="${source.url}" target="_blank">${source.title}</a></li> <!-- Klikkbare linker -->
                            `).join("")} <!-- Slår sammen HTML-strenger for hver kilde -->
                        </ul>
                    </article>
                `;
            }).join(""); // Slår sammen alle artiklene til én HTML-streng

        // Oppdaterer containeren med filtrerte ressurser
        resourcesContainer.innerHTML = filteredResources;
    }


    // Legger til klikk-hendelser for alle knappene i menyen
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            //this, altså knappen som blir trykket på, henter kategorien fra "data-category"-attributtet og retunerer verdien HTML
            displayResources(this.dataset.category);
        });
    });
});
``

