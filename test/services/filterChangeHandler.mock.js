describe('filterChangeHandler factory', function() {
    var filterChangeHandler;

    // Before each test load our ABC module
    beforeEach(angular.mock.module('ABC'));

    // Before each test set our injected Users factory (_FilterService_) to our local Users variable
    beforeEach(inject(function(_filterChangeHandler_) {
        filterChangeHandler = _filterChangeHandler_;

    }));

    // A simple test to verify the Users factory exists
    it('filterChangeHandler should exist', function() {

        expect(filterChangeHandler).toBeDefined();
    });
    it('filterChangeHandler:filtersDataPopulation function should exist', function() {

        expect(filterChangeHandler.filtersDataPopulation).toBeDefined();
        expect(filterChangeHandler.filtersDataPopulation).toEqual(jasmine.any(Function))
    });

    it('filterChangeHandler:parse function should exist', function() {

        expect(filterChangeHandler.parse).toBeDefined();
        expect(filterChangeHandler.parse).toEqual(jasmine.any(Function))
    });



    it('expect callSomeOtherFunction1 to be called', function() {
        spyOn(filterChangeHandler, 'parse');
        filterChangeHandler.parse(1, 2, 3, 4);
        expect(filterChangeHandler.parse).toHaveBeenCalled();
    });

});