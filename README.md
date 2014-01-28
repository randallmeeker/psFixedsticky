psFixedsticky
=============

AngularJS Directive (wrapper) for fixedsticky.js https://github.com/filamentgroup/fixed-sticky

Will stick element to top/bottom of screen while contained within its parent. 

**Requires**
- AngularJs
- JQuery
- fixedsticky.js https://github.com/filamentgroup/fixed-sticky


**Use**

    var app = angular.module('plunker', ['psFixedsticky']);
    
    <div class="fixedstiky">Hello World</div>
    or
    <div fixedsticky="top/bottom">Hello World</div>
    
**Stackable** - put more than one in the same parent and they will stack ontop of each other.

**Conditional** - You can add fixedstickyactive (optional) attribute to determine if it should be fixed or not

    <div fixedsticky="top" fixedstickyactive="true/false">Hello World</div>

**Demo**
Please check out the git hub for fixed-sticky https://github.com/filamentgroup/fixed-sticky
Use of this directive can be found here http://plnkr.co/edit/3eNlQP1pwUlfOUSbLcpA?p=preview
