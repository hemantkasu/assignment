const { runTests } = require('../src/testCases');

describe('API Automation Tests', function() {
    it('should run all tests', async function() {
        await runTests();
    });
});
