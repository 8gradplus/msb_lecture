get-reveal:
	@if git config --file ../.gitmodules --name-only --get-regexp path | grep -q "slides/reveal.js"; then \
		echo "Submodule 'slides/reveal.js' already exists. Initializing and updating..."; \
		(cd .. && git submodule update --init --recursive slides/reveal.js); \
	else \
		echo "Adding reveal.js submodule..."; \
		(cd .. && git submodule add https://github.com/hakimel/reveal.js.git slides/reveal.js); \
	fi

update-reveal:
	(cd .. && git submodule update --remote --merge)

