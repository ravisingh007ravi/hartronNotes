import React, { useState, useMemo } from "react";

export default function App() {
  const data = [
    { courseName: "Artificial Intelligence", fee: 30000 },
    { courseName: "Data Analysis", fee: 28000 },
    { courseName: "Cyber Security", fee: 45000 },
    { courseName: "Digital Marketing", fee: 15000 },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isExStudent, setIsExStudent] = useState(null);
  const [examGiven, setExamGiven] = useState(null);
  const [examPassed, setExamPassed] = useState(null);
  const [placement, setPlacement] = useState(null);
  const [paymentType, setPaymentType] = useState("");
  const [emiPlan, setEmiPlan] = useState("");

  const discount = useMemo(() => {
    if (!selectedCourse) return 0;

    let totalDiscount = 0;

    // Ex Student
    if (isExStudent === "yes") {
      totalDiscount += 20;
    }

    // Internship Exam
    if (isExStudent === "no" && examGiven === "yes" && examPassed === "yes") {
      totalDiscount += 10;
    }

    // Placement Guarantee
    if (placement === "yes") {
      totalDiscount += 100;
    } else if (placement === "no") {
      totalDiscount += 50;
    }

    // Full Payment
    if (paymentType === "full") {
      totalDiscount += 10;
    }

    // EMI Rules
    if (paymentType === "emi") {
      if (emiPlan === "6") {
        totalDiscount += 2;
      }
    }

    return totalDiscount;
  }, [
    selectedCourse,
    isExStudent,
    examGiven,
    examPassed,
    placement,
    paymentType,
    emiPlan,
  ]);

  const finalAmount = selectedCourse
    ? selectedCourse.fee -
      (selectedCourse.fee * Math.min(discount, 100)) / 100
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Course Admission Form
        </h1>

        {/* Course Selection */}
        <select
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) =>
            setSelectedCourse(
              data.find((c) => c.courseName === e.target.value)
            )
          }
        >
          <option>Select Course</option>
          {data.map((course, index) => (
            <option key={index}>{course.courseName}</option>
          ))}
        </select>

        {selectedCourse && (
          <>
            <p className="mb-4 font-semibold">
              Course Fee: ₹{selectedCourse.fee}
            </p>

            {/* Ex Student */}
            <div className="mb-4">
              <p>Are you Ex-Student?</p>
              <button
                className="btn"
                onClick={() => setIsExStudent("yes")}
              >
                Yes
              </button>
              <button
                className="btn ml-2"
                onClick={() => setIsExStudent("no")}
              >
                No
              </button>
            </div>

            {/* Internship Exam */}
            {isExStudent === "no" && (
              <div className="mb-4">
                <p>Internship Exam Given?</p>
                <button
                  className="btn"
                  onClick={() => setExamGiven("yes")}
                >
                  Yes
                </button>
                <button
                  className="btn ml-2"
                  onClick={() => setExamGiven("no")}
                >
                  No
                </button>
              </div>
            )}

            {examGiven === "yes" && (
              <div className="mb-4">
                <p>Exam Passed?</p>
                <button
                  className="btn"
                  onClick={() => setExamPassed("yes")}
                >
                  Yes
                </button>
                <button
                  className="btn ml-2"
                  onClick={() => setExamPassed("no")}
                >
                  No
                </button>
              </div>
            )}

            {/* Placement */}
            <div className="mb-4">
              <p>Want Placement Guarantee?</p>
              <button
                className="btn"
                onClick={() => setPlacement("yes")}
              >
                Yes
              </button>
              <button
                className="btn ml-2"
                onClick={() => setPlacement("no")}
              >
                No
              </button>
            </div>

            {/* Payment Type */}
            <div className="mb-4">
              <p>Payment Type</p>
              <button
                className="btn"
                onClick={() => setPaymentType("full")}
              >
                Full Payment
              </button>
              <button
                className="btn ml-2"
                onClick={() => setPaymentType("emi")}
              >
                EMI
              </button>
            </div>

            {/* EMI Options */}
            {paymentType === "emi" && (
              <div className="mb-4">
                <p>Select EMI Plan</p>
                <button
                  className="btn"
                  onClick={() => setEmiPlan("3")}
                >
                  3 Months (Free English Class)
                </button>
                <button
                  className="btn ml-2"
                  onClick={() => setEmiPlan("6")}
                >
                  6 Months (2% Discount)
                </button>
                <button
                  className="btn ml-2"
                  onClick={() => setEmiPlan("12")}
                >
                  12 Months (No Discount)
                </button>
              </div>
            )}

            {/* Result Section */}
            <div className="mt-6 p-4 bg-purple-100 rounded-xl">
              <p>Total Discount: {Math.min(discount, 100)}%</p>
              <p className="text-xl font-bold">
                Final Amount: ₹{finalAmount}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Tailwind Button Style */}
      <style>
        {`
          .btn {
            padding: 8px 16px;
            background: linear-gradient(to right, #7c3aed, #3b82f6);
            color: white;
            border-radius: 8px;
            transition: 0.3s;
          }
          .btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}