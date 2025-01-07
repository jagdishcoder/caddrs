'use client'

import { useState } from 'react'

export default function LoanForm() {
  const [loanDetails, setLoanDetails] = useState({
    loanId: '',
    productName: '',
    customerName: '',
    age: '',
    fatherName: '',
    borrowerAddress: '',
    coBorrowerName: '',
    coBorrowerAge: '',
    coFatherName: '',
    coBorrowerAddress: '',
    branchName: '',
    state: '',
    contactNo: '',
    overdueDays: '',
    disbursementDate: '',
    maturityDate: '',
    totalDisbursedAmount: '',
    rateOfInterest: '',
    emiScheduled: '',
    emiAmount: '',
    tenure: '',
    paidTenure: '',
    balanceTenure: '',
    principalPaid: '',
    interestPaid: '',
    principalOutstanding: '',
    interestOutstanding: '',
    principalOverdue: '',
    interestOverdue: '',
    bounceCharges: '',
    latePaymentCharges: '',
    legalCharges: '',
    totalCharges: '',
    totalOverdue: '',
    foreclosureAmount: '',
    funderName: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', loanDetails)
    alert('Loan information submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Loan Information</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Loan ID */}
            <div>
              <label htmlFor="loanId" className="block text-sm font-medium text-gray-700">Loan ID</label>
              <input
                id="loanId"
                name="loanId"
                type="text"
                required
                value={loanDetails.loanId}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Loan ID"
              />
            </div>
            
            {/* Product Name */}
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                id="productName"
                name="productName"
                type="text"
                required
                value={loanDetails.productName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Product Name"
              />
            </div>
            
            {/* Customer Name */}
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                required
                value={loanDetails.customerName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Customer Name"
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                required
                value={loanDetails.age}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Age"
              />
            </div>

            {/* Borrower Father/Husband Name */}
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Borrower Father/Husband Name</label>
              <input
                id="fatherName"
                name="fatherName"
                type="text"
                required
                value={loanDetails.fatherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Father/Husband Name"
              />
            </div>

            {/* Borrower Address */}
            <div>
              <label htmlFor="borrowerAddress" className="block text-sm font-medium text-gray-700">Borrower Address</label>
              <textarea
                id="borrowerAddress"
                name="borrowerAddress"
                required
                value={loanDetails.borrowerAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Borrower Address"
                rows={3}
              />
            </div>

            {/* Co-Borrower Name */}
            <div>
              <label htmlFor="coBorrowerName" className="block text-sm font-medium text-gray-700">Co-Borrower Name</label>
              <input
                id="coBorrowerName"
                name="coBorrowerName"
                type="text"
                value={loanDetails.coBorrowerName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Co-Borrower Name"
              />
            </div>

            {/* Co-Borrower Age */}
            <div>
              <label htmlFor="coBorrowerAge" className="block text-sm font-medium text-gray-700">Co-Borrower Age</label>
              <input
                id="coBorrowerAge"
                name="coBorrowerAge"
                type="number"
                value={loanDetails.coBorrowerAge}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Co-Borrower Age"
              />
            </div>

            {/* Co-Borrower Father/Husband Name */}
            <div>
              <label htmlFor="coFatherName" className="block text-sm font-medium text-gray-700">Co-Borrower Father/Husband Name</label>
              <input
                id="coFatherName"
                name="coFatherName"
                type="text"
                value={loanDetails.coFatherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Co-Borrower Father/Husband Name"
              />
            </div>

            {/* Co-Borrower Address */}
            <div>
              <label htmlFor="coBorrowerAddress" className="block text-sm font-medium text-gray-700">Co-Borrower Address</label>
              <textarea
                id="coBorrowerAddress"
                name="coBorrowerAddress"
                value={loanDetails.coBorrowerAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Co-Borrower Address"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Loan Information
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
