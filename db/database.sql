CREATE DATABASE IF NOT EXISTS singersdb;
USE singersdb;

DROP TABLE IF EXISTS singers;
CREATE TABLE singers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL
);

INSERT INTO singers (name, genre)
VALUES 
    ('Duki', 'Rap'),
    ('Ysy A', 'Trap'),
    ('Tini', 'Pop'),
    ('María', 'Trap'),
    ('Yoasobi', 'Japanese Lyrics'),
    ('Kenshi Yonezu', 'J-Pop'),
    ('Beyoncé', 'R&B'),
    ('Ariana Grande', 'Pop'),
    ('LiSA', 'J-Pop/Rock'),
    ('Radwimps', 'J-Rock'),
    ('One OK Rock', 'J-Rock'),
    ('Kendrick Lamar', 'Hip Hop'),
    ('Taylor Swift', 'Pop');
