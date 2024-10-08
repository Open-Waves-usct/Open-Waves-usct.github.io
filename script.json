// 简单的JavaScript脚本，用于处理导航栏的激活状态
window.onload = function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.onclick = function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        };
    });

    sections.forEach(section => {
        section.onscroll = function () {
            const activeLink = document.querySelector('nav ul li a[href="#' + section.id + '"]');
            if (activeLink) {
                links.forEach(l => l.classList.remove('active'));
                activeLink.classList.add('active');
            }
        };
    });
};
