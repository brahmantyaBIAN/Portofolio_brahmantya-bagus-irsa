const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // hilangkan active
        buttons.forEach(b => b.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        // aktifkan tombol & tab
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});
