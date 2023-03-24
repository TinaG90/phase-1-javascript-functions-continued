// code your solution here
function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun()

function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(Flare="*"){
    return function (param="special"){
        return (`You are ${Flare}${param}${Flare}!`);
        }
    }