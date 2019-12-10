
select * from fchhltfc.post_aj;
select * from fchhltfc.comments_aj;
select * from fchhltfc.profile_aj;

delete   from fchhltfc.profile_aj;
delete  from fchhltfc.comments_aj;
delete  from  fchhltfc.post_aj;



CREATE TABLE fchhltfc.post_aj(id int not Null PRIMARY KEY, tittle VARCHAR(400) not null)

CREATE TABLE fchhltfc.comments_aj(id SERIAL PRIMARY KEY, body VARCHAR(400) not null, post_Id int )

alter table fchhltfc.comments_aj add 
FOREIGN KEY (post_Id) REFERENCES post_aj (id)

CREATE TABLE fchhltfc.profile_aj(id SERIAL PRIMARY KEY, name VARCHAR(400) not null)


INSERT INTO fchhltfc.post_aj
(id, tittle)
VALUES(1, 'P0');

INSERT INTO fchhltfc.comments_aj
(body, post_id)
VALUES('something about P0', 1);


INSERT INTO fchhltfc.profile
("name")
VALUES('here goes P0 profile');

