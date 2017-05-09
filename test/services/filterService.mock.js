describe('filterService factory', function() {
    var filterService;

    // Before each test load our ABC module
    beforeEach(angular.mock.module('ABC'));

    // Before each test set our injected Users factory (_FilterService_) to our local Users variable
    beforeEach(inject(function(_filterService_) {
        filterService = _filterService_;

    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {

        expect(filterService).toBeDefined();
    });
});