'use strict';

describe('wol.version module', function() {
  beforeEach(module('wol.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
