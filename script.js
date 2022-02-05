const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api');
const path = require("path");
const app = express();

//para lançar server, precisa de app, rota e .listen


//======================================================
//Mandar Pasta public/index.html para usuário
app.use(express.static(path.join(__dirname, "/public")));
//express.static pega arquivos estáticos
//path.join para unir os paths __dirname, e "/public"
//__dirname retornar o diretório absoluto(mural), concatena com /public

app.use('/api', apiRoute);

//para garantir que uma chamada a api não busque por uma pasta chamada api:
//inverter chamada
//app.use("/api", apiRoute); //deve ser chamada primeiro
//app.use("/",express.static(path.join(__dirname, 'public')));



//=======================================================
app.listen(PORT, () => { console.log('listening on port', PORT) });
