---
title: "4 tính chất của hướng đối tượng trong PHP"
date: "2020-03-03"
---

#### Tính kế thừa (Inheritance) 

Class con có thể kế thừa mọi thứ của class cha, giảm tải quá trình viết code trùng lặp mà class cha đã có.

#### Tính đóng gói ( encapsulation )

Các đối tượng bên ngoài không thể can thiệp cũng như thay đổi đối tượng bên trong mà phải thông qua các access modifier (public, private, protected) do người viết code quy định.

#### Tính đa hình ( polymorphism )

Các method giống nhau nhưng lại có thể xử lý các luồng dữ liệu khác nhau, ví dụ như method index của class UserController và class Post thì sẽ đưa ra 2 kết quả khác nhau. 

- Tính nạp chồng (overloading): Các phương thức giống nhau mà khác tham số trong cùng 1 class, khi gọi đến tham số nào thì phương thức đó sẽ thực thi.

- Tính ghi đè (Overiding): Các class con có thể định nghĩa lại nội dung code của class cha mà nó kế thừa.

#### Tính trừu tượng ( Abstraction )


Tính chất này cho phép lập trình viên tập trung vào những phần cốt lõi của đối tượng. Interface và abstractclass là 2 thứ thể hiện rõ nhất tính trừu tượng của đối tượng.

Interface: hiểu như là mặt nạ cho các đối tượng khác nhau về bản chất nhưng giống nhau về phương thức.

Abstractclass: hiểu là lớp đại diện cho các lớp có cùng tính chất.





