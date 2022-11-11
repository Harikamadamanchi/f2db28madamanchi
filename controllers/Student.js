var Student = require('../models/Student');

// List of all Students 
exports.Student_list = async function (req, res) {
    try {
        theStudents = await Student.find();
        res.send(theStudents);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Student. 
exports.Student_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Student.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Student create on POST. 
exports.Student_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Student create POST');
};

// Handle Student delete form on DELETE. 
exports.Student_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Student delete DELETE ' + req.params.id);
};

// Handle Student update form on PUT. 
exports.Student_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Student.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Student_Name) toUpdate.Student_Name = req.body.Student_Name;
        if (req.body.Student_Class) toUpdate.Student_Class = req.body.Student_Class;
        if (req.body.Student_Rank) toUpdate.Student_Rank = req.body.Student_Rank;
        if (req.body.Student_Age) toUpdate.Student_Age = req.body.Student_Age;
        if (req.body.Student_Number) toUpdate.Student_Number = req.body.Student_Number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
exports.student_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Costume.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Student_Name)
            toUpdate.Student_Name = req.body.Student_Name;
        if (req.body.Student_Class) toUpdate.Student_Class = req.body.Student_Class;
        if (req.body.Student_Rank) toUpdate.Student_Rank = req.body.Student_Rank;
        if (req.body.Student_Age) toUpdate.Student_Age = req.body.Student_Age;
        if (req.body.Student_Number) toUpdate.Student_Number = req.body.Student_Number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
}

// VIEWS 
// Handle a show all view 
exports.Student_view_all_Page = async function (req, res) {
    try {
        theStudents = await Student.find();
        res.render('Student', { title: 'Student Search Results', stu_results: theStudents });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Student_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Student();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.Student_Name = req.body.Student_Name;
    document.Student_Class = req.body.Student_Class;
    document.Student_Rank = req.body.Student_Rank;
    document.Student_Age = req.body.Student_Age;
    document.Student_Number = req.body.Student_Number;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }




}; 