import { query } from "../Config/db";

export const tarefasRepository = {
    async create () {
        const res = await query ('SELECT * FROM tarefas');
        return res.rows;
    },

    async FindAll(){
        const res = await query('SELECT * FROM tarefas');
        return res.rows;
    },

    async FindById(id) {
        const res = await query ('SELECT * FROM tarefas', [id]);
        return res.rows[0]
    }
}