import { query } from "../Config/db";

export const  usuariosRepository = {
    async create () {
        const res = await query ('SELECT * FROM usuarios');
        return res.rows;
    },

    async FindAll () {
        const res = await query ('SELECT * FROM usuarios');
    return res.rows;
    },

    async FindById(id){
        const res = await query ('SELECT *FROM usuarios', [id]);
        return res.rows[0];
    },
    
}