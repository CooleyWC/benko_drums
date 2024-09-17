import React, {useEffect, useRef} from 'react';

function Modal({open, onClose}) {

    const ref = useRef()

    useEffect(()=>{
        if(open){
            ref.current?.showModal();
        } else {
            ref.current?.close()
        }
    }, [open])

    const handleContinue = ()=>{
        onClose
        window.location.href='https://linktr.ee/tombenko'
    }

    return (
        <dialog
            ref={ref}
            onCancel={onClose}
            className='bg-slate-200 backdrop:bg-gray-600 backdrop:bg-opacity-90 max-w-3xl rounded'
        >
            <div className='p-4 flex flex-col items-center text-xl'>
                <h1 className='text-center w-full'>You are about to leave tabdrums.com and visit his Linktree site: https://linktr.ee/tombenko</h1>
            </div>
            <div className='flex flex-col items-center'>
                <button 
                    onClick={handleContinue} 
                    className='p-2 border border-green-600 mb-4 rounded transition ease-in-out delay-150 transform hover:scale-110 hover:bg-slate-100'
                    >
                        Continue
                    </button>
                <button 
                    onClick={onClose} 
                    className='p-2 border border-red-600 mb-4 rounded transition ease-in-out delay-150 transform hover:scale-110 hover:bg-slate-100'
                    >
                        Cancel
                </button>
            </div>
        </dialog>
    );
}

export default Modal;