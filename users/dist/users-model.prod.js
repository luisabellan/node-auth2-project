"use strict";function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,a=!1,i=void 0;try{for(var s,d=e[Symbol.iterator]();!(n=(s=d.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==d.return||d.return()}finally{if(a)throw i}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var bcrypt=require("bcryptjs"),db=require("../database/config");function add(r){var t,n,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(bcrypt.hash(r.password,14));case 2:return r.password=e.sent,e.next=5,regeneratorRuntime.awrap(db("users").insert(r));case 5:return t=e.sent,n=_slicedToArray(t,1),a=n[0],e.abrupt("return",findById(a));case 9:case"end":return e.stop()}})}function find(){return db("users").select("id","username","department")}function findBy(e){return db("users").select("id","username","password","department").where(e)}function findById(e){return db("users").select("id","username","password","department").where({id:e}).first()}function update(e,r){return db("users").where({id:e}).update(r)}function deleteUser(e){return db("users").where("id",e).del()}module.exports={add:add,find:find,findBy:findBy,findById:findById,deleteUser:deleteUser,update:update};