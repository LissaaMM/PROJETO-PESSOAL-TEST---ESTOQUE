class Estoque {
    constructor() {
        this.itens = []
    }

    adicionarItem(nome, quantidade) {
        if (!nome || quantidade <= 0) {
            throw new Error("Nome do item e quantidade devem ser válidos.")
        }
        const itemExistente = this.itens.find(item => item.nome === nome)
        if (itemExistente) {
            itemExistente.quantidade += quantidade
        } else {
            this.itens.push({ nome, quantidade })
        }
    }

    removerItem(nome, quantidade) {
        const item = this.itens.find(item => item.nome === nome)
        if (!item) {
            throw new Error("Item não encontrado.")
        }
        if (quantidade > item.quantidade) {
            throw new Error("Quantidade a ser removida é maior do que a disponível.")
        }
        item.quantidade -= quantidade
        if (item.quantidade === 0) {
            this.itens = this.itens.filter(i => i.nome !== nome)
        }
    }

    listarItens() {
        return this.itens
    }

    atualizarQuantidade(nome, quantidade) {
        if (quantidade < 0) {
            throw new Error("A quantidade não pode ser negativa.")
        }
        const item = this.itens.find(item => item.nome === nome)
        if (!item) {
            throw new Error("Item não encontrado.")
        }
        item.quantidade = quantidade
    }
}
module.exports = Estoque