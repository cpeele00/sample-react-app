import fetch from 'isomorphic-unfetch'


export const asyncGETwithCreds = async (url) => {
  try {
    const response = await fetch(url, {
      'method': 'GET',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYyZmJmNzkxMzBmNWM1YWI3ZTAxMTZkMmM2ZDNkNiIsInN1YiI6IjViYzc3NzQwYzNhMzY4MjlkMzAwMmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5R57b33aeJjVTZlgkt1auueIBZ-t4vrVHEjSYaIevw',
      }
    });

    const json = await response.json();

    return json.results;
  } catch (error) {
    throw new Error('An error occurred retrieving data');
  }
};


export const asyncGET = async (url) => {
  try {
    const response = await fetch(url, {
      'method': 'GET'
    });

    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error('An error occurred retrieving data');
  }
};