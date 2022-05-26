import { createServer } from 'http'
import { readFile } from 'fs'

const server = createServer((request, response) => {
  switch(request.url){
    case '/status': 
    response.writeHead(200, {
      'Content-type': 'application/json'
    });
    response.write(
      JSON.stringify({
        status: 'Okay'
      })
    );
    response.end();
    return;
    break;
    case '/sign-in': {
      const filePath = "./pages/sign-in.html";
      
      readFile((error, file)=> {
        response.writeHead(500, "Can't process HTML file.");
        response.end();
        return;
      })
      break;
    }
    case '/authenticate': {
      break;
    }
    default: {
      response.writeHead(404);
      response.end(); 
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
})