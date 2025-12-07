pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Kousar0904/jenkins-docker.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running test....'
            }
        }
    }
}