# Frontend Mentor - Weather app

![Design preview for the Weather app coding challenge](./preview.jpg)

# Frontend Mentor - Weather App Solution

Đây là lời giải của mình cho thử thách [Weather app trên Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Dự án giúp mình củng cố kỹ năng lập trình TypeScript và xử lý dữ liệu thực tế từ API.

## Mục lục

- [Tổng quan](#tổng-quan)
  - [Thử thách](#thử-thách)
  - [Liên kết](#liên-kết)
- [Quá trình làm việc](#quá-trình-làm-việc)
  - [Công nghệ sử dụng](#công-nghệ-sử-dụng)
  - [Những gì mình đã học được](#những-già-mình-đã-học-được)
  - [Phát triển tiếp theo](#phát-triển-tiếp-theo)
- [Tác giả](#tác-giả)

## Tổng quan

### Thử thách

Người dùng có thể:
- Tìm kiếm thông tin thời tiết theo địa điểm một cách nhanh chóng.
- Xem các chỉ số hiện tại: Nhiệt độ, icon thời tiết, độ ẩm, tốc độ gió và lượng mưa.
- Theo dõi dự báo thời tiết chi tiết cho 7 ngày tới.
- **Tính năng Hourly Forecast:** Xem biến động nhiệt độ trong 8 tiếng tiếp theo của bất kỳ ngày nào được chọn trong tuần.
- Trạng thái Hover/Active rõ ràng cho các phần tử tương tác.

### Liên kết

- Solution URL: [https://github.com/HuaMinhThien/WeatherApp](https://github.com/HuaMinhThien/WeatherApp)
- Live Site URL: [https://huaminhthien.github.io/WeatherApp/](https://huaminhthien.github.io/WeatherApp/)

## Quá trình làm việc

### Công nghệ sử dụng

- **HTML5** chuẩn Semantic.
- **CSS3**
- **Flexbox & CSS Grid** cho bố cục linh hoạt.
- **TypeScript** để quản lý kiểu dữ liệu chặt chẽ và giảm thiểu lỗi Runtime.
- **Open-Meteo API** - Hệ thống API thời tiết mạnh mẽ và miễn phí.
- **Nominatim API**  

### Những gì mình đã học được

Trong dự án này, mình đã giải quyết được bài toán hóc búa nhất là xử lý mảng dữ liệu 168 giờ từ API để lấy đúng 8 khung giờ tương ứng với ngày người dùng chọn.

```typescript
// Kỹ thuật định dạng giờ hiện tại để khớp với dữ liệu từ API
const currentHourStr = `T${String(now.getHours()).padStart(2, '0')}:00`;

// Logic tính toán vị trí bắt đầu (startIndex) trong mảng 168 phần tử
const startIndex = (dayOffset * 24) + currentHour;
```


### Phát triển tiếp theo
[ ] Tích hợp tính năng tự động phát hiện vị trí (Geolocation).

[ ] Thêm hiệu ứng chuyển động mượt mà khi thay đổi giữa các ngày trong tuần.

[ ] Lưu trữ địa điểm tìm kiếm cuối cùng vào localStorage.


## Tác giả

- GitHub - [Hứa Minh Thiện](https://github.com/HuaMinhThien)
- Frontend Mentor - [@HuaMinhThien](https://www.frontendmentor.io/profile/HuaMinhThien)