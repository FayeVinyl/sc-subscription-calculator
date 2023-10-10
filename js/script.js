// select the element id for the Subscription drop-down list.
var subTypeElement = document.querySelector("#subscription");

//select the element id for the Duration drop-down list
var subDurationElement = document.querySelector("#months");

//subscription cost
var result = document.querySelector(".result");

//default value for the Subscription drop-down list
var subType = "basic";

//default value for the Duration drop-down list
var subDuration = 1;

//reassign the value of subType to the value of the target (option element)
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

//Reassign the value of subDuration to the target value (duration)
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
})

var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //monthly cost of basic, selected by default
    //set monthlyCost value according to sub option
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  //total = product of subDuration and monthlyCost
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};
