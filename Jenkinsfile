def branches = ['dev', 'staging', 'prod'];

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout completed'
            }
        }

        stage('Build') {
            steps {
                script {
                    if (branches.contains(BRANCH_NAME)) {
                        sh 'docker-compose --env-file env/${BRANCH_NAME}.env build'
                    } else {
                        sh 'docker-compose --env-file env/ci.env build'
                    }
                }

                echo 'Build completed'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (branches.contains(BRANCH_NAME)) {
                        sh 'docker-compose --env-file env/${BRANCH_NAME}.env up -d'
                    } else {
                        sh 'docker-compose --env-file env/ci.env up -d'
                    }
                }

                echo 'Deploy completed'
            }
        }
    }
}
