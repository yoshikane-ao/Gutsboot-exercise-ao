import type { Pool } from "pg";

export type Task = {
    id: string;
    title: string;
    done: boolean;
    createdAt: string;
};

export async function insertTask(pool: Pool, title: string) {
    const res = await pool.query(
        `INSERT INTO tasks (title) VALUES ($1)
     RETURNING id, title, done, created_at;`,
        [title]
    );
    return toTask(res.rows[0]);
}

export async function notitleinsert(pool: Pool, title: string) {
    if (title === null || title === "") {
        return false;
    }
    const res = await pool.query(
        `INSERT INTO tasks (title) VALUES ($1)
     RETURNING id, title, done, created_at;`,
        [title]
    );
    return toTask(res.rows[0]);
}

export async function listTasks(pool: Pool): Promise<Task[]> {
    const res = await pool.query(
        `SELECT id::text AS id, title, done, created_at
     FROM tasks
     ORDER BY id;`
    );
    return res.rows.map(toTask);
}

export async function findByDone(pool: Pool, done: boolean): Promise<Task[]> {
    const res = await pool.query(
        `SELECT *
        FROM tasks
        Where done = $1`,
        [done]
    );
    return res.rows.map(toTask);
}

export async function findByTitle(pool: Pool, title: string): Promise<Task[]> {
    const res = await pool.query(
        `SELECT *
        FROM tasks
        Where title = $1`,
        [title]
    );
    return res.rows.map(toTask);
}


export async function serchTask(pool: Pool, title: string):Promise<void> {
    const res = await pool.query(
        `SELECT *
        FROM tasks
        Where title = ""`,
        [title]
    );
    return console.log(res.rows.map(toTask));
}

// export async function deleteTask(pool: Pool, title: string): Promise<Task[]> {
//     const res = await pool.query(
//         `SELECT *
//         FROM tasks
//         Where title = ""`
//         [title]
//     );
//     return res.rows.map(deleteTask)
// }


export async function updateTitle(pool: Pool, id: string, title: string) {
    await pool.query(
        `UPDATE tasks SET title = $1 WHERE id = $2;`,
        [title, id]
    );
}


export async function markDone(pool: Pool, id: string, done: boolean) {
    await pool.query(
        `UPDATE tasks SET done = $1 WHERE id = $2;`,
        [done, id]
    );
}

export async function deleteTask(pool: Pool, title: string):Promise<void> {
    await pool.query(
        `DELETE 
        FROM tasks 
        WHERE title = $1;`,
        [title]
    );
}

function toTask(row: any): Task {
    return {
        id: String(row.id),
        title: String(row.title),
        done: Boolean(row.done),
        createdAt: new Date(row.created_at).toISOString(),
    };
}