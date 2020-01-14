pipeline{

    agent any
tools {
      // Install the Maven version configured as "M3" and add it to the path.
      maven "Apache Maven 3.6.3"
   }
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