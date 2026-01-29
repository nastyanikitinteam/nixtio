# Nixtio

Проєкт на Next.js 16 з TypeScript, SCSS та автоматичним форматуванням коду.

## Початок роботи

### Встановлення залежностей

```bash
npm install
```

### Запуск проєкту

```bash
# Розробка
npm run dev

# Production build
npm run build

# Запуск production сервера
npm start
```

Проєкт буде доступний за адресою [http://localhost:3000](http://localhost:3000)

## Структура проєкту

```
src/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Група маршрутів з основним layout
│   │   ├── layout.tsx           # Layout для (main) групи
│   │   ├── page.tsx             # Сторінки
│   │   └── components/          # Компоненти конкретної сторінки
│   │       └── [componentName]/
│   │           ├── ComponentName.tsx
│   │           └── componentName.module.scss
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Глобальні стилі
├── components/                   # Загальні компоненти
│   └── [componentName]/
│       ├── ComponentName.tsx
│       └── componentName.module.scss
├── config/                      # Конфігураційні файли
│   └── forms/                   # Початкові дані для форм
│       └── initialValues.ts
├── types/                       # TypeScript типи
│   └── index.ts
├── styles/                      # Глобальні SCSS файли
│   ├── variables.scss           # CSS змінні через :root
│   ├── base.scss                # Базові стилі (body, wrapper, тексти)
│   └── mixins.scss              # SCSS mixins
└── utils/                       # Утиліти
    └── validation/              # Схеми валідації Yup
        └── schemas.ts
```

## Правила іменування

### Папки

- **Маленькі літери** з підкресленнями для складних назв
- Приклади: `user_profile`, `form_components`, `button`, `pageTransition`

### Файли компонентів

- **React компоненти**: `PascalCase.tsx` (наприклад: `Button.tsx`, `UserProfile.tsx`)
- **SCSS модулі**: `camelCase.module.scss` (наприклад: `button.module.scss`, `userProfile.module.scss`)
- **SCSS глобальні файли**: `lowercase.scss` (наприклад: `variables.scss`, `base.scss`)


### Імпорти

Порядок імпортів (автоматично сортується Prettier):

1. **React** (завжди перший)
2. **Next.js** імпорти
3. **Зовнішні бібліотеки** (framer-motion, yup тощо)
4. **Внутрішні через аліаси** (@/components, @/utils, @/types, @/config, @/styles)
5. **Локальні компоненти** (./components, ../components)
6. **Статичні асети** (зображення, SVG)
7. **Стилі** (завжди останні: .module.scss, .scss, .css)

Приклад:
```typescript
import { ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import Button from '@/components/button/Button';

import PageHeader from './components/header/Header';

import styles from './page.module.scss';
```

### CSS/SCSS властивості

Порядок CSS властивостей (автоматично сортується Stylelint):

1. **Custom properties** (CSS змінні: `--*`)
2. **Positioning** (position, top, right, bottom, left, z-index)
3. **Box Model** (display, width, height, margin, padding, border)
4. **Typography** (font, font-size, color, text-align)
5. **Visual** (background, box-shadow, opacity)
6. **Misc** (cursor, transition, transform, overflow)

Приклад:
```scss
.button {
  // Box Model
  padding: var(--spacing-sm) var(--spacing-md);
  
  // Typography
  font-size: var(--font-size-base);
  color: var(--color-text);
  
  // Visual
  background-color: var(--color-primary);
  border-radius: 4px;
  
  // Misc
  cursor: pointer;
  transition: all var(--transition-base);
}
```

## Компоненти

### Структура компонента

Кожен компонент має свою папку з файлами:

```
components/
└── button/
    ├── Button.tsx              # Компонент
    └── button.module.scss      # Модульні стилі
```

### Створення нового компонента

1. Створити папку з маленької літери: `src/components/newComponent/`
2. Створити файл компонента з великої літери: `NewComponent.tsx`
3. Створити файл стилів: `newComponent.module.scss`
4. Використовувати модульні стилі для компонента

### Загальні vs Сторінкові компоненти

- **Загальні компоненти** (`src/components/`) - використовуються на багатьох сторінках
- **Сторінкові компоненти** (`src/app/(main)/components/`) - використовуються тільки на конкретній сторінці

## Форми та валідація

### Валідація

Використовується **Yup** для валідації форм.

Схеми валідації зберігаються в `src/utils/validation/schemas.ts`:

```typescript
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Невірний формат email').required('Email обов\'язковий'),
  password: yup.string().min(8, 'Мінімум 8 символів').required('Пароль обов\'язковий'),
});
```

### Початкові значення форм

Початкові значення зберігаються в `src/config/forms/initialValues.ts`:

```typescript
export const loginInitialValues = {
  email: '',
  password: '',
};
```

## Стилі

### CSS змінні

Всі CSS змінні визначені в `src/styles/variables.scss` через `:root`:

```scss
:root {
  --color-primary: #000000;
  --spacing-md: 1rem;
  --font-size-base: 1rem;
}
```

### Модульні стилі

Використовувати модульні стилі для компонентів:

```typescript
import styles from './component.module.scss';

<div className={styles.container}>...</div>
```

### Глобальні стилі

Глобальні стилі для body, wrapper, базових елементів в `src/styles/base.scss`.

### Mixins

SCSS mixins зберігаються в `src/styles/mixins.scss`:

```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Layout структура

Проєкт підтримує кілька layout груп:

- `(main)` - основний layout група

**Важливо:** Анімований перехід між сторінками працює для **всіх сторінок** проєкту автоматично через root layout. Він налаштований в `src/app/layout.tsx` і не потребує додаткового налаштування в групах маршрутів.

Для створення нового layout:
1. Створити нову групу маршрутів: `src/app/(newLayout)/`
2. Створити `layout.tsx` в цій групі
3. Додати сторінки в цю групу

Анімація переходів буде працювати автоматично для всіх сторінок, незалежно від layout групи.

## Анімації

Використовується **Framer Motion** для анімацій переходів між сторінками.

Компонент `PageTransition` автоматично додає анімацію:
- Стара сторінка йде вгору
- Нова сторінка з'являється знизу

## Інструменти розробки

### Prettier

Автоматично форматує код при збереженні файлу.

**Команди:**
```bash
npm run format          # Форматувати всі файли
npm run format:check    # Перевірити форматування
```

### ESLint

Перевіряє якість JavaScript/TypeScript коду.

**Команди:**
```bash
npm run lint            # Перевірити код
```

### Stylelint

Перевіряє та сортує CSS/SCSS властивості.

**Команди:**
```bash
npm run lint:styles          # Перевірити та виправити стилі
npm run lint:styles:check    # Тільки перевірка
```

## Налаштування VS Code/Cursor

Проєкт включає налаштування для автоматичного форматування:

- `.vscode/settings.json` - налаштування редактора
- Автоматичне форматування при збереженні
- Автоматичне сортування імпортів
- Автоматичне сортування CSS властивостей

**Необхідні розширення:**
- Prettier - Code formatter
- ESLint
- Stylelint

## Аліаси шляхів

У проєкті налаштовані аліаси для зручного імпорту:

```typescript
import Button from '@/components/button/Button';
import { FormValues } from '@/types';
import { loginSchema } from '@/utils/validation/schemas';
import { loginInitialValues } from '@/config/forms/initialValues';
```

Доступні аліаси (див. `tsconfig.json`):
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@styles/*` → `src/styles/*`
- `@config/*` → `src/config/*`
- `@types/*` → `src/types/*`
- `@utils/*` → `src/utils/*`

## SVG як компоненти

Проєкт налаштований для імпорту SVG як React компонентів:

```typescript
import Logo from './logo.svg';

<Logo />
```

Або як URL:
```typescript
import logoUrl from './logo.svg?url';

<img src={logoUrl} alt="Logo" />
```

## Шрифти

Використовується шрифт **Inter** з Google Fonts, підключений через `next/font/google`.

## Git workflow

1. Створюйте гілки від `main`
2. Назви гілок: `feature/назва-фічі` або `fix/назва-бага`
3. Перед комітом запускайте:
   ```bash
   npm run format
   npm run lint
   npm run lint:styles
   ```

## Додаткова інформація

- **Next.js**: [Документація](https://nextjs.org/docs)
- **React**: [Документація](https://react.dev)
- **TypeScript**: [Документація](https://www.typescriptlang.org/docs)
- **Framer Motion**: [Документація](https://www.framer.com/motion)
- **Yup**: [Документація](https://github.com/jquense/yup)

## Питання?

Якщо виникли питання щодо структури проєкту або правил кодування, зверніться до команди розробки.
