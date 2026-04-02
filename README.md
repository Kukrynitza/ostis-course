# OSTIS Course Project

Курсовой проект на базе [OSTIS Metasystem](https://github.com/ostis-ai/ostis-metasystem) с кастомным React-интерфейсом.

## Архитектура

Система состоит из 4 компонентов:

| Компонент | Технология | Порт | Назначение |
|-----------|------------|------|------------|
| sc-machine | C++ | 8090 (WS) | Семантическое ядро, WebSocket сервер |
| sc-web | Python | 8000 (HTTP) | REST API, SCg визуализация |
| React Frontend | TypeScript/React | 3000 | Веб-интерфейс |
| Python Solver | Python | — | Решатель семантических задач |

## Предварительные требования

- **WSL** (Windows Subsystem for Linux) с Ubuntu
- **Python 3** с pip
- **Node.js 18+** с npm
- **C++ компилятор** (g++, cmake) — если собираете sc-machine из исходников

## Структура проекта

```
git-course-ostis/
├── ostis-metasystem/               # OSTIS Metasystem
│   ├── install/                    # Скомпилированные бинарники sc-machine
│   │   ├── sc-machine/bin/         # sc-machine, sc-builder
│   │   ├── sc-machine/lib/         # Библиотеки и расширения
│   │   ├── sc-component-manager/   # Менеджер компонентов
│   │   ├── scp-machine/            # SCP машина
│   │   └── problem-solver/         # Расширения решателя
│   ├── sc-models/                  # Семантические модели (исходники)
│   ├── platform-dependent-components/
│   │   ├── interface/
│   │   │   ├── install/sc-web/     # Python backend (sc-web сервер)
│   │   │   └── react-sc-web/       # React frontend (дубликат для ostis)
│   │   └── problem-solver/
│   │       ├── cxx/                # C++ модули решателя
│   │       └── py/                 # Python решатель
│   ├── ostis-metasystem.ini        # Конфигурация sc-machine
│   └── repo.path                   # Путь к базе знаний
└── react-sc-web/                   # React frontend (рабочая версия)
    ├── src/                        # Исходный код
    ├── webpack/                    # Конфигурация Webpack
    ├── .env.example                # Пример переменных окружения
    └── package.json                # Зависимости npm
```

## Установка зависимостей

### 1. Python backend (sc-web)

```bash
cd ostis-metasystem/platform-dependent-components/interface/install/sc-web
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Python Solver

```bash
cd ostis-metasystem
python3 -m venv platform-dependent-components/problem-solver/py/.venv
source platform-dependent-components/problem-solver/py/.venv/bin/activate
pip install -r requirements.txt
```

### 3. React Frontend

```bash
cd react-sc-web
npm install
```

### 4. Скопировать React в sc-web

```bash
# Скопировать собранный React-интерфейс в sc-web
cp -r react-sc-web/src ostis-metasystem/platform-dependent-components/interface/install/sc-web/client/static/
```

## Генерация базы знаний

Перед первым запуском нужно сгенерировать `kb.bin` из семантических моделей:

```bash
cd ostis-metasystem
# Запустить sc-machine и инициализировать компоненты
LD_LIBRARY_PATH=./install/sc-machine/lib ./install/sc-machine/bin/sc-machine \
  -s kb.bin -c ostis-metasystem.ini \
  -e "install/sc-machine/lib/extensions;install/sc-component-manager/lib/extensions;install/scp-machine/lib/extensions;install/problem-solver/lib/extensions"
```

Когда появится `Signal handler`, ввести в консоли sc-machine:

```
components init
components install sc_web
```

## Запуск системы

Система запускается в **4 терминалах** (WSL + Windows).

### Терминал 1: sc-machine (ядро) — WSL

```bash
cd ostis-metasystem
LD_LIBRARY_PATH=./install/sc-machine/lib ./install/sc-machine/bin/sc-machine \
  -s kb.bin -c ostis-metasystem.ini \
  -e "install/sc-machine/lib/extensions;install/sc-component-manager/lib/extensions;install/scp-machine/lib/extensions;install/problem-solver/lib/extensions"
```

### Терминал 2: sc-web (backend) — WSL

```bash
cd ostis-metasystem/platform-dependent-components/interface/install/sc-web
source .venv/bin/activate
python3 server/app.py --allowed_origins=http://localhost:3000
```

### Терминал 3: React (frontend) — Windows

```bash
cd react-sc-web
npm run start
```

Открыть в браузере: `http://localhost:3000/`

### Терминал 4: Python Solver — WSL

```bash
cd ostis-metasystem
source platform-dependent-components/problem-solver/py/.venv/bin/activate
python3 platform-dependent-components/problem-solver/py/server.py
```

## Переменные окружения

React-интерфейс настраивается через `.env` файл. Скопируйте `.env.example`:

```bash
cd react-sc-web
cp .env.example .env
```

Содержимое `.env`:

```env
PORT=3000
SC_URL="ws://localhost:8090/ws_json"
API_URL="http://localhost:8000"
```

## Сборка для production

### React

```bash
cd react-sc-web
npm install
npm run build
```

### Проверка типов и линтинг

```bash
cd react-sc-web
npm run lint          # ESLint с авто-фиксом
npx tsc --noEmit      # Проверка типов TypeScript
```

## Ссылки

- [OSTIS Metasystem](https://github.com/ostis-ai/ostis-metasystem)
- [react-sc-web](https://github.com/ostis-ai/react-sc-web)
- [OSTIS Documentation](https://ostis-ai.github.io/ostis-metasystem)
