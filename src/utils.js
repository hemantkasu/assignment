const assert = require('chai').assert;

function assertResponse(response, expectedStatus, expectedData) {
    assert.equal(response.status, expectedStatus);
    assert.deepEqual(response.data, expectedData);
}

module.exports = { assertResponse };
