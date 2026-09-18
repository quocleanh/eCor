import fs from 'fs';
import { setTimeout } from 'timers/promises';

const enPath = 'd:/eCor/src/locales/en.json';
const enDict = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const policyData = enDict.policy || {};

async function translateText(text) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=vi|en&de=quocle.ecor@gmail.com`, {
      signal: controller.signal
    });
    const data = await res.json();
    clearTimeout(timeoutId);

    if (data && data.responseData && data.responseData.translatedText) {
      if (data.responseData.translatedText.includes('MYMEMORY WARNING')) {
        console.log("MyMemory limit hit!");
        return null;
      }
      return data.responseData.translatedText;
    }
  } catch(e) {
    console.error("Fetch error for:", text.substring(0, 20), e.message);
  }
  return null;
}

async function run() {
  console.log("Starting translation process via MyMemory API...");
  for (const [sectionName, section] of Object.entries(policyData)) {
    console.log(`Translating section: ${sectionName}`);
    let keys = Object.keys(section);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = section[key];
      
      if (value && typeof value === 'string' && value.trim().length > 0) {
        if (!/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(value)) {
          continue;
        }

        let translatedText = await translateText(value);
        if (translatedText) {
          section[key] = translatedText;
          if (i % 20 === 0) {
            console.log(`  Translated ${i}/${keys.length} in ${sectionName}`);
            fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
          }
        } else {
          // Fallback to google-translate-api if MyMemory fails or hits limit
          try {
             const { translate } = await import('@vitalets/google-translate-api');
             const res = await translate(value, { to: 'en' });
             section[key] = res.text;
             console.log(`  (Fallback) Translated ${i}/${keys.length} in ${sectionName}`);
             fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
          } catch(err) {
             console.error(`Fallback failed for key ${key}`);
             await setTimeout(2000);
          }
        }
        await setTimeout(200); 
      }
    }
  }
  
  fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
  console.log("Translation completed and saved.");
}

run();
