const endpoint = process.env.REACT_APP_SERVER;

export default {
  API_ENDPOINT: endpoint,
  HEADERS: {
    "Content-Type": "application/json",
    Authorization: `Bearer 1234`,
  },
};
