insert into helo_users(
    username,
    password

) values (
    ${username},
    ${hash}
)
returning  id, username