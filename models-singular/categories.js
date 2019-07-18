'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return this.schema.find({ _id });
    }
    else {
      return this.schema.find({});
    }
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
