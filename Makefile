all: clean
	./node_modules/.bin/electron-packager . Webdex --platform=darwin --arch=x64 --version=0.28.3 --out=build
	rm -Rf /Applications/Webdex.app
	cp -Rf ./build/Webdex.app /Applications
	open /Applications/Webdex.app

clean:
	rm -Rf build/*
