import fs from 'fs';
import { translate } from '@vitalets/google-translate-api';
import { setTimeout } from 'timers/promises';

const enPath = 'd:/eCor/src/locales/en.json';
const enDict = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const policyData = enDict.policy || {};

async function run() {
  console.log("Starting translation process via Node.js API...");
  for (const [sectionName, section] of Object.entries(policyData)) {
    console.log(`Translating section: ${sectionName}`);
    let keys = Object.keys(section);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = section[key];
      if (value && typeof value === 'string' && value.trim().length > 0) {
        // Skip some known Vietnamese words that shouldn't be translated or have already been translated
        // We just translate everything to be safe since it's a clone of Vietnamese right now.
        try {
          const res = await translate(value, { to: 'en' });
          section[key] = res.text;
          
          if (i % 20 === 0) {
            console.log(`  Translated ${i}/${keys.length} in ${sectionName}`);
            // Save partially in case of failure
            fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
          }
          await setTimeout(100); // 100ms delay to avoid rate limiting
        } catch (err) {
          console.error(`Error translating key ${key}:`, err.message);
          await setTimeout(2000); // backoff
        }
      }
    }
  }
  
  fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
  console.log("Translation completed and saved.");
}

run();
