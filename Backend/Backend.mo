import Iter from "mo:base/Iter";

actor MedInsure {
  // Define Data Types
  type Policy = {
    owner: Principal;
    plan: Text;
    monthlyFee: Nat;
    term: Nat;
    conditions: Text;
  };

  type Claim = {
    claimant: Principal;
    policyNumber: Text;
    description: Text;
    medicalReports: Blob;
    receipts: Blob;
    status: Text;
  };

  type Loan = {
    borrower: Principal;
    amount: Nat;
    apy: Float;
    status: Text;
  };

  // Storage
  stable var policies: [Policy] = [];
  stable var claims: [Claim] = [];
  stable var loans: [Loan] = [];
  stable var pooledFunds: Nat = 0;

  // Function: Buy a Policy
  public shared(msg) func buyPolicy(
    plan: Text,
    monthlyFee: Nat,
    term: Nat,
    conditions: Text
  ): async Text {
    let policy = {
      owner = msg.caller;
      plan;
      monthlyFee;
      term;
      conditions;
    };
    policies := Array.append(policies, [policy]);
    return "Policy purchased successfully.";
  };

  // Function: File a Claim
  public shared(msg) func fileClaim(
    policyNumber: Text,
    description: Text,
    medicalReports: Blob,
    receipts: Blob
  ): async Text {
    let claim = {
      claimant = msg.caller;
      policyNumber;
      description;
      medicalReports;
      receipts;
      status = "Pending";
    };
    claims := Array.append(claims, [claim]);
    return "Claim filed successfully.";
  };

  // Function: Borrow Funds
  public shared(msg) func borrowFunds(amount: Nat, apy: Float): async Text {
    if (amount > pooledFunds) {
      return "Insufficient funds in the pool.";
    };
    let loan = {
      borrower = msg.caller;
      amount;
      apy;
      status = "Active";
    };
    loans := Array.append(loans, [loan]);
    pooledFunds -= amount;
    return "Loan approved and disbursed.";
  };

  // Function: Repay Loan
  public shared(msg) func repayLoan(amount: Nat): async Text {
    let loanOpt = Iter.find(loans.vals(), func (loan) { loan.borrower == msg.caller and loan.status == "Active" });
    switch (loanOpt) {
      case (null) return "No active loans found.";
      case (?loan) {
        if (amount < loan.amount) {
          return "Insufficient repayment amount.";
        };
        loans := Array.filter(loans, func (l) { l != loan });
        pooledFunds += loan.amount;
        return "Loan repaid successfully.";
      };
    };
  };

  // Function: View Policies
  public query func viewPolicies(): async [Policy] {
    return policies;
  };

  // Function: View Claims
  public query func viewClaims(): async [Claim] {
    return claims;
  };

  // Function: View Active Loans
  public query func viewActiveLoans(): async [Loan] {
    return Array.filter(loans, func (loan) { loan.status == "Active" });
  };

  // Function: View Pooled Funds
  public query func viewPooledFunds(): async Nat {
    return pooledFunds;
  };

  // Function: Add Funds to Pool
  public shared(msg) func addFunds(amount: Nat): async Text {
    if (msg.caller != Principal.fromText("your-admin-principal")) {
      return "Only admin can add funds.";
    };
    pooledFunds += amount;
    return "Funds added successfully.";
  };
};
