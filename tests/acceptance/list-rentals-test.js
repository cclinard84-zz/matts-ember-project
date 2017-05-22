import { test } from 'qunit';
import moduleForAcceptance from 'matts-ember-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function(assert){
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('should link to information about the company', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to About');
  });
});

test('should link to contact information', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should navigate to Contact');
  });
});

test('should navigate from about to rentals', function(assert){
  visit('/');
  click('a:contains("About")');
  click('a:contains("Super Rentals")');
  andThen(function(){
    assert.equal(currentURL(), '/rentals', 'should navigate to rentals');
  });
});
