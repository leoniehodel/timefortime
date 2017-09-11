import {Template} from 'meteor/templating';
import 'body.html';
Template.body.helpers({
  offers: [
    { text: 'Clean your House' },
    { text: 'English lessons' },
    { text: 'Fitness training' },
  ],
});