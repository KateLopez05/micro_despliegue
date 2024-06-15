pipeline {
    agent any

    stages{
        stages('Clonacion del repositorio'){
            //Clonación del respositorio
            steps {
                git branch: 'main', url: 'https://github.com/KateLopez05/micro_despliegue.git'
            }
        }

        /* OPCIONAL
        stages('Construccion de imagen de docker'){
            //Construccion de las imagenes de docker
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        docker.build('')
                    }
                }
            }
        }*/

        stages('Despliegue de los containers de docker'){
            //Despliegue de los containers de docker
            steps {
                script{
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]){
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }
    
    post {
        always{
            //EMAIL de confirmación
            
        }
    }
}