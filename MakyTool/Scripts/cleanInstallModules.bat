@echo off

cd %PHOTOBOMB_DIR%

if exist "node_modules" (
	npm cache clean --force
	npm install
) else (
	npm install
)
