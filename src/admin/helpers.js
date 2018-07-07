const helpers = {
  setTokenTtl(response) {
    const token = response.data.token;
    const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
    localStorage.setItem("token", token);
    localStorage.setItem("ttl", ttl);
  }
};

export default helpers;
