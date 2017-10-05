import * as fs from 'fs';

export function clearJsonDB() {
  fs.writeFileSync('./db.json', JSON.stringify({ todos: [] }), 'utf-8');
}
