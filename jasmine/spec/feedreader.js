/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 * Please use this documentation: https://jasmine.github.io/2.2/introduction
 * For further using Jasmine.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* DONE: A Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Looping through every feed and ensuring URL are defined and not empty',function(){
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url.length).toBeGreaterThan(0);
            })
         });

        /* DONE: A Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Looping through every feed and ensuring name is defined and not empty',function(){
            allFeeds.forEach(function(item){
                expect(item.name).toBeDefined();
                expect(item.name.length).toBeGreaterThan(0);
            })
         });
    });


    /* DONe: A new test suite named "The menu" */
    describe('The menu',function(){
            /* DONE: A Test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
             it('menu is hidden and performing the hiding of menu element',function(){
                expect($('body').hasClass('menu-hidden')).toBe(true);
             })
             /* DONE: A Test that ensures the menu changes
              * visibility when the menu icon is clicked. This test
              * should have two expectations: does the menu display when
              * clicked and does it hide when clicked again.
              */
              it('menu changes visibility when menu clicked and hide when clicked again',function(){
                let menuIcon = $('.menu-icon-link');
                menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
              });
    });
    /* DONE: A new test suite named "Initial Entries" */
    describe("Initial Entries",function(){
            /* DONE: A Test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */
             beforeEach(function(done){
                loadFeed(0,done);
             });
             it('Atleast single within feed container',function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);
             });
    });
    /* DONE: A news test suite named "New Feed Selection" */
    describe("New Feed Selection",function(){
        let FeedA, FeedB;
        beforeEach(function(done){
            loadFeed(0,function(){
                FeedA = $('.feed').children().text();
                loadFeed(1, function(){
                    FeedB = $('.feed').children().text();
                done();
                });
            });
        });
        /* DONE: A Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('New feed is loaded by loadFeed function',function(done){
            expect(FeedA).not.toBe(FeedB);
            done();
        });
    });    
}());
