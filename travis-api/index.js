var request = require('request');
const endpoint = 'https://api.travis-ci.org/';
const headers = {
  "Travis-API-Version": 3,
  "Authorization": `token ${process.env.TRAVIS_TOKEN}`
};
const postHeaders = Object.assign({
  "Content-Type": "application/json",
  "Accept": "application/json"
}, headers);
const repoId = '19198822';
const buildRequestBody = '{"request": {"branch":"master"}}';

class TravisAPI {

  makeRequest(path) {
    return request({
      uri: `${endpoint}${path}`,
      headers: headers
    });
  }

  getBuilds() {
    return this.makeRequest(`repo/${repoId}/builds`);
  }

  startBuild() {
    return request.post({
      headers: postHeaders,
      url: `${endpoint}repo/${repoId}/requests`,
      body: buildRequestBody
    });
  }
}

module.exports = new TravisAPI();