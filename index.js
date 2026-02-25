

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let users = require('./userScheema');

app.use(express.json());



//db connection
mongoose.connect('mongodb://127.0.0.1:27017/users_db')
    .then(() => console.log("connected db success"))
    .catch(err => console.log(err))



//apis
app.post('/create', async (req, res) => {
    try {
        let creatreUser = await users.create(req.body);
        res.status(201).json(creatreUser);
    } catch (error) {
        console.log("err", error);
    }
})

app.get('/fetchData', async (req, res) => {
    try {
        let findAllData = await users.find();
        res.json(findAllData);
    } catch (error) {
        console.log("error", error);
    }
})

// app.get('/fetchDetailsByID', async (req, res) => {
//     let fetchByID = await users.findById(req.body._id);
//     if (!fetchByID) {
//         return res.status(404).json({ message: "User not found" });
//     }
//     res.json(fetchByID);
// })

// app.patch('/updateByName', async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     const updatedUser = await users.findOneAndUpdate(
//       { name },
//       { $set: { email } },
//       { new: true, runValidators: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// app.put('/updateByEmail', async (req, res) => {
//   try {
//     const { email } = req.body;

//     const updatedUser = await users.findOneAndUpdate(
//       { email },
//       req.body,
//       {
//         new: true,
//         overwrite: true,
//         runValidators: true
//       }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// app.delete('/deleteByID', async (req, res) => {
//     let deleteID = await users.findByIdAndDelete(req.body.id);
//     res.json(`ID deleted succesfully ${deleteID}`);
// })

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});