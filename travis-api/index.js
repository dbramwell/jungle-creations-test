var request = require('request');
const endpoint = 'https://api.travis-ci.org/';
const headers = {
  "Travis-API-Version": 3,
  "Authorization": `token ${process.env.TRAVIS_TOKEN}`
};
const repoId = '19198822';

class TravisAPI {

  makeRequest(path) {
    return request({
      uri: `${endpoint}${path}`,
      headers: headers
    });
  }

  getBuilds() {
    return this.makeRequest(`repo/${repoId}/builds`);
  };
}

module.exports = new TravisAPI();