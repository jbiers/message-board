import { query } from './db.js';
import { emptyOrRows } from '../utils/emptyOrRows.js';

export async function getMessages() {
    const rows = await query(
        `SELECT id, messageText, username, creationDate
        FROM messages;`
    );
    
    const data = emptyOrRows(rows);

    return data;
}
