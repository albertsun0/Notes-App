const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')  
const errorHandlerMiddleware = require('./middleware/error-handler')
const cors = require('cors')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
//middlware
//app.use(express.static('./public'))
app.use(cors(corsOptions))
app.use(express.json())

//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//https://www.youtube.com/watch?v=qwfE7fSVaZM&t=232s

//what routes are needed ? 
// get all tasks
// post new task
// delete task
// get - edit task/more info
// route for update

// app.get /api/v1/tasks             get all tasks
// app.post /api/v1/tasks            create a new task
// app.get /api/v1/tasks/:id         get single task
// app.patch /api/v1/tasks/:id       update task
// app.delete /api/v1/tasks/:id      delete task
                    
const port = 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}..`))
    }
    catch(error){
        console.log(error)
    }
}

start()



//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/