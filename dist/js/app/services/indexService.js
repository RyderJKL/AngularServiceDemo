angular.module("serviceDemo").service("broadCastService",["$rootScope",function(e){return{broadCast:function(a,o,r){e.$broadcast(a,{type:o,data:r})}}}]);