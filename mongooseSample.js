const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/curriculum', {
    useNewUrlParser: true, 
    useUnifiedTopology:true}); //path to the database

const Subject = mongoose.model('Subject', {
    code: String,
    description: String,
    students: Number,
    // terminal: Boolean
});

//find one result
// Subject.findOne({code:"CMSC22"},(err,subject) =>{
//     console.log(subject);
// })

//find an array of results
// Subject.find({},(err,subject) =>{
//     console.log(subject);
// })

// const newSubject = new Subject({code: "CMSC 21", description:"C Programming", students:40});
// //when you are going to save a new subject
// newSubject.save((err) =>{
//     if(!err){
//         console.log('Saved!');
//     }else{
//         console.log(err);
//     }

// });

//updating

// Subject.findOne({code:"CMSC 100"},(err,doc)=> {
//     doc.description = "Web App Development";
//     doc.save();
// });

// Subject.update(
//     {code: "CMSC100"},
//     {description: "Webby Stuff"},
//     (err,output) =>{
//         console.log('Output: ');
//         console.log(output);
//     }
// );

Subject.updateMany(
    {terminal: true},
    {students: 53},
    (err,result) =>{
        console.log('Result: ');
        console.log(result);
    }
)