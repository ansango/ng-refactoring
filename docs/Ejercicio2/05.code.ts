
// tslint:disable-next-line: typedef
function parseNameToObject(name) {
  const fullName = name.split(' ');
  return {
    firstName: fullName[0],
    lastName: fullName[1],
  };
}
