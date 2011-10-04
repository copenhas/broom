
dist: clean lint tags
	cp -r src dist

lint:
	jshint src/bin/broom
	jshint src/**/*.js

test: 
	node_modules/.bin/vows spec/**/*.js --spec

tags:
	jsctags src/lib/

clean: 
	rm -rf dist

init:
	npm install vows
	npm install dust 

link: dist
	(cd dist/; npm link)

unlink:
	(cd dist/; npm unlink)
