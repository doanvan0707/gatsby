---
title: "SOLID"
date: "2020-03-03"
---

### Single responsibility principle
### Open/Closed principle
### Liskov substitution principle 
### Interface segregation principle
### Dependency inversion principle

#### 1. Single responsibility principle

- Một class chỉ nên giữ 1 trách nhiệm duy nhất.

#### 2. Open/Closed principle

- Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó.

#### 3. Liskov substitution principle

- Các object của class con có thể thay đổi class cha mà không làm thay đổi tính đúng đắn của chương trình.

#### 4. Interface segregation principle

- Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể.

#### 5. Dependency inversion principle

- Các module cấp cao không nên phụ thuộc vào các module thấp. Cả 2 nên phụ thuộc vào abstraction.

- Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại (Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation)

- Ví dụ: 2 bóng huỳnh quang, bóng dây tóc đều có chuôi tròn. Ta chỉ quan tâm đến chuôi tròn chứ không quan tâm đến bóng đèn.
