type Mahasiswa1 = {
  id: number;
  name: string;
  semester: number;
};

let Collection1: Array<Mahasiswa1>;

class Model1 {
  public insertOne(data: Mahasiswa1): boolean {
    try {
      Collection.push(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}
