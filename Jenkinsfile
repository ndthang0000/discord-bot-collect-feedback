pipeline{
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/ndthang0000/discord-bot-collect-feedback'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        
        stage('Install pm2'){
            steps {
                sh 'npm install pm2 -g'
            }
        }
        
        stage('Deploy'){
            steps {
                sh 'pm2 start index.js'
            }
        }
    }
}