-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create database acalantoBD;

use acalantoBD;

CREATE TABLE empresa (
  idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(90),
  CNPJ CHAR(18),
  CEP CHAR(9),
  estado CHAR(2),
  cidade VARCHAR(90),
  bairro VARCHAR(90),
  logradouro VARCHAR(90),
  complemento VARCHAR(90),
  telefone_fixo VARCHAR(14)
  );
  
desc empresa;

insert into empresa values
	(null, "Hospital Israelita Albert Einstein", "123456789012345", "123456759", "SP", "São Paulo", "Vila Mascote", "Rua benedito de Sá", "53", "11 2338-5616"),
	(null, "Hospital Cruz Azul", "122476787015841", "123456789", "SP", "São Paulo", "Cambuci", "Av. Lins de Vasconcelos", "356", '11 94828-6398'),
	(null, "Hospital Santa Magiore", "123456254912435", "123456789", "SP", "São Paulo", "Brás", "Rua dos Lavapés","1005", '11 94431-8963'),
	(null, "Hospital Cema", "123445318812388", "456379289", "SP", "São Paulo", "Belém", "Rua Padre Adelino","28", '11 97895-2536'),
    (null, "Hospital Chácara Cruzeiro do Sul", "432156789054321", "359127822", "SP", "São Paulo", "Cangaíba", "AV. Governador Carvalho Pinto","1520", '11 92566-8871'),
    (null, "Hospital do Galeão", "883445889066345", "871436982", "RJ", "Rio de Janeiro", "Tijuca", "Avenida Brasil", "87", '21 94589-2277'),
    (null, "Hospital da Barra", "923488989054647", "111222333", "RJ", "Rio de Janeiro", "Copacabana", "Rua Maria Joana", "445", '21 96321-7796'),
    (null, "Hospital Juscelino Kubitschek", "151413121110987", "444555666", "DF", "Brasília", "Águas Claras", "SCp-807", "821", '61 95528-4122'),
    (null, "Hospital Ivanilda das Graças", "154236987122541", "777888999", "BA", "Porto Seguro", "Penha", "Rua Tania das Claras", "2100", '73 92310-5511'),
    (null, "Hospital Graça de Oxum", "842364789214535", "951828356", "BA", "Salvador", "Pelourinho", "Rua Maria Antonieta", "88", '73 92255-8899');
    
select * from empresa;

