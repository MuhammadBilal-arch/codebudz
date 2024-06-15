'use client'
import { onCreateLabReportFormat } from '@/redux/slices/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const navigate = useRouter()
    const [fields, setFields] = useState([]);
    const [newField, setNewField] = useState({ name: '', type: '' });
    const { isLoading } = useSelector((state) => state.Lab);

    const dispatch = useDispatch()

    const handleAddField = () => {
        setFields([...fields, newField]);
        setNewField({ name: '', type: '' });
    };

    const handleChangeNewField = (e) => {
        setNewField({ ...newField, [e.target.name]: e.target.value });
    };

    const handleChangeField = (index, e) => {
        const updatedFields = fields.map((field, i) =>
            i === index ? { ...field, [e.target.name]: e.target.value } : field
        );
        setFields(updatedFields);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        // console.log("Form submitted", fields,        e.target[0].value);
        const data = {
            name: e.target[0].value,
            fields: fields,
        }
        dispatch(onCreateLabReportFormat(data))
        .then(() => {
            // Navigate back to the previous page after successful dispatch
            navigate.back();
        });
    };


    return (
        <main className="w-full">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4 primary-family">Define Test Report Fields</h1>
            <form onSubmit={onSubmitForm} className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                <div className="">
                    <label className="text-black font-semibold text-xs" htmlFor="testName">
                        Test Name
                    </label>
                    <input
                        type="text"
                        id="testName"
                        name="testName"
                        required
                        className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                        placeholder="Test Name"
                    />
                </div>

                {fields.map((field, index) => (
                    <div key={index} className="">
                        <label className="text-black font-semibold text-xs">
                            {field.name}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={field.value || ''}
                            disabled
                            onChange={(e) => handleChangeField(index, e)}
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder={field.name}
                        />
                    </div>
                ))}
                <div className='col-span-3 grid grid-cols-3 gap-6'>
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="fieldName">
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="fieldName"
                            name="name"
                            value={newField.name}
                            onChange={handleChangeNewField}
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Field Name"
                        />
                    </div>
                    <div className="">
                        <label className="text-black font-semibold text-xs" htmlFor="fieldType">
                            Field Type
                        </label>
                        <input
                            type="text"
                            id="fieldType"
                            name="type"
                            value={newField.type}
                            onChange={handleChangeNewField}
                            className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                            placeholder="Field Type (e.g., text, number, date)"
                        />
                    </div>
                    <div className=' flex flex-col justify-end'>
                        <div className='text-xs text-transparent font-semibold'>Test</div>
                        <button
                            type="button"
                            onClick={handleAddField}
                            className="bg-blue-gradient text-sm w-full text-white py-1.5 self-center px-4 rounded-sm"
                        >
                            Add Field
                        </button>
                    </div>
                </div>
                <div className="">
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
