// 1. 获取切换按钮（我们待会去 HTML 里加这个按钮）
const themeBtn = document.createElement('button');
themeBtn.innerText = '🌙 切换主题';
themeBtn.className = 'theme-toggle';
document.body.appendChild(themeBtn);

// 2. 监听点击事件
themeBtn.addEventListener('click', () => {
    // 切换 body 的类名
    document.body.classList.toggle('dark-mode');
    
    // 更新按钮文字
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.innerText = '☀️ 浅色模式';
    } else {
        themeBtn.innerText = '🌙 深色模式';
    }
});

// 3. 控制台打印欢迎语（面试官打开 F12 就能看到你的彩蛋）
console.log("%c欢迎访问我的简历！", "color: #007bff; font-size: 20px; font-weight: bold;");
console.log("正在查看源代码吗？希望我们能有机会合作！");