const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false)

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = model('User', userSchema)//第一个参数就是集合的名称 ，这里表示用户列表


