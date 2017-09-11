import {Template} from 'meteor/templating';
import './body.html';

Template.body.helpers({
  offers: [
    { title: 'Clean your House', description: ' I can clean' },
    { title: 'English lessons', description: 'from a native speaker' },
    { title: 'Fitness training', description: 'I\'ll make you strong' },
  ],
});