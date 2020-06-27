import axios from 'axios';

export const getToken = async () => {
  console.log('masuk get token');
  const url = 'https://aperp-api-dev.myres.cc/api/v1/oauth/token';
  const newPayload = {
    grant_type: 'password',
    client_id: 7,
    client_secret: '7NDniuscI4542dXzaUiCTN79iIuuMNiQ0wcItmxa',
    username: 'admin',
    password: 'password',
  };
  return axios
    .post(url, newPayload)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const getData = async payload => {
  //console.log('payload: ', payload);
  const url = `https://aperp-api-dev.myres.cc/api/v1/raw-materials?page=${
    payload.page
  }`;
  const headers = {Authorization: payload.token};
  return axios
    .get(url, {headers})
    .then(response => {
      return response;
    })
    .catch(err => {
      //console.log(err);
      return err;
    });
};
