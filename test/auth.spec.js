const fs = require("fs");
const webdriverio = require("webdriverio");
const options = require("../wdio.conf");
const client = webdriverio.multiremote(options);

jest.setTimeout(60000);

beforeAll(() => {
  return client
    .init()
    .url("https://simply1993.github.io/loftschool.portfolio/dist/");
});

test('На странице есть кнопка "Авторизоваться"', () => {
  return client
    .isExisting("#btn-auth")
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .screenshot()
    .then(browsers => {
      for (const browserName in browsers) {
        fs.writeFileSync(
          `screenshots/btn-auth_${browserName}_existing.png`,
          browsers[browserName].value,
          "base64"
        );
      }
    });
});

afterAll(() => {
  return client.end();
});
