# OFY Project Documentation

## Overview
Этот проект представляет собой фронтенд-приложение, разработанное с использованием React, React Router, Tailwind CSS и библиотеки интернационализации `react-i18next`. Включает страницы «О нас», «Блог», «Контакты» и отдельные страницы для отображения постов блога.

## Установка и запуск

### 1. Установка зависимостей
```bash
npm install
```

### 2. Запуск проекта
```bash
npm start
```

## Структура проекта
```plaintext
/src
 ├── components
 │   ├── About.js
 │   ├── Blog.js
 │   ├── ExamplePage.js
 │   ├── Contacts.js
 │   ├── LoadingScreen.js
 │   ├── Recent.js
 ├── Js
 │   ├── useFetchBlogs.js
 ├── img
 │   ├── About.png
 │   ├── Adress.png
 │   ├── Phone.png
 │   ├── Email.png
 ├── styles
 │   ├── About.module.css
 │   ├── Blog.module.css
 │   ├── Contacts.module.css
 │   ├── ExamplePage.module.css
 ├── App.js
 ├── index.js
 ├── i18n.js
```

## Описание компонентов

### 1. About.js
**Описание:** Отображает информацию о проекте, использует переводы из `react-i18next`.
- Поддерживает заголовки и описание
- Включает изображение `/img/About.png`
- Использует стили из `About.module.css`

### 2. Blog.js
**Описание:** Отображает список постов блога, полученных с сервера.
- Использует хук `useFetchBlogs` для загрузки данных
- Отображает превью постов с заголовками и кратким описанием
- Добавляет кнопку "Read More", ведущую на страницу поста

### 3. ExamplePage.js
**Описание:** Страница конкретного поста блога.
- Получает `id` поста из `useParams`
- Использует `useFetchBlogs` для загрузки данных
- Отображает заголовок, изображение и контент поста
- Включает компонент `Recent` для отображения последних публикаций

### 4. Contacts.js
**Описание:** Отображает контактную информацию.
- Использует `react-i18next` для перевода заголовков и описаний
- Включает иконки `/img/Adress.png`, `/img/Phone.png`, `/img/Email.png`

## API Запросы
Компоненты `Blog.js` и `ExamplePage.js` используют `useFetchBlogs.js`, который запрашивает API для получения данных блога.

```javascript
const { blogs, loading, apiUrl } = useFetchBlogs();
```

### Получение изображений постов
```javascript
function getImageUrl(imagePath) {
    return imagePath ? `${apiUrl}${imagePath}` : '/media/blog_images/default.png';
}
```

## Локализация (i18n)
Проект поддерживает несколько языков с помощью `react-i18next`.
Файлы переводов находятся в `public/locales/`.

## Стилизация
Используется `Tailwind CSS` и модульные CSS-файлы (`*.module.css`).

## Разработка и дальнейшее расширение
- Добавить возможность фильтрации постов блога
- Реализовать поиск по заголовкам блога
- Улучшить дизайн кнопок и форм

