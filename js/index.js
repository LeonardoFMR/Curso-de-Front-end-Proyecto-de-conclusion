function activaScroll(selector) {
    let button = document.querySelector(selector);
    button.addEventListener('click', function (event) {
        event.preventDefault();

        let page = document.documentElement || document.body;
        let origin = document.documentElement.scrollTop || document.body.scrollTop;
        let dest = document.querySelector(this.getAttribute('href')).offsetTop;
        let distance = dest - origin;

        let counter = 0;
        let duration = 500;
        let steps = duration / 50;

        let animation = setInterval(function () {
            counter++;
            let progress = counter / steps;
            let newPos = origin + distance * progress;
            document.documentElement.scrollTop = newPos;
            document.body.scrollTop = newPos;

            if (counter >= steps) {
                clearInterval(animation);
            }
        }, 50);
    });
}

activaScroll('a[href*=panel-about]');
activaScroll('a[href*=panel-speakers]');
activaScroll('a[href*=panel-form]');
