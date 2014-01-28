angular.module('psFixedsticky', [])
.directive("fixedsticky", function(){
    return {
        restrict: 'AC',
        scope: {
            fixedsticky: '@',
            fixedstickyactive: "@"
        },
        link: function(scope,element,attrs){
            var parent = element.parent();
            var fixedon = "top";
            var defaultPx = {};
            if(scope.fixedsticky !== undefined){
                if(scope.fixedsticky.toLowerCase() == "top" || scope.fixedsticky.toLowerCase() == "bottom"){
                    fixedon = scope.fixedsticky.toLowerCase();
                }
                else fixedon = "top";
            }
            defaultPx[fixedon] = isNaN(element.css(fixedon)) ? 0 : element.css(fixedon);
            if(isNaN(parent.data("stickyStack" + fixedon))) parent.data("stickyStack" + fixedon, defaultPx[fixedon]);
            element.css(fixedon,parent.data("stickyStack"+fixedon));
            parent.data("stickyStack"+fixedon, parent.data("stickyStack"+fixedon) + element[0].clientHeight);
            if("fixedstickyactive" in attrs){
                if(eval(scope.fixedstickyactive)){
                   element.fixedsticky();
                }
            }
            else {
                 element.fixedsticky();
            }
        }
    };
});
