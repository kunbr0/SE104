import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = `${window.location.protocol}//${window.location.hostname}:8080`;

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    //req.set('authorization', `${token}`);
  }
}

const requests = { //.withCredentials()
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  login: (username, password) =>
      requests.post('/login/index.php', {email: username, password: password}),
}

const Setup = {
  status: () => requests.get('/setup/status')
}

export default {
  Auth,
  Setup,
  setToken: _token => { token = _token; }
};
