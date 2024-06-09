const portfolioImages = document.querySelectorAll('.portfolio-box img');
let currentIndex = 0;

function slideImages() {
    portfolioImages[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % portfolioImages.length;
    portfolioImages[currentIndex].style.opacity = 1;
}

setInterval(slideImages, 5000); // Tự động chuyển đổi hình ảnh sau mỗi 5 giây
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi Form mặc định

    // Thu thập dữ liệu từ Form
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Xử lý dữ liệu ở đây (ví dụ: gửi dữ liệu đến một API hoặc lưu vào cơ sở dữ liệu)

    // Sau khi xử lý, bạn có thể hiển thị một thông báo thành công cho người dùng
    alert('Dữ liệu đã được gửi thành công!');

    // Sau khi xử lý, bạn có thể làm sạch Form
    contactForm.reset();
});