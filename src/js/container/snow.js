function snow() {
   
    let flake = document.createElement('div');
    flake.innerHTML = '❆';
    flake.style.cssText = 'position:absolute;color:#fff;';

    // Получаем высоту страницы, которая эквивалентна положению оси Y при падении снежинок
    let documentHieght = window.innerHeight;
    // Получаем ширину страницы, используем это число для вычисления, значение слева, когда снежинка начинается
    let documentWidth = window.innerWidth;

    let millisec = 100;
    //  установливаем первый таймер, периодический таймер и каждый раз генерировать снежинку (миллисекунды);
    setInterval(function() { // После загрузки страницы таймер начинает работать
        // Произвольно генерируем значение left в начале падения снежинки, что эквивалентно положению оси X в начале
        let startLeft = Math.random() * documentWidth;

        // Произвольно генерируем значение left в конце падающих снежинок, что эквивалентно положению оси X в конце
        let endLeft = Math.random() * documentWidth;

        // Произвольно генерируем размер снежинки
        let flakeSize = 5 + 20 * Math.random();

        // Произвольно генерируем время падения снежинок
        let durationTime = 4000 + 7000 * Math.random();

        // Произвольно генерируем прозрачность в начале падения снежинки
        let startOpacity = 0.7 + 0.3 * Math.random();

        // Произвольно генерируем прозрачность в конце падающей снежинки
        let endOpacity = 0.2 + 0.2 * Math.random();

        // Клонируем шаблон снежинки
        let cloneFlake = flake.cloneNode(true);

        // Изменяем стиль впервые, определяем стиль клонированной снежинки
        cloneFlake.style.cssText += `
                left: ${startLeft}px;
                opacity: ${startOpacity};
                font-size:${flakeSize}px;
                top:-25px;
                    transition:${durationTime}ms;
            `;

        
        document.body.appendChild(cloneFlake);

        // Устанавливаем второй таймер, одноразовый таймер,
        // Когда первый таймер генерирует снежинки и отображает их на странице, измените стиль снежинок, чтобы они двигались;
        setTimeout(function() {
            // Изменяем стиль во второй раз
            cloneFlake.style.cssText += `
                        left: ${endLeft}px;
                        top:${documentHieght}px;
                        opacity:${endOpacity};
                    `;

            //  третий таймер и удаляем снежинку, когда она упадет.
            setTimeout(function() {
                cloneFlake.remove();
            }, durationTime);
        }, 0);

    }, millisec);
}
snow();
