import React from 'react';

const BASE_URL = 'https://api.coingecko.com/api/v3/';

const generalMethod = async (endPoint, bodyParams, headers = {}) => {
  try {
    headers.Authorization = `Bearer ${process.env.token}`;
    let url = BASE_URL + endPoint;
    if (bodyParams) {
      url = `${BASE_URL + endPoint}?${new URLSearchParams(
        bodyParams,
      ).toString()}`;
    }

    const response = await fetch(url,{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      }      
    });

    const json = await response.json();
    // if (response.ok) {
    //   return Promise.resolve(json);
    // }
    // return Promise.reject(json);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const getAllCoins = async () => generalMethod(`coins/markets?vs_currency=usd`,null);

export default {
  getAllCoins,
};
