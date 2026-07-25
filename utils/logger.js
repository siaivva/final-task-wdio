class Logger {
    static logProductCheck(productName) {
        console.log(`[PRODUCT CHECK] Verifying: "${productName}"`);
    }

    static logComparison(label, inventoryValue, detailsValue) {
        console.log(`[COMPARE] ${label} — Inventory: "${inventoryValue}" | Details: "${detailsValue}"`);
    }

    static logSuccess(message) {
        console.log(`[SUCCESS] ${message}`);
    }

    static logInfo(message) {
        console.log(`[INFO] ${message}`);
    }
}

module.exports = Logger;