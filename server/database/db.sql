create database images;
\c images;

create table card(
  id serial primary key,
  title varchar(50) not null,
  price int not null,
  description varchar(150) not null,
  imageUrl varchar(150) ,
  imageId varchar(150) 
);

insert into card(title, price, description, image, imageId) values('imagen1',150,'descripcion','imagen', 'imagen id');