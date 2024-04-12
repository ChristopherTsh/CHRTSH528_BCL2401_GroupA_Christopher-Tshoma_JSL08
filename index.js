// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

//define a class named BankBranch 
let bankBranchInstance = null ;

class BankBranch {

   
constructor(branchInfo) {

    if (!bankBranchInstance){

    this.branchInfo = this.branchInfo;
    bankBranchInstance = this ;
}

return bankBranchInstance
}

getBranchInfo (){
    return this.branchInfo;
}

}

const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Output: Main Street Branch


const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Output: Main Street Branch (since only one instance exists)


console.log(branchA === branchB);

