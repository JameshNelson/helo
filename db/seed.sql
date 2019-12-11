create table helo_users (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references helo_users(id)
);


insert into helo_users(
username,
password,
profile_pic 
)values(
'',
'',
''
);

insert into posts(
title,
img,
content,
author_id
)values(
'',
'',
'',
{number}
);