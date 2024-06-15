'use client'
import { fetchLabReportFromat } from '@/redux/slices/lab';
import { onCreateReport, onUpdateReport } from '@/redux/slices/tests';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ params }) {
    console.log(params, "params")
    const navigate = useRouter()
    const [fields, setFields] = useState([]);
    const [title, setTitle] = useState()
    const [selectedReport, setSelectedReport] = useState()
    const { reportsFormat } = useSelector((state) => state.Lab);
    const { tests } = useSelector((state) => state.Test);
    const { user } = useSelector((state) => state.User);


    const dispatch = useDispatch()

    useEffect(() => {
        const data = {
            id: user.labUserId
        }
        // dispatch(fetchLabReportFromat(data))
    }, [])



    useEffect(() => {
        onFilterReportById()
    }, [params?.id])

    const onFilterReportById = () => {
        const reportId = tests.find((item) => item.id == params?.id)
        console.log(reportId)
        setSelectedReport(reportId)
        const report = reportsFormat.find((item) => item.id == reportId?.reportTypeId)
        console.log(report)
        setFields(report?.fields)
        setTitle(report?.name)
    }

    const handleChangeField = (index, e) => {
        const { name, value } = e.target;
        setFields((prevFields) =>
            prevFields.map((field, i) =>
                i === index ? { ...field, value: value } : field
            )
        );
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        const data = {
            id: params.id,
            testType: e.target['testName'].value,
            // patientName: e.target['patientName'].value,
            patientSex: e.target['patientSex'].value,
            // patientNo: e.target['patientNo'].value,
            // patientAge: e.target['patientAge'].value,
            // reportTypeId: selectedReport.reportTypeId,
            patientEmail: e.target['patientEmail'].value,
            // reportingDate: Date.now(),
            fields: fields,
            status: "COMPLETED"
        }
        console.log(data, 'data')

        dispatch(onUpdateReport(data))
            .then(() => navigate.back())
    };

    // if (isLoading) {

    // }

    console.log(selectedReport)

    return (
        <main className="w-full">
            {/* <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4 primary-family">Define Test Report Fields</h1> */}
            <form onSubmit={onSubmitForm} className='space-y-4 flex flex-col' >
                <div>Patient Details</div>
                <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="testName">
                            Test Name
                        </label>
                        <input
                            type="text"
                            id="testName"
                            value={title}
                            disabled
                            name="testName"
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Test Name"
                        />
                    </div>

                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="patientName">
                            Patient Name
                        </label>
                        <input
                            type="text"
                            id="patientName"
                            name="patientName"
                            value={selectedReport?.patient?.username}
                            disabled
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Patient Name"
                        />
                    </div>
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="patientEmail">
                            Patient Email
                        </label>
                        <input
                            type="text"
                            id="patientEmail"
                            name="patientEmail"
                            value={selectedReport?.patient?.email}
                            disabled
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Patient Email"
                        />
                    </div>
                    <div>
                        <label className="text-black font-semibold text-xs" htmlFor="patientGender">
                            Patient Gender
                        </label>

                        <div className="min-w-[150px] py-1.5 border rounded text-sm px-3">

                            <select
                                id="patientGender"
                                name="patientSex"
                                disabled
                                value={selectedReport?.patient?.gender}
                                className="w-full text-sm outline-none">
                                <option>Select Gender</option>
                                {
                                    ['Male', 'Female', 'Other'].map((item, index) =>
                                        <option key={index} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="patientNo">
                            Patient No.
                        </label>
                        <input
                            type="text"
                            id="patientNo"
                            name="patientNo"
                            value={selectedReport?.patient?.phoneNumber}
                            disabled
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Patient Name"
                        />
                    </div>
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="patientAge">
                            Patient Dob.
                        </label>
                        <input
                            type="date"
                            id="patientAge"
                            name="patientAge"
                            disabled
                            value={selectedReport?.patient?.age}
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Patient Name"
                        />
                    </div>
                </div>

                <div>Test Details</div>
                <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                    {fields?.map((field, index) => (
                        <div key={index} className="">
                            <label className="text-black font-semibold text-xs">
                                {field.name}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={field.value || ''}
                                onChange={(e) => handleChangeField(index, e)}
                                className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                                placeholder={field.name}
                            />
                        </div>
                    ))}
                </div>

                <div className="col-span-3 self-end">
                    <button
                        type="submit"
                        className="green-gradient min-w-32 text-white py-1.5 px-4 rounded-sm"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    );
}
