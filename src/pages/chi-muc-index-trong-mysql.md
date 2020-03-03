---
title: "Chỉ mục INDEX trong MySQL"
date: "2020-03-03"
---

Chỉ mục (index) là bảng tra cứu đặc biệt mà **Database Search Enginer** có sử dụng để tăng nhanh thời gian và hiệu xuất thu thập dữ liệu.

Hiểu đơn giản, một chỉ mục là một con trỏ tới dữ liệu trong một bảng. Một chỉ mục trong 1 Database tương tự như chỉ mục trong mục lục của cuốn sách.

Một chỉ mục (index) giúp tăng tốc các truy vấn **SELECT** và các mệnh đề  **WHERE** nhưng nó lại chậm so với các lệnh UPDATE, INSERT. Các chỉ mục có thể được tạo hoặc xóa mà không ảnh hưởng tới dữ liệu.

Tạo 1 chỉ mục **CREATE INDEX** cho phép đặt tên chỉ mục xác định bảng, cột nào.

Các chỉ mục cũng có thể là duy nhất, tương tự **UNIQUE**.
