import {Experience} from "../components/experience/experience.model";

export const EXPERIENCE_ITEMS: Experience[] = [
  {
    title: 'Software Engineer',
    location: '@Avrios International AG',
    dateFrom: 'July 2019',
    dateTo: 'Present',
    description: [' - implement new microservice that help customers have more control on the fleet costs by providing them a tool where they can approve, reject and compare invoices with their associated vehicle contract.',
      ' - implement new reports in order to provide customers with more insights on its fleet mileage, fuel, co2 emissions and where the fleet costs can be reduced.',
      ' - help with importing customer files in order to create new vehicles and drivers into the system.'
    ],
    tags: ['Java 8', 'Spring', 'AWS S3', 'Hibernate', 'PostgreSql', 'Flyway', 'JUnit', 'Mockito', 'CircleCi']
  },
  {
    title: 'Software Engineer',
    location: '@Payconiq',
    dateFrom: 'Sep 2017',
    dateTo: 'May 2019',
    description: [' - implementing microservices with Spring Boot and Java8',
      ' - helped improved the way api keys were generated to merchants with the creation of 2 new microservices:',
      '     • one responsible to generate permanently lived api keys',
      '     • and another one responsible for protecting the internal applications with secure authentication/authorization mechanisms and delegating the validated call to the respective internal microservice to handle the request, using Netflix Zuul edge service library',
      ' - helped migrating part of the services to gitlab-ci pipeline',
      ' - helped with designing sequence diagrams of different payment types (customer to customer, customer to merchant)',
      ' - helped with development of a microservice that’s at the core of Payconiq’s payments, service responsible to support merchants and customers with payment flows of creation, cancelation, search.',
      ' - helped fixing bugs and releasing into production'
    ],
    tags: ['Java 8', 'Spring Boot', 'Netflix Zuul', 'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'JUnit', 'Mockito', 'Cucumber', 'Jenkins', 'GitlabCI', 'Kibana', 'Microservices']
  },
  {
    title: 'Software Engineer',
    location: '@CompuGroup Medical AG (CGM)',
    dateFrom: 'Oct 2016',
    dateTo: 'Sep 2017',
    description: [' - helped develop and maintain a frontend application used by patients to store and process their medical data (eg: blood pressure, pulse, weight...) in a secure cloud platform.',
      '​ - work on a chart rendering functionality which allows users to visualize their medical data values in an animated and customizable way using chartJS library',
      ' - helped to develop an interface for the users in which they could store, edit, download and view large medical documents (eg: images, identity cards, medical files, pdfs...)'
    ],
    tags: ['AngularJS 1.5', 'Typescript', 'SASS', 'HTML5', 'CSS', 'Bootstrap', 'Lodash', 'Grunt', 'Bower', 'Git', 'Gitlab', 'IntelliJ']
  },
  {
    title: 'Software Engineer',
    location: '@Endava',
    dateFrom: 'March 2014',
    dateTo: 'Oct 2016',
    description: [' - helped developing and maintaining a big data application that predicts the future energy use based on past consumption trends and weather information',
      ' - helped processing tens of millions of energy consumption​ ​bills and applied linear regression to predict usage patterns based on weather patterns using spark batch processing, in order to project which users will have higher consumption than usual by the end of the month and by how much.',
      ' - helped create a service which integrated SendGrid bulk email service, in order to send customized emails to customers ​projected to receive a bill with 30% higher than usual.'
    ],
    tags: ['Java 7', 'Spring', 'Spark', 'AWS', 'Docker', 'Docker Compose', 'Google Protobuf', 'Guava', 'PostgreSql', 'Cassandra', 'Junit', 'Mockito', 'Cucumber', 'Zookeeper', 'Mesos', 'Marathon', 'Kibana', 'Git', 'Intellij', 'Maven']
  }
];
