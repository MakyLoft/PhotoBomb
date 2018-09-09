@echo off

if not defined PHOTOBOMB_DIR (
  setx PHOTOBOMB_DIR %~dp0
)

pause
