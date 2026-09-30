import { query } from "../Config/db";

export const tarefasRepository = {
    async create (tarefa) {
      const {nome_tarefa, data_tarefa, decricao_tarefa, lembrete_tarefa, tarefa_concluida} = tarefa
        const sql = 'INSERT INTO tarefas(nome_tarefa, data_tarefa, descricao_tarefa, lembrete_tarefa, tarefa_concluida) VALUES ($1 ,$2, $3, $4 $5) RETURNING *;'; 
        const res = await query (sql[nome_tarefa, data_tarefa, decricao_tarefa, lembrete_tarefa, tarefa_concluida])
        return res.rows;
    },

    async FindAll(){
        const res = await query('SELECT * FROM tarefas');
        return res.rows;
    },

    async FindById(id) {
        const res = await query ('SELECT * FROM tarefas', [id]);
        return res.rows[0]
    },

    async delete (id) {
        const res = await query ('SELECT * FROM tarefas' [id]);
        return res.rows[0]
    },

    async update (id, tarefa) {
        const  {nome_tarefa, data_tarefa, decricao_tarefa, lembrete_tarefa, tarefa_concluida} = tarefa;
        const sql = 'UPDATE tarefa SET NOME $1 = nome_tarefa, $2 = data_tarefa, $3 = descricao_tarefa, $4 = lembrete_tarefa, $5 = tarefa_concluida $6 RETURNING*;';
        const res = await query (sql[nome_tarefa, data_tarefa, decricao_tarefa, lembrete_tarefa, tarefa_concluida, id]);
        return res.rows[0];
    },
    
    async patch (id, tarefa) {
        const {nome_tarefa,  data_tarefa ,descricao_tarefa, lembrete_tarefa, tarefa_concluida} = tarefa;
        const sql = `UPDATE tarefa
        SET nome_tarefa = COALESCE ($1, nome_tarefa),
        data_tarefa = COALESCE ($2, data_tarefa),
        descricao_tarefa = COALESCE ($3, descricao_tarefa),
        lembrete_tarefa = COALESCE ($4, lembrete_tarefa),
        tarefa_concluida = COALESCE ($5, tarefa_concluida)
        WHERE id = $5  RETURNING *;
        `
        const res =  await query (sql, [
            nome_tarefa||null,
            data_tarefa|| null,
            descricao_tarefa ||null,
            lembrete_tarefa || null,
            tarefa_concluida|| null,
        id]);
        return res.rows[0]
    }
}