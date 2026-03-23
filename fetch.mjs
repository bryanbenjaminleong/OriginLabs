import fs from 'fs';
async function run() {
  const r1 = await fetch('https://origin-labs.sandbloc.com/src/App.tsx');
  fs.writeFileSync('App-live.tsx', await r1.text());
  
  const r2 = await fetch('https://origin-labs.sandbloc.com/src/index.css');
  fs.writeFileSync('index-live.css', await r2.text());
}
run();
