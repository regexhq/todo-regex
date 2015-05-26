/*!
 * todo-regex <https://github.com/regexps/todo-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function () {
  return /<!--[ \t]*@?(?:todo|fixme):?[ \t]*([^\n]+)[ \t]*-->|(?:@|\/\/[ \t]*)?(?:todo|fixme):?[ \t]*([^\n]+)/i;
};
