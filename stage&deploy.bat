@echo off
color a
prompt Arrow023$g
cls
echo "Starting NPM build...."
START /B /WAIT cmd /c npm run-script build
read "Press any key to continue...."
echo "NPM build ready...."
git add .
echo "Enter commit Message:"
read commitMsg
git commit -m "$commitMsg"
git push -u origin master
echo "Source code pushed..."
echo "Distribution copy started...."
START /B /WAIT cmd /c xcopy build ..\dist /i /e
echo "Dist copy completed...."
git add .
echo "Enter commit message for dist :"
read distMsg
git commit -m "$distMsg"
git push -u origin master