/**
 * * Middle Man
 */

type Mahasiswa = {
  id: number;
  name: string;
  semester: number;
};

let Collection: Array<Mahasiswa>;

class Model {
  public insertOne(data: Mahasiswa): boolean {
    try {
      Collection.push(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

class Controller {
  saveOne(id: number, name: string, semester: number) {
    const model = new Model();
    const tmp: Mahasiswa = {
      id,
      name,
      semester,
    };
    model.insertOne(tmp);
  }
}
