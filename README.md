# OSTIS Course Project

Курсовой проект на базе [OSTIS Metasystem](https://github.com/ostis-ai/ostis-metasystem) с React-интерфейсом.

## Quick Start

> **Note:** OSTIS Metasystem natively on Windows isn't supported. Use WSL.

### 1. Clone

```sh
git clone <repo-url>
cd git-course-ostis
```

### 2. Install dependencies

**sc-web (WSL):**

```sh
cd ostis-metasystem/platform-dependent-components/interface/install/sc-web
python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt
```

**Python problem solver (WSL):**

```sh
cd ostis-metasystem
python3 -m venv platform-dependent-components/problem-solver/py/.venv
source platform-dependent-components/problem-solver/py/.venv/bin/activate
pip3 install -r platform-dependent-components/problem-solver/py/requirements.txt
```

**React frontend (Windows):**

```sh
cd react-sc-web
npm install
cp .env.example .env
```

### 3. Build knowledge base

Запустить sc-machine:

```sh
cd ostis-metasystem
LD_LIBRARY_PATH=./install/sc-machine/lib ./install/sc-machine/bin/sc-machine \
  -s kb.bin -c ostis-metasystem.ini \
  -e "install/sc-machine/lib/extensions;install/sc-component-manager/lib/extensions;install/scp-machine/lib/extensions;install/problem-solver/lib/extensions"
```

Когда появится `Signal handler`, ввести в консоли sc-machine:

```
components init
components install sc_web
```

### 4. Run system

| Терминал | Операционка | Команда |
|----------|-------------|---------|
| 1 | WSL | `cd ostis-metasystem && LD_LIBRARY_PATH=./install/sc-machine/lib ./install/sc-machine/bin/sc-machine -s kb.bin -c ostis-metasystem.ini -e "install/sc-machine/lib/extensions;install/sc-component-manager/lib/extensions;install/scp-machine/lib/extensions;install/problem-solver/lib/extensions"` |
| 2 | WSL | `cd ostis-metasystem/platform-dependent-components/interface/install/sc-web && source .venv/bin/activate && python3 server/app.py --allowed_origins=http://localhost:3000` |
| 3 | WSL | `cd ostis-metasystem && source platform-dependent-components/problem-solver/py/.venv/bin/activate && python3 platform-dependent-components/problem-solver/py/server.py` |
| 4 | Windows | `cd react-sc-web && npm run start` |

Открыть: `http://localhost:3000/`

## Порты

| Сервис | Порт |
|--------|------|
| sc-machine (WebSocket) | 8090 |
| sc-web (HTTP) | 8000 |
| React | 3000 |
