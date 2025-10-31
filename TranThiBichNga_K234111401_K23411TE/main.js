document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const timeBox = document.getElementById("time-box");
  
    function updateDateTime() {
      const now = new Date();
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', dateOptions);
      const timeString = now.toLocaleTimeString();
  
      textElement.innerHTML = `Designed by Student Tran Thi Bich Nga, today is ${dateString}`;
      timeBox.innerText = `⏰ ${timeString}`;
    }
  
    // Cập nhật ngay khi tải trang
    updateDateTime();
    // Sau đó tự cập nhật mỗi giây
    setInterval(updateDateTime, 1000);
  });
  