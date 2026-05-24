# Git Workshop

## QuickStart con Zed Editor

Este proyecto está configurado con **Devcontainers** para garantizar que siempre uses **Node 22** y **pnpm 10**, sin importar tu sistema operativo. Puedes desarrollarlo de forma local o en la nube (GitHub Codespaces) usando **Zed**.

#### 1. Preparación (Solo la primera vez)

Asegúrate de tener instalada la CLI de GitHub (`gh`) y haber iniciado sesión:

```bash
brew install gh # O el gestor de tu distro
gh auth login

```

#### 2. Flujo de Trabajo Diario

* **Paso 1: Levantar la máquina remota**

```bash
  make start

```

* **Paso 2: Abrir el túnel SSH**

```bash
  make connect

```

*(Nota: Este comando se quedará escuchando en la terminal. No lo cierres).*

* **Paso 3: Conectar Zed**
1. Abre **Zed** en tu máquina local.
2. Abre la paleta de comandos (`Cmd + Shift + P` en Mac / `Ctrl + Shift + P` en Linux/Windows).
3. Selecciona `projects: open remote`. (Usa "Connect SSH Server")
4. Conéctate a la dirección del túnel que te generó el comando anterior. ¡Listo! El backend de Zed correrá en la nube y tú editarás con la velocidad nativa de Rust.
5. En la terminal de Zed, ejecuta `pnpm dev` para levantar Astro.


* **Paso 4: ¡Apagar para ahorrar horas de GitHub Pro!**
Cuando termines de programar, cierra Zed, presiona `Ctrl + C` en tu terminal local para cerrar el túnel y ejecuta:

```bash
  make stop

```

*(Esto congela el Codespace y detiene el consumo de tu cuota mensual).*
