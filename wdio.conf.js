const shared = {
  host: "localhost",
  port: 4444,
  path: "/wd/hub",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  maxInstances: 1
};

exports.firefox = {
  ...shared,
  desiredCapabilities: {
    browserName: "firefox"
  }
};

exports.chrome = {
  ...shared,
  desiredCapabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
        "disable-gpu",
        "no-sandbox",
        "disable-setuid-sandbox",
        "incognito",
        "disable-dev-shm-usage"
      ]
    }
  }
};

/*exports.opera = {
  ...shared,
  desiredCapabilities: {
    browserName: "opera",
    operaOptions: {
      args: [
        "disable-gpu",
        "no-sandbox",
        "disable-setuid-sandbox",
        "incognito",
        "disable-dev-shm-usage"
      ]
    }
  }
};*/
