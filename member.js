function skillsMember(){
    return{
        restrict:'E',
        templateUrl:'modules/skills/view/skillsMember.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}