@echo off
color a
prompt Arrow023$g
cls
echo "****************** Starting NPM build *****************"
START /B /WAIT cmd /c npm run-script build
color a
echo "***************** NPM build ready ******************"
git add .
set /p commitMsg="Enter commit Message: "
git commit -m "%commitMsg%"
git push -u origin master --force
echo "--------------- Source code pushed to base repo ----------------------"
rmdir /s /q build
echo "Distribution copy started...."
START /B /WAIT cmd /c xcopy build ..\dist /i /e /Y
echo "Dist copy completed...."
cd ..\dist
git add .
echo "Enter commit message for dist :"
set /p distMsg="Enter commit Message: "
git commit -m "%distMsg%"
git push -u origin master --force
echo "**************** Netlify push completed ****************"
pause
exit