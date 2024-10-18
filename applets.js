class AppletCard {
    constructor(title,icon, description, link) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.link = link;
    }
    createCard() {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card applet-card';
        cardDiv.innerHTML = `
            <div class="card"  data-bs-toggle="tooltip" title="${this.description}">
                <a href="${this.link}" style="text-decoration: none; color: inherit;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img src="${this.icon}" class="applet-icon rounded float-start">
                            </div>
                            <div class="col-8">
                                <h5 class="card-title">${this.title}</h5>
                                <p class="card-text"</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        return cardDiv;
    }
}
class AppletRenderer {
    constructor(containerId, searchInputId) {
        this.container = document.getElementById(containerId);
        this.searchInput = document.getElementById(searchInputId);
        this.appletData = [];
        this.filteredData = [];
        this.searchInput.addEventListener('input', () => this.filterApplets());
    }
    fetchAppletData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.appletData = data;
                this.filteredData = data;
                this.renderApplets(this.filteredData);
            })
            .catch(error => console.error('Error loading applet data:', error));
    }
