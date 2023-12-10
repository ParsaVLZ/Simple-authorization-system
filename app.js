const express = require('express');
const { NotFoundError, errorHandler } = require('./utils/error-handling');
const { Allrouters } = require('./router/index.routes');
const { default: mongoose } = require('mongoose');
const app = express();
mongoose.connect("mongodb://localhost:27017/authorization", {}).then(() => {
    console.log("connected to Mongodb");
})
.catch((err)=> console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(Allrouters );
app.use(NotFoundError);
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})