# Git Workshop

Taller de Git (2026-2) con enfoque en fundamentos, internos y herramientas avanzadas.


- [Taller de Git (sitio web)](https://madmti.github.io/git-workshop/)
- [Laboratorios Taller de Git (repositorio de ejercicios)](https://github.com/madmti/git-workshop-labs)

## Indice de clases

- [CLASE 01 — Introduccion a VCS + Fundamentos Git](https://madmti.github.io/git-workshop/clases/01-historia-vcs/)
- [CLASE 02 — Flujo basico de Git](https://madmti.github.io/git-workshop/clases/02-flujo-basico/)
- [CLASE 03 — Internals pt.1: El modelo de objetos](https://madmti.github.io/git-workshop/clases/03-git-internals-p1/)
- [CLASE 04 — Internals pt.2: Referencias, HEAD y el DAG](https://madmti.github.io/git-workshop/clases/04-git-internals-p2/)
- [CLASE 05 — Internals pt.3: Mantenimiento y Recuperacion](https://madmti.github.io/git-workshop/clases/05-git-internals-p3/)
- [CLASE 06 — Branch & Merge en profundidad](https://madmti.github.io/git-workshop/clases/06-branches/)
- [CLASE 07 — Flujos de trabajo y Ramas Remotas](https://madmti.github.io/git-workshop/clases/07-remotos/)
- [CLASE 08 — Rebase: Reorganizar el Trabajo Realizado](https://madmti.github.io/git-workshop/clases/08-rebase/)
- [CLASE 09 — Seleccion de revision y rangos](https://madmti.github.io/git-workshop/clases/09-seleccion-rangos/)
- [CLASE 10 — Organizacion interactiva, stash y limpieza](https://madmti.github.io/git-workshop/clases/10-organizacion/)
- [CLASE 11 — Analisis y Reescritura](https://madmti.github.io/git-workshop/clases/11-analisis-reescritura/)
- [CLASE 12 — Reiniciar Desmitificado](https://madmti.github.io/git-workshop/clases/12-reiniciar-desmitificado/)
- [EXTRA 01 — Tags](https://madmti.github.io/git-workshop/clases/10-extra/)
- [EXTRA 02 — Refspec](https://madmti.github.io/git-workshop/clases/11-extra-2/)
- [EXTRA 03 — Git Hooks (borrador)](https://madmti.github.io/git-workshop/clases/12-extra-3/)

## Resumen por clase

| Clase | Titulo | Resumen | Duracion | Dificultad | Ejercicios |
|---|---|---|---|---|---|
| CLASE 01 | Introduccion a VCS + Fundamentos Git | Evolucion de los VCS y fundamentos de Git (snapshots, areas, configuracion) | 40m | facil | 2 |
| CLASE 02 | Flujo basico de Git | init, clone, add, commit, log, status, diff, restore, aliases | 1h | facil | 3 |
| CLASE 03 | Internals pt.1: El modelo de objetos | blob, tree, commit, tag y comandos de fontaneria | 40m | dificil | 2 |
| CLASE 04 | Internals pt.2: Referencias, HEAD y el DAG | refs, HEAD simbolico, etiquetas, referencias a remotos y packfiles | 30m | dificil | 2 |
| CLASE 05 | Internals pt.3: Mantenimiento y Recuperacion | gc, reflog, fsck, eliminar archivos grandes del historial y variables de entorno | 30m | dificil | 2 |
| CLASE 06 | Branch & Merge en profundidad | Ramificacion, fusion, conflictos y gestion de ramas | 1h | media | 3 |
| CLASE 07 | Flujos de trabajo y Ramas Remotas | Flujos ramificados, ramas remotas, tracking, fetch/pull/push y publicacion | 30m | dificil | 2 |
| CLASE 08 | Rebase: Reorganizar el Trabajo Realizado | Rebase basico, --onto, peligros de reescribir trabajo publicado y rebase vs merge | 30m | dificil | 2 |
| CLASE 09 | Seleccion de revision y rangos | Checksum SHA-1 corto, referencias de rama, reflog, ancestros y rangos con doble punto, multiples puntos y triple punto | 20m | media | 2 |
| CLASE 10 | Organizacion interactiva, stash y limpieza | Staging interactivo con git add -i y add -p, stash y clean | 40m | dificil | 2 |
| CLASE 11 | Analisis y Reescritura | Busqueda en el historial con grep y git log -S/-G/-L, y reescritura con amend, rebase interactivo y filter-branch | 30m | dificil | 0 |
| CLASE 12 | Reiniciar Desmitificado | Los tres arboles de Git, reset con --soft/--mixed/--hard, reset con rutas, squash con reset y reset vs checkout | 30m | dificil | 0 |
| EXTRA 01 | Tags | Etiquetado ligero y anotado, compartir etiquetas y checkout por etiqueta | 15m | facil | 0 |
| EXTRA 02 | Refspec | Especificaciones de referencia y mapeos con ramas remotas | 15m | media | 0 |
| EXTRA 03 | Git Hooks (borrador) | Hooks del lado del cliente: pre-commit, commit-msg, pre-push | 30m | media | 0 |

## Desarrollo local

Para levantar el sitio en local:

```bash
pnpm install
pnpm dev
```
