if "%TEMP%" == "" (
    exit
)

for %%a in ("%TEMP%\*") do del /f /s /q "%%a"
for /D %%a in ("%TEMP%\*") do rmdir /s /q "%%a"
