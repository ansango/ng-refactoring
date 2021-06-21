/**
 * * Switch Statement
 */

function getCar(brand) {
  let result;

  switch (brand) {
    case 'Ford':
      result = 'Ford';
      break;

    case 'Citroen':
      result = 'Citroen';
      break;

    default:
      result = 'No Car Selected';
  }

  return result;
}