CREATE TABLE usuario (
  idUsuario INT AUTO_INCREMENT,
  nomeUsuario VARCHAR(90),
  sobrenome VARCHAR(90),
  email VARCHAR(90),
  senha VARCHAR(90),
  fkEmpresa INT,
  PRIMARY KEY (idUsuario, fkEmpresa),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

desc usuario;

insert into usuario values
	(null, "Alberto", "Einstein", "alberto@gmail.com", "123456", 1),
	(null, "Julho", "Einstein", "junior@gmail.com", "654321", 1),
	(null, "Ramiro", "Einstein", "ramiro@gmail.com", "246810", 1),
	(null, "Murillo", "Borba", "murillo@gmail.com", "15499248459", 3),
	(null, "Joao", "Santos", "joao@gmail.com", "6262432254845", 4),
	(null, "Andre", "Santos", "andre@gmail.com", "48155", 4),
	(null, "Diego", "Menezes", "diego@gmail.com", "896522", 6),
	(null, "Gabrielle", "Silva", "gabi@gmail.com", "as25152", 7),
	(null, "Jessé", "Silva", "jess@gmail.com", "rfg22520", 8),
	(null, "Renato", "Nodari", "renato@gmail.com", "tgh245545", 9);

select * from usuario;

CREATE TABLE refrigerador (
	idRefrigerador int primary key auto_increment,
	marcaRefrigerador varchar (90), 
	tipoRefrigerador varchar (50),
	temperaturaIdeal varchar (6),
	localizacao varchar (90),
    fkUsuario int,
    fkEmpresa int,
    foreign key (fkUsuario) references usuario(idUsuario),
    foreign key (fkEmpresa) references empresa(idEmpresa)
);

desc refrigerador;

insert into refrigerador values
	(null, "Electrolux", "Duplex", "-18°C", "Refrigerador Albert Einstein", 1, 1),
	(null, "Frost free Brastemp", "Inverse", "-18.0", "Refrigerador Santa Maggiore", 2, 1),
	(null, "Cycle defrost Brastemp", "Side by Side", "-18.0", "Refrigerador Cema", 3, 1),
	(null, "Cycle defrost Electrolux", "French Door", "-18.0", "Refrigerador Chácara Cruzeiro do Sul", 4, 3),
	(null, "Cycle defrost Panasonic", "1 Door", "-18.0", "Refrigerador do Galeão", 5, 4),
	(null, "Frost free Panasonix", "Duplex", "-18.0", "Refrigerador da Barra", 6, 4),
	(null, "Evox Brastemp", "French Door", "-18.0", "Refrigerador Juscelino Kubitschek", 7, 6),
	(null, "Evox Electrolux", "Side by Side", "-18.0", "Refrigerador Ivanilda das Graças", 8, 7),
	(null, "Frost free Electrolux", "French Door", "-18.0", "Refrigerador Cruz Azul", 9, 8),
	(null, "Inox Panasonic", "Inverse", "-18.0", "Refrigerador Graça de Oxum", 10, 9);
    
select * from refrigerador;

CREATE TABLE sensor (
  idSensor INT PRIMARY KEY AUTO_INCREMENT,
  nomeSensor VARCHAR(60),
  tipoSensor VARCHAR(60),
  fkRefrigerador INT,
  FOREIGN KEY (fkRefrigerador) REFERENCES refrigerador(idRefrigerador)
);

desc sensor;

insert into sensor values
	(null, "LM35", "Temperatura", "1"),
	(null, "LM35", "Temperatura", "2"),
	(null, "LM35", "Temperatura", "3"),
	(null, "LM35", "Temperatura", "4"),
	(null, "LM35", "Temperatura", "5"),
	(null, "LM35", "Temperatura", "6"),
	(null, "LM35", "Temperatura", "7"),
	(null, "LM35", "Temperatura", "8"),
	(null, "LM35", "Temperatura", "9"),
    (null, "LM35", "Temperatura", "10");
    
select * from sensor;

CREATE TABLE registros (
	idRegistros int auto_increment,
	temperaturaAtual varchar (6),
	dtHora datetime default current_timestamp,
	fkSensor int,
    primary key (idRegistros, fkSensor),
	foreign key (fkSensor) references sensor (idSensor)
);

desc registros;

insert into registros (temperaturaAtual, fkSensor) values
	("-18.0", 1),
	("-17.5", 2),
    ("-18.0", 3),
    ("-17.8", 4),
    ("-17.0", 5),
    ("-19.0", 6),
    ("-18.0", 7),
    ("-18.0", 8),
    ("-18.0", 9),
    ("-18.0", 10);

select * from registros;

CREATE TABLE relatorio_diario (
  idRelatorio int auto_increment,
  fkUsuario int,
  fkRefrigerador int,
  fkEmpresa int,
  temperaturaMedia VARCHAR(6),
  totalLeite varchar (45),
  leiteRecebido varchar (45),
  leitePerdido varchar (45),
  dtRelatorio DATETIME,
  observacao VARCHAR(200),
  PRIMARY KEY (idRelatorio, fkUsuario, fkRefrigerador, fkEmpresa),
  FOREIGN KEY (fkRefrigerador) REFERENCES refrigerador(idRefrigerador),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

desc relatorio_diario;

insert into relatorio_diario values 
	(null, 1, 2, 1, '-15°C', '100L', '20L', '10L', '2022/02/28 18:30:05', 'Recebemos 20L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 10L.'),
    (null, 2, 3, 1, '-18°C', '80L', '22L', '4L', '2022/02/25 19:35:14', 'Recebemos 22L de leite hoje, eles permaneceram numa temperatura ideal. Perdemos 4L.'),
    (null, 3, 1, 2, '-20°C', '90L', '15L', '10L', '2022/02/26 19:45:08', 'Recebemos 15L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 10L.'),
    (null, 4, 5, 5, '-10°C', '75L', '5L', '12L', '2022/02/24 20:15:52', 'Recebemos 5L de leite hoje, eles permaneceram numa temperatura nada ideal. Perdemos 12L.'),
    (null, 5, 4, 9, '-15°C', '105L', '2L', '7L', '2022/02/28 19:55:05', 'Recebemos 2L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 7L.'),
    (null, 6, 6, 9, '-18°C', '92L', '12L', '5L', '2022/02/23 18:35:32', 'Recebemos 12L de leite hoje, eles permaneceram numa temperatura ideal. Perdemos 5L.'),
    (null, 7, 7, 8, '-5°C', '85L', '25L', '13L', '2022/03/30 19:10:15', 'Recebemos 25L de leite hoje, eles permaneceram numa temperatura nada ideal. Perdemos 13L.'),
    (null, 7, 8, 3, '-8°C', '60L', '10L', '9L', '2022/02/25 20:30:42', 'Recebemos 10L de leite hoje, eles permaneceram numa temperatura nada ideal. Perdemos 9L.');
    
select * from relatorio_diario;

-- SELECTS das tabelas -- 

select * from empresa;
select * from usuario;
select * from refrigerador;
select * from sensor;
select * from registros;
select * from relatorio_diario;

-- SELECTS DE GESTÃO/COMUNICAÇÃO das tabelas ////////////////////////////////////////////////////////////////////////////
           
/* Embasa todos os dados */

-- 1° /* Usuário + Empresa */
select * from usuario join empresa on fkEmpresa = idEmpresa;
-- Usuários não cadastrados na Empresa (Caso tenha)
select * from usuario left join empresa on fkEmpresa = idEmpresa;
-- Usuário + Refrigerador 
select * from usuario join refrigerador on idUsuario = fkUsuario;
-- 2° /* Sensor + Refrigerador */
select * from sensor join refrigerador on fkRefrigerador = idRefrigerador;
-- 3° /* Registro + Sensor */
select * from registros join sensor on fkSensor = idSensor;

/* Especificadas */ 

-- 1° /* Cliente/Usuário pelo NOME/ID */
-- Todos os *dados* empresas/hospitais cadastradas de Alberto/determinada pessoa:
select * from usuario join empresa on fkEmpresa = idEmpresa where nomeUsuario like "Alberto";
-- Todas empresas/hospitais de determinado cliente cadastrado:
select usuario.nomeUsuario, empresa.nomeEmpresa from usuario join empresa on fkEmpresa = idEmpresa where idUsuario = 1;

-- 2° /* Sensor e Refrigerador + Cliente determinado */
-- Todos os *dados* sensores/refrigeradores de determinado cliente: -- Temp. ideal/atual/cliente no 3°
select * from refrigerador join usuario on fkUsuario = idUsuario where idUsuario = 1;
-- Todas sensores/refrigeradores de determinado cliente:
select refrigerador.idRefrigerador, empresa.nomeEmpresa from refrigerador join empresa on fkUsuario = idEmpresa where idRefrigerador = 1;

-- 3° /* Registros de determinado sensor + cliente */
-- Todos os *dados*:
select * from registros join sensor on fkSensor = idSensor
join refrigerador on fkRefrigerador = idRefrigerador
join usuario on fkUsuario = idUsuario
join empresa on fkEmpresa = idEmpresa where idRegistros = 1;

-- Temperatura ideal e atual do sensor de determinado cliente:
select refrigerador.temperaturaIdeal, registros.temperaturaAtual, refrigerador.localizacao from refrigerador join registros on fkUsuario = idRegistros;
select * from refrigerador as temperaturaIdeal join registros on temperaturaIdeal.fkUsuario = idRegistros
join refrigerador as localizacao on localizacao.fkUsuario = idRegistros;

-- Empresa, usuario e seu Relatório Diário:
select * from usuario join relatorio_diario on fkUsuario = idUsuario;
select * from usuario join refrigerador on refrigerador.fkUsuario = usuario.idUsuario 
join relatorio_diario on relatorio_diario.fkUsuario = usuario.idUsuario;
select * from empresa join relatorio_diario on fkEmpresa = idEmpresa;
select empresa.nomeEmpresa, usuario.nomeUsuario, relatorio_diario.observacao from empresa 
join usuario on fkEmpresa = idEmpresa join relatorio_diario on fkUsuario = idUsuario;

/* Todas as Comunicações */
select * from empresa join usuario on fkEmpresa = idEmpresa 
join refrigerador on idUsuario = fkUsuario 
join sensor on idRefrigerador = fkRefrigerador 
join registros on idSensor = fkSensor
join relatorio_diario on relatorio_diario.fkUsuario = Usuario.idUsuario;

/*********************************************************************************************/
/*********************************************************************************************/
/*Nuvem*/

  insert into empresa (nomeEmpresa, CNPJ, CEP, estado, cidade, bairro, logradouro, complemento, telefone_fixo) values
	('Hospital Israelita Albert Einstein', '123456789012345', '123456759', 'SP', 'São Paulo', 'Vila Mascote', 'Rua benedito de Sá', '53', '11 2338-5616'),
	('Hospital Cruz Azul', '122476787015841', '123456789', 'SP', 'São Paulo', 'Cambuci', 'Av. Lins de Vasconcelos', '356', '11 94828-6398'),
	('Hospital Santa Magiore', '123456254912435', '123456789', 'SP', 'São Paulo', 'Brás', 'Rua dos Lavapés','1005', '11 94431-8963'),
	('Hospital Cema', '123445318812388', '456379289', 'SP', 'São Paulo', 'Belém', 'Rua Padre Adelino','28', '11 97895-2536'),
  ('Hospital Chácara Cruzeiro do Sul', '432156789054321', '359127822', 'SP', 'São Paulo', 'Cangaíba', 'AV. Governador Carvalho Pinto','1520', '11 92566-8871');

  insert into usuario values
	(null, "Alberto", "Einstein", "alberto@gmail.com", "123456", 1),
	(null, "Julho", "Einstein", "junior@gmail.com", "654321", 1),
	(null, "Ramiro", "Einstein", "ramiro@gmail.com", "246810", 1),
	(null, "Murillo", "Borba", "murillo@gmail.com", "15499248459", 3),
	(null, "Joao", "Santos", "joao@gmail.com", "6262432254845", 4);

  insert into refrigerador (marcaRefrigerador, tipoRefrigerador, temperaturaIdeal, localizacao, fkUsuario, fkEmpresa) values
	('Electrolux', 'Duplex', '-18', 'Refrigerador Albert Einstein', 1, 1),
	('Frost free Brastemp', 'Inverse', '-19', 'Refrigerador Santa Maggiore', 1, 1),
	('Cycle defrost Brastemp', 'Side by Side', '-20', 'Refrigerador Cema', 1, 1),
	('Cycle defrost Electrolux', 'French Door', '-16', 'Refrigerador Chácara Cruzeiro do Sul', 1, 1),
	('Electrolux', 'Duplex', '-18', 'Refrigerador Albert Einstein', 2, 2),
	('Frost free Brastemp', 'Inverse', '-18', 'Refrigerador Santa Maggiore', 2, 2),
	('Cycle defrost Brastemp', 'Side by Side', '-20', 'Refrigerador Cema', 2, 2),
	('Cycle defrost Electrolux', 'French Door', '-17', 'Refrigerador Chácara Cruzeiro do Sul', 2, 2),
	('Electrolux', 'Duplex', '-18', 'Refrigerador Albert Einstein', 3, 3),
	('Frost free Brastemp', 'Inverse', '-19', 'Refrigerador Santa Maggiore', 3, 3),
	('Cycle defrost Brastemp', 'Side by Side', '-22', 'Refrigerador Cema', 3, 3),
	('Cycle defrost Electrolux', 'French Door', '-15', 'Refrigerador Chácara Cruzeiro do Sul', 3, 3),
	('Electrolux', 'Duplex', '-18', 'Refrigerador Albert Einstein', 4, 4),
	('Frost free Brastemp', 'Inverse', '-24', 'Refrigerador Santa Maggiore', 4, 4),
	('Cycle defrost Brastemp', 'Side by Side', '-21', 'Refrigerador Cema', 4, 4),
	('Cycle defrost Electrolux', 'French Door', '-17', 'Refrigerador Chácara Cruzeiro do Sul', 4, 4);

  insert into sensor (nomeSensor, tipoSensor, fkRefrigerador) values
	('LM35', 'Temperatura', '1'),
	('LM35', 'Temperatura', '2'),
	('LM35', 'Temperatura', '3'),
	('LM35', 'Temperatura', '4'),
	('LM35', 'Temperatura', '5'),
	('LM35', 'Temperatura', '6'),
	('LM35', 'Temperatura', '7'),
	('LM35', 'Temperatura', '8'),
	('LM35', 'Temperatura', '9'),
	('LM35', 'Temperatura', '10'),
	('LM35', 'Temperatura', '11'),
	('LM35', 'Temperatura', '12'),
	('LM35', 'Temperatura', '13'),
	('LM35', 'Temperatura', '14'),
	('LM35', 'Temperatura', '15'),
	('LM35', 'Temperatura', '16');

  insert into registros (temperaturaAtual, fkSensor) values
  (18, 1),
  (17, 1),
  (19, 1),
  (16, 1),
  (17, 2),
  (19, 2),
  (18, 2),
  (20, 2),
  (23, 3),
  (18, 3),
  (20, 3),  
  (21, 3),
  (18, 4),
  (18, 4),
  (18, 4),
  (19, 4),
  (21, 5),
  (22, 5),
  (24, 5),
  (26, 5);

  insert into relatorio_diario (fkUsuario, fkRefrigerador, fkEmpresa, temperaturaMedia, totalLeite, leiteRecebido, leitePerdido, observacao) values 
	(1, 1, 1, '-15°C', '100L', '20L', '10L', 'Recebemos 20L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 10L.'),
  (2, 2, 2, '-18°C', '80L', '22L', '4L', 'Recebemos 22L de leite hoje, eles permaneceram numa temperatura ideal. Perdemos 4L.'),
  (3, 3, 3, '-20°C', '90L', '15L', '10L', 'Recebemos 15L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 10L.'),
  (4, 4, 4, '-10°C', '75L', '5L', '12L', 'Recebemos 5L de leite hoje, eles permaneceram numa temperatura nada ideal. Perdemos 12L.'),
  (5, 5, 5, '-15°C', '105L', '2L', '7L', 'Recebemos 2L de leite hoje, eles permaneceram numa temperatura quase ideal. Perdemos 7L.');