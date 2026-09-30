import { query } from "../Config/db";

export const usuariosRepository = {
    async create (usuarios) {
        const {email_usuario, senha_usuario, nome_usuario} = usuarios;
        const sql = 'INSERT INTO usuarios(email_usuario, senha_usuario, nome_usuario) VALUES ($1, $2, $3) RETURNING *;'; 
        const res = await query (sql[email_usuario,senha_usuario,nome_usuario]);
        return res.rows;
    },

    async FindAll () {
        const res = await query ('SELECT * FROM usuarios');
    return res.rows;
    },

    async FindById(id){
        const res = await query ('SELECT * FROM usuarios', [id]);
        return res.rows[0];
    },

    async delete(id) {
        const res = await query ('SELECT * FROM usuarios' [id]);
        return res.rows[0];
    },

    async update (id, usuarios){
        const {email_usuario, senha_usuario, nome_usuario} = usuarios;
        const sql = 'UPDATE usuarios SET $1 = email_usuario, $2 = senha_usuario, $3 = nome_usuario  WHERE id $4 RETURNING *;';
        const res = await query (sql[email_usuario, senha_usuario, nome_usuario, id]);
        return res.rows[0];
    },

    async patch (id, usuarios) {
        const {email_usuario, senha_usuario, nome_usuario} = usuarios;
        const sql = `UPDATE usuarios
        SET
         email_usuario = COALESCE ($1, email_usuario),
         senha_usuario = COALESCE ($2, senha_usuario),
         nome_usuario = COALESCE ($3, nome_usuario)
         WHERE id = $4 RETURNING *; `;
         const res = await query (sql, [
            email_usuario || null, 
            senha_usuario || null,
             nome_usuario || null,
            id]);
    },
}