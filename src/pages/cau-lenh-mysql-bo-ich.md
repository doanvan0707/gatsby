---
title: "Những câu lệnh mysql bổ ích"
date: "2020-19-03"
---

##### Xóa tất cả dữ liệu trong bảng, chỉ số index sẽ được tự động tăng lại.
truncate table <table>;

##### Xóa dữ liệu trong bảng, record tiếp theo sẽ tính từ id cuối cùng bị xóa
DELETE FROM <table> WHERE <condition> ;

##### Export 1 bảng trong mysql
mysql -uroot -p <database_name> <table_name> > <ten.sql>;

##### show all columns table
show columns from <table>;
describe <table>;