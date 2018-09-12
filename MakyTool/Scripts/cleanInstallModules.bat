@echo off

if exist "node_modules" (
	npm cache clean --force
	npm install
) else (
	npm install
)
