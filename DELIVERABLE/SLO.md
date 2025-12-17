# Service Level Objective (SLO) - Backend API

## 1. Service Level Indicator (SLI) - Thước đo
Chúng ta đo lường độ trễ (Latency) tại điểm nhận request (Ingress Controller).

* **Metric Source:** Prometheus (Nginx Ingress Controller Metrics).
* **Định nghĩa:** Thời gian xử lý một HTTP Request thành công (không tính lỗi 5xx).
* **Phương pháp đo:** P95 Latency (95% số lượng request phải nhanh hơn ngưỡng quy định).

## 2. Service Level Objective (SLO) - Mục tiêu
* **Ngưỡng (Threshold):** 200ms (0.2 giây).
* **Mục tiêu (Target):** 99%
* **Chu kỳ đo (Window):** 30 ngày (Rolling window).

👉 **Phát biểu:** "Trong vòng 30 ngày, 99% các request hợp lệ phải được phản hồi dưới 200ms."

## 3. Error Budget - Ngân sách lỗi
* **Tổng ngân sách:** 1% (100% - 99%).
* **Ý nghĩa:** Nếu hệ thống có 1.000.000 requests/tháng, chúng ta được phép có tối đa **10.000 requests** bị chậm hơn 200ms.
* **Chính sách:**
    * Nếu ngân sách còn > 0%: Dev được phép deploy tính năng mới thoải mái.
    * Nếu ngân sách cạn kiệt (< 0%): **ĐÓNG BĂNG DEPLOY (CODE FREEZE)**. Chỉ được phép merge code sửa lỗi hiệu năng hoặc bảo mật cho đến khi ngân sách hồi phục.