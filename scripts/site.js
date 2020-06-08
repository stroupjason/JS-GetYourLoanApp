class LoanApplication {
    Id = create_UUID();
    ApplicationName;
    ApplicationDateofBirth;
    ApplicantAnnualIncome;
    Factors = [];
    LoanPurpose;
    LoanAmount;
}


var LoanApplicationList = [];

//fires when the page loads to initialize the app
window.onload = function() {

    initializeLoans();

    bindLoansToDropDown();
}

//initialize Loans by hard-coding user identities with la (loan applicants) 0,1,2 
function initializeLoans() {
    //create a constructor function
    var la1 = new LoanApplication();
    la1.ApplicantName = "Mr. Jason Stroup Web Developer";
    la1.ApplicantDateOfBirth = new Date(1990, 1, 10);
    la1.ApplicantAnnualIncome = 99000;
    la1.Factors[true, true, true, true];
    la1.LoanPurpose = "I want to purchase a new house with this loan";
    la1.LoanAmount = 450000;

    LoanApplicationList[0] = la1;



    //create a constructor function
    var la2 = new LoanApplication();
    la1.ApplicantName = "Dr. Michelle Gupta, M.D.";
    la1.ApplicantDateOfBirth = new Date(1976, 12, 14);
    la1.ApplicantAnnualIncome = 196250;
    la1.Factors[true, true, true, false];
    la1.LoanPurpose = "Business partner needs a loan to buy new equipment for the medical practice";
    la1.LoanAmount = 30000;

    LoanApplicationList[1] = la2;



    //create a constructor function
    var la3 = new LoanApplication();
    la1.ApplicantName = "Mrs. Stewart Stay at home Mom";
    la1.ApplicantDateOfBirth = new Date(1952, 6, 20);
    la1.ApplicantAnnualIncome = 21000;
    la1.Factors[true, true, true, true];
    la1.LoanPurpose = "Go on vacation (Cruise) for the whole family";
    la1.LoanAmount = 6000;

    LoanApplicationList[2] = la3;

}

//create a function to create a UUID. A universally unique identifier (UUID) is an identifier standard used in software 
//construction. A UUID is simply a 128-bit value. The meaning of each bit is defined by any of several variants. 
//For human-readable display, many systems use a canonical format using hexadecimal text with inserted hyphen characters. 
//For example output: de305d54-75b4-431b-adb2-eb6b9e546014 - example below pulled from the web:

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

console.log(create_UUID());