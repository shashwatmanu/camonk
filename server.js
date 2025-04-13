import { readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.url === '/questions') {
    const filePath = path.resolve('db.json');
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data.questions));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}
