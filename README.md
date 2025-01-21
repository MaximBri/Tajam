# Задачи:

## Макеты:

1. В блоке с видео открывать всплывающее окно по клику на иконку play и тексту ниже: ✅
2. Во всплывающем окне показывать видео; ✅
3. реализовать просмотр (пролистывание) отзывов по клику на аватар; ✅ - реализовано через слейдер
4. в блоке с формой настроить валидацию:
   1. все поля обязательны; ✅
   2. email должен быть корректным; ✅
   3. Номер телефона должен быть корректным; ✅
   4. По каждому полю должны быть ограничения на кол-во введенных символов; ✅
   5. Проверка должна происходить по клику на кнопку или нажатием на Enter; ❌ - проверка данных происходит при попытке отправки формы, в случае чего отображает первую ошибку
   6. Cообщение об ошибке должно выводиться под полем, в котором она есть; ✅

## Требования:

1.  Cайт должен быть кроссбраузерным и адаптивным; ✅
2.  Использование шрифтов Playfair и Roboto; ✅
3.  Использование методологии БЭМ; ✅
4.  Вся верстка должна быть выполнена без использования css-фреймворков, таких как Bootstrap, Tailwind; ✅
5.  Использование HTML5, препроцессор SCSS; ✅
6.  Наличие сборщика, например Vite; ✅ - используется Vite
7.  Использовать фреймворк или самописный JS на ваше усмотрение; ✅ - используется React

## Будет плюсом:

1. В блоке Команда используйте шаблонизатор для карточки сотрудника; ✅
2. Реализовать функционал якорных ссылок для каждого раздела в пунктах меню шапки сайта; ✅ - в целом якорные ссылки работают, но на десктопе не удалось реализовать плавность, на мобильных всё чётко.
3. Соблюдения Pixel Perfect; ✅ - отклонения минимальные
4. Настройка автоматической сборки и оптимизации (минификация CSS/JS, сжатие изображений); ✅ - минификация CSS/JS, ❌- оптимизация изображений
5. Настройка Linter, Prettier; ✅ - настроен Prettier, StyleLint

## Добавлено от себя:

1. Бургер-меню на tablet и mobile версиях - база
2. Различного рода hover - эффекты для улучшения "живности" сайта
3. Подгрузка и скрытие работ. По умолчанию показывается 12/6/4 работ (серых картинок) для desktop/tablet/mobile версий. При нажатии на кнопку "показать больше" идёт постепенное добавление работ до самого конца. Если работ больше нет, по нажатию на кнопку (уже с надписью "скрыть") количество работ сбросится для первоначального. Есть небольшой косяк, что тип устройства немного криво (при входе через DevTools показывает платформу Mobile) и тип устройства не меняется динамически

# Запуск проекта

1. Убедитесь, что у вас установлены Node.js и npm.  
   Проверьте установку:
   ```bash
   node -v
   npm -v
   ```
2. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-репозиторий.git
   cd ваш-репозиторий
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```
5. Проект можно открыть по адресу:

```bash
http://localhost:5173/Tajam/
```
