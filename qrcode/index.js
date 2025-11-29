import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "what is your Url :",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // ساخت QR
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));

    // ساخت فایل تکست
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
