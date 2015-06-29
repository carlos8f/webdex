all: clean
	./node_modules/.bin/electron-packager app WebDEX --platform=darwin --arch=x64 --version=0.28.3 --out=build
	rm -Rf /Applications/WebDEX.app
	cp -Rf ./build/WebDEX.app /Applications
	open /Applications/WebDEX.app

clean:
	rm -Rf build/*
