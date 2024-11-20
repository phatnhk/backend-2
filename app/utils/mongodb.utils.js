const { MongoClient } = require("mongodb");
class MongoDB {
  static connect = async (uri) => {
    if (this.Client) return this.Client;
    this.Client = await MongoClient.connect(uri);
    return this.Client;
  };
}
module.exports = MongoDB;
