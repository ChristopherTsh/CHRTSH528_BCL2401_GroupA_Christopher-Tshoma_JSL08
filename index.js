// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

//define a class named BankBranch 
let bankBranchInstance = null ;
// Define a class named BankBranch
class BankBranch {
 // Constructor function for creating BankBranch instances
   constructor(branchInfo) {
    // Check if bankBranchInstance is null
    if (!bankBranchInstance){
      // If bankBranchInstance is null, initialize it with the current instance
    this.branchInfo = branchInfo;
    bankBranchInstance = this ;
}
// Return the single instance of BankBranch
return bankBranchInstance
}
  // Method to retrieve branch information
getBranchInfo (){
    return this.branchInfo;
}

}
// Create an instance of BankBranch with "Main Street Branch" as branchInfo
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Output: Main Street Branch
// Create another instance of BankBranch with "Second Street Branch" as branchInfo
const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Output: Main Street Branch (since only one instance exists)
// Check if branchA and branchB refer to the same object
console.log(branchA === branchB);

