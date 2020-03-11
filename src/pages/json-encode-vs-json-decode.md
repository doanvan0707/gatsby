---
title: "Hàm json_encode và json_decode trong PHP"
date: "2020-11-03"
---

##### Hàm json_decode trong php

Hàm này mục đích chuyển một chuỗi JSON sang dạng mảng hoặc object. 

Cú pháp: json_decode($json_string, $assoc);

Trong đó:
- $json_string: là chuỗi JSON

- $assoc có hai giá trị true / false. Nếu true thì kết quả nó trả về là dạng  array, ngược lại nếu false thì kết quả trả về dạng object. Mặc định là false.

##### Hàm json_encode trong php

Hàm này có mục đích chuyển mảng hoặc object thành chuỗi JSON.

Cú pháp: json_encode($aray);

Trong đó: $array là mảng truyền vào
