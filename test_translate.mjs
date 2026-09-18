import { translate } from '@vitalets/google-translate-api';

async function test() {
  try {
    const res = await translate('Xin chào thế giới', { to: 'en' });
    console.log(res.text);
  } catch(e) {
    console.error(e);
  }
}
test();
