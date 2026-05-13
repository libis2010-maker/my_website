app.post("/contant", (req, res) => {
    const { username, email,firstname,lastname,phonenumber,Massege } = req.body;
    console.log("שם משתמש:", username);
    console.log("אימייל:", email);
    console.log("שם ראשון:", firstname);
    console.log("שם שני:", lastname);
    console.log(" מספר טלפון:", phonenumber);
    console.log(" הודעה:", Massege);


    res.send("הנתונים התקבלו בהצלחה!");
});


// הפעלת השרת
app.listen(port, () => {
    console.log(` server is running on: http://localhost:${port}`);
});
