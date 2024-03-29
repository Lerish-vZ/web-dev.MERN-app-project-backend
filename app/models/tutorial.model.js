// This Mongoose Model represents tutorials collection in MongoDB database. These fields will be generated automatically 
// for each Tutorial document: _id, title, description, published, createdAt, updatedAt, __v.

module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    );
    
  
    // If you use this app with a front-end that needs id field instead of _id, you
    //  have to override toJSON method that map default object to a custom object

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };
