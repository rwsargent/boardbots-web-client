(function demo() {
    const right = document.querySelector<HTMLElement>('.right');
    const left = document.querySelector<HTMLElement>('.left');
    let flag = false;
    setInterval(() => {
        if (flag) {
            right.style.backgroundColor = "red";
            left.style.backgroundColor = "blue";
        } else {
            right.style.backgroundColor = "blue";
            left.style.backgroundColor = "purple";
        }
        flag = !flag;
    }, 1000);
 })();