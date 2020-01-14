$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/resources/features/scenario-outlines.feature");
formatter.feature({
  "name": "Scenario Outlines feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "\u003cscen_out_row_num\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Step from \u0027\u003cscen_out_row_num\u003e\u0027 in \u0027scenario-outlines\u0027 feature file",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "scen_out_row_num"
      ]
    },
    {
      "cells": [
        "Scenario Outline Row 1"
      ]
    },
    {
      "cells": [
        "Scenario Outline Row 2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario Outline Row 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Step from \u0027Scenario Outline Row 1\u0027 in \u0027scenario-outlines\u0027 feature file",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.step(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Outline Row 2",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Step from \u0027Scenario Outline Row 2\u0027 in \u0027scenario-outlines\u0027 feature file",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.step(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/resources/features/scenarios.feature");
formatter.feature({
  "name": "Scenarios feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario Number One",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Step from \u0027Scenario 1\u0027 in \u0027scenarios\u0027 feature file",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.step(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Number Two",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Step from \u0027Scenario 2\u0027 in \u0027scenarios\u0027 feature file",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.step(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});