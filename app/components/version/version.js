'use strict';

angular.module('wol.version', [
  'wol.version.interpolate-filter',
  'wol.version.version-directive'
])

.value('version', '0.1');
