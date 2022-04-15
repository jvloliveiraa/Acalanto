-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create database Acalanto_Banco;
drop database Acalanto_Banco;
use Acalanto_Banco;

create table empresa (
	idEmpresa int primary key auto_increment,
	nomeEmpresa varchar (90),
	CNPJ char (15),
    CEP char (10),
	logradouro varchar (90),
	bairro varchar (90),
    cidade varchar (90),
    estado char(2),
	telefone char (14),
	complemento VARCHAR(90)
);
select * from empresa;
desc empresa;
-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
create table refrigerador (
	idRefrigerador int primary key auto_increment,
	tipoRefrigerador varchar (90),
    temperaturaIdeal varchar (90),
    localizacao varchar (90)
);

-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

create table usuario (
	idUsuario int primary key auto_increment,
	nomeUsuario varchar (90),
    sobrenome varchar (90),
	email varchar (90) unique,
    senha varchar (90),
    fkEmpresa int,
    fkRefrigerador int,
    foreign key (fkEmpresa) references empresa(idEmpresa),
    foreign key (fkRefrigerador) references Refrigerador(idRefrigerador)
);

-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

create table Sensor (
	idSensor int primary key auto_increment,
    tipoSensor varchar (45),
	temperaturaIdeal double,
    fkRefrigerador int,
    foreign key (fkRefrigerador) references Refrigerador(idRefrigerador)
);

-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

create table Dados (
	idDados int auto_increment,
	temperaturaAtual double,
    dtHora  datetime default current_timestamp,
	fkSensor int,
	primary key (idDados, fkSensor),
    foreign key (fkSensor) references Sensor(idSensor)
);




/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


