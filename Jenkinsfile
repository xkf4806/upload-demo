pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        echo 'hello world'
        build(job: 'build', quietPeriod: 1)
      }
    }
  }
}