import fs from 'fs';
import Mustache from 'mustache';

const template = fs.readFileSync('./index.mustache', { encoding: "utf8", flag: "r"});
let data = JSON.parse(fs.readFileSync('./config.json', { encoding: "utf8", flag: "r"}));

if(process.env.GA_TRACKING) {
    data["GA_TRACKING"] = process.env.GA_TRACKING;
}

const output = Mustache.render(template, data);

fs.writeFile('./index.html', output, () => {
    console.log("index.html has been generated");
});