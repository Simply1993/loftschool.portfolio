const helpers = {
  setTokenTtl(response) {
    const token = response.data.token;
    const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
    localStorage.setItem("token", token);
    localStorage.setItem("ttl", ttl);
  },
  dateView(time) {
    let myTime = new Date(time * 1000).toLocaleDateString("ru", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
    return myTime;
  }
};

export default helpers;
