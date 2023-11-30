import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', mustacheExpress());
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

console.log(path.join(__dirname, '../public'));

server.use(express.static((path.join(__dirname, '../public'))));


server.use('/',mainRoutes);


server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada');
})

server.listen(process.env.PORT);