create database checkpoint3;
use checkpoint3;

create table album (
    id integer not null auto_increment,
    title varchar(255),
    genre varchar(255),
    picture varchar(255),
    artist varchar(255),
    primary key (id)
);

CREATE TABLE track (
    id integer not null auto_increment,
    title varchar(128),
    youtube_url varchar(255),
    id_album int null,
    primary key (id),
    foreign key (id_album) references album(id)
    );

INSERT INTO album (title, genre, picture, artist)
VALUES ('Près de toi', 'variété','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmRC3E_rAF6z_vA7CBvWALEXieHIV9Ms7QRmRFDs&usqp=CAE&s', 'Lorie'),
('Fallen', 'métal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXAA6AcxrnKfOeuPh638XX8cwRUan5yEN7KgS510&usqp=CAE&s','Evanescence');

INSERT INTO track ( title, youtube_url, id_album)
VALUES('Bring me to life', 'https://www.youtube.com/watch?v=3YxaaGgTQYM', 2),
('Fallen', 'https://www.youtube.com/watch?v=OcRHJdnbjbI', 2),
('Près de moi', 'https://www.youtube.com/watch?v=T1rdEgF29FQ', 1),
('Ta meilleure amie', 'https://www.youtube.com/watch?v=pOMmS27LY1g', 1),
('Ta meilleure amie', 'https://www.youtube.com/watch?v=pOMmS27LY1g', 1),
('Ta meilleure amie', 'https://www.youtube.com/watch?v=pOMmS27LY1g', 1);


