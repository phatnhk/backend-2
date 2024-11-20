const app = require("./app");
const config = require("./app/conifig");
const MongoDB = require("./app/utils/mongodb.utils");
async function startServer() {
    try{
        await MongoDB.connect(config.db.uri);
        console.log(`Connected to the Database ${config.db.uri}`);       
        const PORT = config.app.port;
        app.listen(PORT, () =>{
            console.log(`Server is running http://localhost:${PORT}`);
        });
    }
    catch(error){
        console.log("Cannot connect to the database!", error);
    }        
}
startServer();
