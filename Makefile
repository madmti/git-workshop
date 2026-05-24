REPO = madmti/git-workshop
NAME = astro-git-workshop-dev

.PHONY: list start connect stop clean help

help:
	@echo "Usage:"
	@echo "  make list     - Listar Codespaces disponibles"
	@echo "  make start    - Levantar un Codespace en la nube"
	@echo "  make connect  - Conectar al Codespace mediante SSH"
	@echo "  make stop     - Detener el Codespace activo"
	@echo "  make clean    - Eliminar el Codespace"

list:
	@gh codespace list

start:
	@echo "Levantando Codespace en la nube..."
	@gh codespace create -r $(REPO) -b main --displayName $(NAME) || gh codespace resume -c $$(gh codespace list --json name,displayName -q '.[] | select(.displayName=="$(NAME)") | .name')

connect:
	@echo "Abriendo túnel SSH con el Codespace..."
	@gh codespace ssh -c $$(gh codespace list --json name,displayName -q '.[] | select(.displayName=="$(NAME)") | .name')

stop:
	@echo "Buscando Codespace activo para apagar..."
	@@gh codespace stop -c $$(gh codespace list --json name,displayName -q '.[] | select(.displayName=="$(NAME)") | .name')
	@echo "¡Codespace apagado con éxito!"

clean:
	@echo "Eliminando el Codespace..."
	@gh codespace delete -c $$(gh codespace list --json name,displayName -q '.[] | select(.displayName=="$(NAME)") | .name')
