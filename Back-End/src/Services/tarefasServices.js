import { tarefasRepository } from "../Repository/tarefasRepository";

export const tarefasServices = {
    async getAllTarefas () {
        return await tarefasRepository.FindAll(); 
    },

    async getTarefas(id) {
        const tarefaExistente = await tarefasRepository.FindById(id);
        if(!tarefaExistente){
            throw new Error("Tarefa não encontrada. ");
        };
        return tarefaExistente;
    },
    async createTarefas(tarefaRequisicao){
        
        if(!tarefaRequisicao){
            throw new Error("Não é possível criar uma tabela vazia. ")
        }

        if(tarefaRequisicao.tarefa_concluida === null || tarefaRequisicao.tarefa_concluida === undefined){
            throw new Error(" O nome da tarefa não foi definida. ");
        };
        return await tarefasRepository.create(tarefaRequisicao);
    },
    
    async updateTarefa(id, tarefaRequisicao) {
        const tarefaExistente = await tarefasRepository.FindById(id);
        if(!tarefaExistente){
            throw new Error("A tarefa não foi encontrada.");
        };
        return await tarefasRepository.update(id,tarefaRequisicao);
    },
    
    async patchTarefa(id, tarefaRequisicao) {
        const tarefaRequisicao = await tarefasRepository.FindById(id);
        if(!tarefaExistente){
            throw new Error(" Tarefa não encontrada. ")
        }
        return await tarefasRepository.patch(id, tarefaRequisicao);

    },
    async deleteTarefa(id){
        const tarefaExistente = await tarefasRepository.FindById(id);
        if(!tarefaExistente){
            throw new Error(" Tarefa não encontrada. ");
        }
        return await tarefasRepository.delete(id, tarefaRequisicao)
    }
}