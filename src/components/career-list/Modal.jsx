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

    return (
        <dialog
            ref={ref}
            onCancel={onClose}
            className='backdrop:bg-gray-400 backdrop:bg-opacity-70 w-full'
        >
            <div className='p-4 flex flex-col items-center text-xl'>
                <h1>You are about to leave tabdrums.com and visit his Linktree site: https://linktr.ee/tombenko</h1>
                
            </div>
            <div className='flex flex-col items-center'>
                <button className='p-2 border border-green-600 mb-4 rounded'>Continue</button>
                <button onClick={onClose} className='p-2 border border-red-600 mb-4 rounded'>Cancel</button>
            </div>
         
        </dialog>
    );
}

export default Modal;