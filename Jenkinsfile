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
                dir('E:\\DevOps\\Staging\\portfolio\\dist') {
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global --add safe.directory E:/DevOps/Staging/portfolio/dist'
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.email "piyushchohan48@gmail.com"'
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.name "arrow023"'
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" add .'
                    script {
                    def commitExitCode = bat returnStatus: true, script: '"C:\\Program Files\\Git\\bin\\git.exe" commit -m "Build-%BUILD_NUMBER%"'
                    if (commitExitCode == 0) {
                        bat 'echo "Commit successful"'
                        bat 'echo "Pushing Build-%BUILD_NUMBER% to GitHub...."'
                        bat '"C:\\Program Files\\Git\\bin\\git.exe" push -u origin master --force'
                        bat 'echo "Build pushed successfully....."'
                        bat 'echo "**************** Netlify push completed ****************"'
                    } else {
                        bat 'echo "Push Skipped: No changes detected"'
                    }
                }
                }
                //bat 'cd /d E:\\DevOps\\Staging\\portfolio\\dist'
                
                
                
            }
        }
    }
}