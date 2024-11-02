class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId, outButtonId, nameInputId) {
        this.logButton = document.getElementById(buttonId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.outButton = document.getElementById(outButtonId);
        this.nameInput = document.getElementById(nameInputId); // Add name input
        this.loggedData = [];
        this.checkedInUsers = []; // Change to an array

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
        const index = this.checkedInUsers.indexOf(name); // Find index of name in array
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
        this.checkedInUsers = []; // Clear checked-in array
        this.updateCardContainer();
    }