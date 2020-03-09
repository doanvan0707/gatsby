---
title: "Hàm array_map trong PHP"
date: "2020-08-03"
---
#### Giải thích: 
##### Hàm array_map() sẽ lặp tất cả các phần tử của mảng và truyền vào hàm callback định nghĩa trước đó của người dùng.
##### Hàm callback sẽ coi các phần tử của mảng như là những tham số và nó sẽ lặp lại cho đến khi tất cả các phần tử mảng đã được truyền vào.

#### Cú pháp: array_map($func, $arr1, $arr2...);
- $func là hàm người dùng định nghĩa để nhận các phần tử truyền vào là các phần tử  của $arr1, $arr2,...
- $arr1, $arr2 là các mảng dữ liệu truyền vào.


#### Ví dụ:

![alt](https://imgur.com/mEcXIuW.png)