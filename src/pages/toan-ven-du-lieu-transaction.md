---
title: "Toàn vẹn dữ liệu TRANSACTION"
date: "2020-03-03"
---

Transaction trong SQL là một nhóm câu lệnh SQL, xử lý tuần tự các thao tác trên CSDL. 

Nếu 1 transaction được thực hiện thành công, tất cả các thay đổi dữ liệu được thực hiện trong transaction sẽ được lưu vào CSDL.

Nếu 1 transaction bị lỗi và được rollback thì tất cả các sửa đổi dữ liệu sẽ bị xóa (dữ liệu sẽ được khôi phục về trước khi transaction).

#### INSERT, UPDATE, DELETE

Ví dụ:

public function doAction()
{
    DB::beginTransaction();

    try {
        // code xử lý
        DB::commit();
    } catch(Exception $e) {
        DB::rollback();
        throw new Exception($e->getMessage());
    }
}

