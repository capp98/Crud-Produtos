const Produto = require('../models/produto');
const status = require('http-status');
 
exports.Insert = (req, res, next) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtdEstoque = req.body.qtdEstoque;
 
    Produto.create({
        id: id,
        nome: nome,
        descricao: descricao,
        preco: preco,
        qtdEstoque: qtdEstoque,
    })
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produto.findAll()
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Produto.findByPk(id)
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtdEstoque = req.body.qtdEstoque;
 
    Produto.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.update({
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    qtdEstoque: qtdEstoque
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const id = req.params.id;
 
    Produto.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};