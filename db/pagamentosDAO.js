function PagamentosDAO(connection) {
    this._connection = connection;
}

PagamentosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from livros', callback);
}

PagamentosDAO.prototype.salva = function(pagamento, callback) {
    this._connection.query('insert into pagamentos set ?', pagamento, callback);
}

module.exports = function() {
    return PagamentosDAO;
};