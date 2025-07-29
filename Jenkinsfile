pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.44.1-jammy' // образ с Node и Playwright
      args '-u root' // для установки пакетов
    }
  }

  environment {
    HOME = '.'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Playwright tests') {
      steps {
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
      }
    }

    stage('Publish Allure Report') {
      steps {
        allure([
          includeProperties: false,
          jdk: '',
          results: [[path: 'allure-results']],
          reportBuildPolicy: 'ALWAYS'
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
    }
  }
}
