const cheerio = require("cheerio");
const URL = "https://www.codewars.com/users/leaderboard";

const request = require("request");

function solution() {
  return new Promise((resolve, reject) => {
    let userlist = { position: {} };
    request(
      {
        method: "GET",
        url: URL,
      },
      (err, res, body) => {
        if (err) reject(new Error(err));

        let $ = cheerio.load(body);

        let table = $("tr");
        let i = 1;

        for (let key of Object.values(table)) {
          if (
            key &&
            key.attribs &&
            key.attribs["data-username"] !== undefined
          ) {
            const clan = key.children[2].children[0];
            userlist.position[i] = {
              name: key.attribs["data-username"],
              clan: clan ? clan.data : "",
              honor: parseInt(
                key.children[3].children[0].data.replace(",", "")
              ),
            };
            i++;
          }
        }

        resolve(userlist);
      }
    );
  });
}

solution().then((res) => console.log(res.position[1]));
