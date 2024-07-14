pipeline {
    agent any
    
    stages {
        stage('Install NodeModules') {
            steps {
                bat 'npm install --legacy-peer-deps'
            }
        }
        
        stage('Build') {
            steps {
                bat 'npm run-script build'
            }
        }
        
        stage('Move Distribution') {
            steps {
                echo "Moving Distribution to staging......."
                bat 'xcopy build\\ E:\\DevOps\\Staging\\portfolio\\dist /i /e /Y'
                echo "Staging completed...."
            }
        }

        stage('Push Distribution') {
            steps {
                bat 'cd /d E:\\DevOps\\Staging\\portfolio\\dist'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global --add safe.directory E:/DevOps/Staging/portfolio/dist'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.email "piyushchohan48@gmail.com"'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.name "arrow023"'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" add .'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" commit -m "Build-%BUILD_NUMBER%"'
                bat 'echo "Pushing Build-%BUILD_NUMBER% to GitHub...."'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" push -u origin master --force'
                bat 'echo "Build pushed successfully....."'
                bat 'echo "**************** Netlify push completed ****************"'
            }
        }
    }
}