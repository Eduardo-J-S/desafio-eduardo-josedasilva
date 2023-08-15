class CaixaDaLanchonete {

    constructor() {
        this.cardapio = [
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ];
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!['dinheiro', 'debito', 'credito'].includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let totalValor = 0;

        let itemExtra = [];

        for (const item of itens) {

            const [codigo, quantidade] = item.split(',');
            const menuItem = this.cardapio.find(menuItem => menuItem.codigo === codigo);
            

            if (!menuItem) {
                return 'Item inválido!';
            }

            if (quantidade <= 0) {
                return 'Quantidade inválida!';
            }

            itemExtra.push(menuItem.codigo);

            totalValor += menuItem.valor * quantidade;
        }

        if(itemExtra.includes('chantily')){
            if(!itemExtra.includes('cafe')){
                return 'Item extra não pode ser pedido sem o principal'
            }
        }
        
        if(itemExtra.includes('queijo')){
            if(!itemExtra.includes('sanduiche')){
                return 'Item extra não pode ser pedido sem o principal'
            }
        }

        if (metodoDePagamento === 'dinheiro') {
            totalValor *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            totalValor *= 1.03;
        }

        return `R$ ${totalValor.toFixed(2).replace(".", ",")}`;
    }

}

export { CaixaDaLanchonete };


