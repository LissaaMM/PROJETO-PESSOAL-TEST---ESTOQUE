const Estoque = require("../src/estoque");

describe("Testes para gerenciamento de estoque", () => {
    let estoque;

    beforeEach(() => {
        estoque = new Estoque();
    })

    it("Deve adicionar um item ao estoque", () => {
        estoque.adicionarItem("Caneta", 10);
        expect(estoque.listarItens()).toEqual([{ nome: "Caneta", quantidade: 10 }]);
    })

    it("Deve atualizar a quantidade de um item existente", () => {
        estoque.adicionarItem("Caderno", 5)
        estoque.atualizarQuantidade("Caderno", 10)
        expect(estoque.listarItens()).toEqual([{ nome: "Caderno", quantidade: 10 }]);
    })
   
    it("Deve remover uma quantidade específica de um item", () => {
        estoque.adicionarItem("Lápis", 20);
        estoque.removerItem("Lápis", 5);
        expect(estoque.listarItens()).toEqual([{ nome: "Lápis", quantidade: 15 }]);
    })

    it("Deve remover completamente um item do estoque", () => {
        estoque.adicionarItem("Borracha", 2);
        estoque.removerItem("Borracha", 2);
        expect(estoque.listarItens()).toEqual([]);
    })

    it("Deve somar quantidade ao adicionar o mesmo item novamente", () => {
        estoque.adicionarItem("Caneta", 10);
        estoque.adicionarItem("Caneta", 5);
        expect(estoque.listarItens()).toEqual([{ nome: "Caneta", quantidade: 15 }]);
    })

    it("Deve lançar erro ao tentar remover um item inexistente", () => {
        expect(() => estoque.removerItem("Grampeador", 1)).toThrow("Item não encontrado.");
    })


    it("Deve lançar erro ao remover quantidade maior que disponível", () => {
        estoque.adicionarItem("Lápis", 10);
        expect(() => estoque.removerItem("Lápis", 15)).toThrow("Quantidade a ser removida é maior do que a disponível.");
    })

    it("Deve listar todos os itens no estoque", () => {
        estoque.adicionarItem("Caneta", 10);
        estoque.adicionarItem("Caderno", 5);
        expect(estoque.listarItens()).toEqual([
            { nome: "Caneta", quantidade: 10 },
            { nome: "Caderno", quantidade: 5 },
        ])
    })


    it("Deve lançar erro ao tentar atualizar um item inexistente", () => {
        expect(() => estoque.atualizarQuantidade("Apontador", 5)).toThrow("Item não encontrado.");
    })

    it("Deve lançar erro ao tentar atualizar com quantidade negativa", () => {
        estoque.adicionarItem("Apontador", 5);
        expect(() => estoque.atualizarQuantidade("Apontador", -1)).toThrow("A quantidade não pode ser negativa.");
    })
})