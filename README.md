# Git Workshop

Taller de Git (2026-2) con enfoque en fundamentos, internos y herramientas avanzadas.


- [Taller de Git (sitio web)](https://madmti.github.io/git-workshop/)
- [Laboratorios Taller de Git (repositorio de ejercicios)](https://github.com/madmti/git-workshop-labs)

## Indice de clases

- [CLASE 01 — Introduccion a VCS + Fundamentos Git](https://madmti.github.io/git-workshop/clases/01-historia-vcs/)
- [CLASE 02 — Flujo basico de Git](https://madmti.github.io/git-workshop/clases/02-flujo-basico/)
- [CLASE 03 — Internals pt.1: El modelo de objetos](https://madmti.github.io/git-workshop/clases/03-git-internals-p1/)
- [CLASE 04 — Internals pt.2: Referencias, HEAD y el DAG](https://madmti.github.io/git-workshop/clases/04-git-internals-p2/)
- [CLASE 05 — Branch & Merge en profundidad](https://madmti.github.io/git-workshop/clases/05-branches/)
- [CLASE 06 — Flujos remotos + Rebase](https://madmti.github.io/git-workshop/clases/06-remotos/)
- [CLASE 07 — Herramientas avanzadas pt.1: Organizacion](https://madmti.github.io/git-workshop/clases/07-interactividad/)
- [CLASE 08 — Herramientas avanzadas pt.2: Analisis y Reescritura](https://madmti.github.io/git-workshop/clases/08-restauracion/)
- [EXTRA 01 — Tags](https://madmti.github.io/git-workshop/clases/09-extra/)
- [EXTRA 02 — Refspec](https://madmti.github.io/git-workshop/clases/10-extra-2/)
- [EXTRA 03 — Git Hooks (borrador)](https://madmti.github.io/git-workshop/clases/11-extra-3/)

## Resumen por clase

| Clase | Titulo | Resumen | Duracion | Dificultad | Ejercicios |
|---|---|---|---|---|---|
| CLASE 01 | Introduccion a VCS + Fundamentos Git | Evolucion de los VCS y fundamentos de Git (snapshots, areas, configuracion) | 40m | facil | 2 |
| CLASE 02 | Flujo basico de Git | init, clone, add, commit, log, status, diff, restore, aliases | 1h | facil | 3 |
| CLASE 03 | Internals pt.1: El modelo de objetos | blob, tree, commit, tag y comandos de fontaneria | 40m | dificil | 0 |
| CLASE 04 | Internals pt.2: Referencias, HEAD y el DAG | refs, HEAD simbolico, packfiles, reflog, fsck, variables de entorno | 1h | dificil | 0 |
| CLASE 05 | Branch & Merge en profundidad | Ramificacion, fusion, conflictos y gestion de ramas | 1h | media | 0 |
| CLASE 06 | Flujos remotos + Rebase | Ramas remotas, tracking, fetch/pull/push, rebase y sus peligros | 1h | dificil | 0 |
| CLASE 07 | Herramientas avanzadas pt.1: Organizacion | Seleccion de revision, rangos, cherry-pick, add -p, stash y clean | 1h | dificil | 0 |
| CLASE 08 | Herramientas avanzadas pt.2: Analisis y Reescritura | blame, grep, pickaxe, amend, rebase interactivo, reset, bisect y filter-branch | 1h | dificil | 0 |
| EXTRA 01 | Tags | Etiquetado ligero y anotado, compartir etiquetas y checkout por etiqueta | 15m | facil | 0 |
| EXTRA 02 | Refspec | Especificaciones de referencia y mapeos con ramas remotas | 15m | media | 0 |
| EXTRA 03 | Git Hooks (borrador) | Hooks del lado del cliente: pre-commit, commit-msg, pre-push | 30m | media | 0 |

## Desarrollo local

Para levantar el sitio en local:

```bash
pnpm install
pnpm dev
```
