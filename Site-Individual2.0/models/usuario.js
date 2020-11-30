	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idCadastro: {
			field: 'idCadastro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		NomeeSobrenome: {
			field: 'NomeeSobrenome',
			type: DataTypes.STRING,
			allowNull: false
		},
		NomeUsuario: 	{
			field: 'NomeUsuario',
			type: DataTypes.STRING,
			allowNull: false

		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		

		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
