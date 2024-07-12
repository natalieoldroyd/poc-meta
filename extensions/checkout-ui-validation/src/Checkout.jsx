import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.address-autocomplete.suggest',
  async ({signal, target}) => {
    // 1. Use the query term the buyer entered
    const {field, value} = target;

    // 2. Fetch address suggestions
    const response = await fetch("https://c7791c19-6095-4f56-b022-f74d4be6ab00.mock.pstmn.io/address/suggest", {
      method: 'POST',
    })

    // 3. Map response data to expected format
    const {result} = await response.json();
    const suggestion = {
      label: result.address.formattedAddress,
      address1: '123 Fake St',
      address2: 'Apt 2',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0G9',
      country: 'CA',
    }

    console.log(result)

    // 4. Return up to five address suggestions
    return {
      suggestions: suggestion ? [suggestion] : [],
    };
  },
);
