'use client'
import { useEffect, useState, useCallback, memo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateReportFormat } from '@/redux/slices/lab';

const Home = () => {
    const navigate = useRouter();
    const { id } = useParams();
    const [fields, setFields] = useState([]);
    const [newField, setNewField] = useState({ name: '', type: '' });
    const [testName, setTestName] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track the index of the field being edited
    const { reportsFormat, isLoading } = useSelector((state) => state.Lab);
    const dispatch = useDispatch();

    useEffect(() => {
        onGetReportByID();
    }, []);

    const onGetReportByID = useCallback(() => {
        const report = reportsFormat.find((item) => item.id == id);
        if (report) {
            setTestName(report.name);
            setFields(report.fields);
        }
    }, [reportsFormat, id]);

    const handleAddField = useCallback(() => {
        if (editingIndex !== null) {
            const updatedFields = fields.map((field, i) =>
                i === editingIndex ? newField : field
            );
            setFields(updatedFields);
            setEditingIndex(null);
        } else {
            setFields([...fields, newField]);
        }
        setNewField({ name: '', type: '' });
    }, [editingIndex, fields, newField]);

    const handleChangeNewField = useCallback((e) => {
        setNewField({ ...newField, [e.target.name]: e.target.value });
    }, [newField]);

    const handleEditField = useCallback((index) => {
        setNewField(fields[index]);
        setEditingIndex(index);
    }, [fields]);

    const handleDeleteField = useCallback((index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    }, [fields]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        const data = {
            id: id,
            name: testName,
            fields: fields,
        };
        dispatch(onUpdateReportFormat(data))
        .then(() => {
            // Navigate back to the previous page after successful dispatch
            navigate.back();
        });
    }, [dispatch, id, testName, fields]);

    return (
        <main className="w-full">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4 primary-family">
                Define Test Report Fields
            </h1>
            <form onSubmit={onSubmitForm} className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                <div className="">
                    <label className="text-black font-semibold text-xs" htmlFor="testName">
                        Test Name
                    </label>
                    <input
                        type="text"
                        id="testName"
                        name="testName"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        required
                        className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                        placeholder="Test Name"
                    />
                </div>

                {fields?.map((field, index) => (
                    <div key={index} className="col-span-3 grid grid-cols-4 gap-6">
                        <div className="col-span-2">
                            <label className="text-black font-semibold text-xs">
                                Field Name
                            </label>
                            <input
                                type="text"
                                disabled
                                name="name"
                                value={field.name}
                                className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                                placeholder="Field Name"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="text-black font-semibold text-xs">
                                Field Type
                            </label>
                            <input
                                type="text"
                                disabled
                                name="type"
                                value={field.type}
                                className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                                placeholder="Field Type (e.g., text, number, date)"
                            />
                        </div>
                        <div className="col-span-1 flex space-x-2 justify-end">
                            <div className='flex flex-col justify-end'>
                                <div className='text-xs text-transparent font-semibold'>Test</div>
                                <button
                                    type="button"
                                    onClick={() => handleEditField(index)}
                                    className="green-gradient text-sm w-full text-white py-1.5 self-center px-4 rounded-sm"
                                >
                                    Edit
                                </button>
                            </div>
                            <div className='flex flex-col justify-end'>
                                <div className='text-xs text-transparent font-semibold'>Test</div>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteField(index)}
                                    className="red-gradient text-sm w-full text-white py-1.5 self-center px-4 rounded-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
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
                    <div className='flex flex-col justify-end'>
                        <div className='text-xs text-transparent font-semibold'>Test</div>
                        <button
                            type="button"
                            onClick={handleAddField}
                            className="bg-blue-gradient text-sm w-full text-white py-1.5 self-center px-4 rounded-sm"
                        >
                            {editingIndex !== null ? 'Update Field' : 'Add Field'}
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
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

export default memo(Home);