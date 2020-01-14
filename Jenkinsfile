pipeline{

    agent any

    stages {

        stage ('Compile Stage') {

            steps {

                bat "RunInstall.bat"

            }
        }
    stage ('Test Stage') {

            steps {

                bat "RunTest.bat"

            }
        }


        stage ('Cucumber Reports') {

            steps {
                cucumber buildStatus: "UNSTABLE",
                    fileIncludePattern: "**/CucumberTestReport.json",
                    jsonReportDirectory: 'target'

            }

        }

    }

}