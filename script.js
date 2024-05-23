// Анимация фона
document.body.onload = () => {
    const colors = ['#ff6b6b', '#ffb6b9', '#6bc1ff', '#6bffb6'];
    let colorIndex = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(45deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);
};
