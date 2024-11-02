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