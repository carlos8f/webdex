all: clean
	./node_modules/.bin/electron-packager app Webdex --platform=darwin --arch=x64 --version=0.28.3 --out=build

clean:
	rm -Rf build/*

