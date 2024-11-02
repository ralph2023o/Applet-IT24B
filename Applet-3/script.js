class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId, outButtonId, nameInputId) {
        this.logButton = document.getElementById(buttonId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.outButton = document.getElementById(outButtonId);
        this.nameInput = document.getElementById(nameInputId); 
        this.loggedData = [];
        this.checkedInUsers = [];

        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs());
        this.outButton.addEventListener('click', () => this.OutData());
    }
    logData() {
        const name = this.nameInput.value.trim();

        if (!name) {
            alert('Please enter your name.');
            return;
        }
        if (this.checkedInUsers.includes(name)) {
            alert(`${name} is already checked in. Please check out first.`);
            return;
        }

        const timestamp = new Date().toLocaleString();
        this.loggedData.push(`${name} Check In: ${timestamp}`);
        this.checkedInUsers.push(name); 
        this.updateCardContainer();
        console.log(`${name} checked in`);
        this.nameInput.value = '';
    }
    OutData() {
        const name = this.nameInput.value.trim();

        if (!name) {
            alert('Please enter your name.');
            return;
        }
        const index = this.checkedInUsers.indexOf(name); 
        if (index === -1) {
            alert(`${name} is not checked in.`);
            return;
        }

        const timestamp = new Date().toLocaleString();
        this.loggedData.push(`${name} Check Out: ${timestamp}`);
        this.checkedInUsers.splice(index, 1); 
        this.updateCardContainer();
        console.log(`${name} checked out`);
        this.nameInput.value = '';
    }
    clearLogs() {
        this.loggedData = [];
        this.checkedInUsers = []; 
        this.updateCardContainer();
    }
    updateCardContainer() {
        this.cardContainer.innerHTML = '';

        this.loggedData.forEach(data => {
            const card = document.createElement('div');
            card.className = 'card mb-2';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">${data}</p>
                </div>
            `;
            this.cardContainer.appendChild(card);
        });

        this.displayLogCount();
    }
    countLogs() {
        return this.loggedData.length;
    }

    displayLogCount() {
        const logCount = this.countLogs();
        this.logCountElement.innerHTML = `<p>Total Logs: ${logCount}</p>`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('logButton', 'cardContainer', 'clearButton', 'logCount', 'outButton', 'nameInput'); // Add name input ID
});
