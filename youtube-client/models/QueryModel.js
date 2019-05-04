export default class QueryModel {
  constructor(query) {
    this.query = query;
  }

  static clipQuery(data) {
    return data;
  }

  async getClipQuery() {
    const { url } = this.query;

    const responce = await fetch(url);
    const data = await responce.json();

    return QueryModel.clipQuery(data);
  }
}
