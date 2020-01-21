CREATE TABLE tb_users (
    tb_user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    hash VARCHAR(250),
    tb_pic VARCHAR(2500),
    tb_truck VARCHAR(2500)
);

CREATE TABLE tb_likes (
    tb_liker INT REFERENCES tb_users(tb_user_id),
    tb_liked INT REFERENCES tb_users(tb_user_id)
);

CREATE TABLE tb_rejections (
    tb_rejecter INT REFERENCES tb_users(tb_user_id),
    tb_rejected INT REFERENCES tb_users(tb_user_id)
);

CREATE TABLE tb_rooms (
    tb_room_id SERIAL PRIMARY KEY,
    title VARCHAR(250)
);

CREATE TABLE tb_room_users (
    tb_room_id INT REFERENCES tb_rooms(tb_room_id),
    tb_user_id INT REFERENCES tb_users(tb_user_id)
);

CREATE TABLE tb_messages (
    tb_message_id SERIAL PRIMARY KEY,
    tb_room_id INT REFERENCES tb_rooms(tb_room_id),
    tb_user_id INT REFERENCES tb_users(tb_user_id),
    tb_message_text VARCHAR(250)
    
);


